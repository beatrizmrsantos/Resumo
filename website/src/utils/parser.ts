import type { Block, Part, ParsedDocument, Section, TocEntry } from '../types'

const PART_COLORS: Record<string, string> = {
  '1': '#E84393',
  '2': '#7C3AED',
  '3': '#2563EB',
  '4': '#059669',
  '5': '#D97706',
  '6': '#0891B2',
  '7': '#DC2626',
}

const DEFAULT_COLOR = '#6B7280'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function detectLanguage(fenceLine: string): string {
  const langMap: Record<string, string> = {
    java: 'java', typescript: 'typescript', ts: 'typescript',
    javascript: 'javascript', js: 'javascript', jsx: 'jsx',
    tsx: 'tsx', python: 'python', py: 'python',
    sql: 'sql', bash: 'bash', sh: 'bash',
    yaml: 'yaml', yml: 'yaml', json: 'json',
    xml: 'xml', html: 'html', css: 'css', scss: 'scss',
    dart: 'dart', kotlin: 'kotlin', swift: 'swift',
    graphql: 'graphql', dockerfile: 'dockerfile',
    c: 'c', cpp: 'cpp', text: 'text',
  }
  const lang = fenceLine.trim().replace(/^`{3}/, '').toLowerCase().trim()
  return langMap[lang] ?? (lang || 'text')
}

export function parseDocument(rawContent: string): ParsedDocument {
  const lines = rawContent.split('\n')
  const parts: Part[] = []

  let currentPart: Part | null = null
  let currentSection: Section | null = null
  let currentChapterNum: string | null = null
  let inCode = false
  let codeLang = 'text'
  let codeLines: string[] = []
  let paraLines: string[] = []
  let inToc = false
  let blankCount = 0        // consecutive blank lines since last content
  let paraSpacing = 0       // spacing captured when paragraph accumulation starts
  let codeSpacing = 0       // spacing captured when code fence opens

  function flushPara() {
    if (!paraLines.length || !currentSection) { paraLines = []; return }
    const content = paraLines.join('\n').trim()
    if (content) currentSection.blocks.push({ type: 'paragraph', content, spacingBefore: paraSpacing })
    paraLines = []
    paraSpacing = 0
  }

  function flushCode() {
    if (!codeLines.length || !currentSection) { codeLines = []; return }
    const nonEmpty = codeLines.filter(l => l.trim())
    const minIndent = nonEmpty.length
      ? nonEmpty.reduce((min, l) => Math.min(min, l.match(/^(\s*)/)?.[1].length ?? 0), Infinity)
      : 0
    const normalised = codeLines
      .map(l => l.slice(Math.min(minIndent === Infinity ? 0 : minIndent, 2)))
      .join('\n')
      .replace(/^\n+|\n+$/g, '')
    if (normalised) currentSection.blocks.push({ type: 'code', content: normalised, language: codeLang, spacingBefore: codeSpacing })
    codeLines = []
    codeSpacing = 0
  }

  const parseTableRow = (s: string): string[] =>
    s.split('|').map(c => c.trim()).filter(c => c !== '')

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx]
    const trimmed = line.trim()

    // Inside code fence
    if (inCode) {
      if (/^```\s*$/.test(trimmed)) {
        flushCode()
        inCode = false
        blankCount = 0
      } else {
        codeLines.push(line)
      }
      continue
    }

    // Code fence opener
    if (/^```/.test(trimmed)) {
      flushPara()
      codeSpacing = blankCount
      blankCount = 0
      codeLang = detectLanguage(trimmed)
      inCode = true
      codeLines = []
      continue
    }

    // Skip Table of Contents section
    if (/^## Table of Contents/.test(trimmed)) { inToc = true; continue }
    if (inToc) {
      if (/^# Part \d/.test(trimmed)) inToc = false
      else continue
    }

    // # Part N — Title
    const partMatch = trimmed.match(/^# Part (\d+)\s*[—–-]+\s*(.+)$/)
    if (partMatch) {
      flushPara()
      const num = partMatch[1]
      const color = PART_COLORS[num] ?? DEFAULT_COLOR
      currentPart = {
        id: `part-${num}`,
        number: num,
        title: partMatch[2].trim(),
        color,
        sections: [],
      }
      parts.push(currentPart)
      currentSection = null
      currentChapterNum = null
      blankCount = 0
      continue
    }

    // Skip other # headings (document title, etc.)
    if (/^# /.test(trimmed)) continue

    // ## N.NN Chapter — look up the part by number prefix, not by currentPart
    const chapterMatch = trimmed.match(/^## (\d+)\.(\d+)\s+(.+)$/)
    if (chapterMatch) {
      flushPara()
      blankCount = 0
      const partNum = chapterMatch[1]
      const num = `${chapterMatch[1]}.${chapterMatch[2]}`
      const title = chapterMatch[3].trim()
      const targetPart: Part | null = parts.find(p => p.number === partNum) ?? currentPart
      if (targetPart) {
        currentPart = targetPart
        currentChapterNum = num
        currentSection = {
          id: `section-${num.replace('.', '-')}`,
          title,
          level: 'chapter',
          number: num,
          partColor: targetPart.color,
          blocks: [],
        }
        targetPart.sections.push(currentSection)
      }
      continue
    }

    // ### Subsection
    if (/^### /.test(trimmed) && currentPart) {
      flushPara()
      blankCount = 0
      const title = trimmed.replace(/^### /, '').trim()
      const prefix = currentChapterNum ? `${currentChapterNum.replace('.', '-')}-` : ''
      currentSection = {
        id: `section-${prefix}${slugify(title)}`,
        title,
        level: 'subsection',
        partColor: currentPart.color,
        blocks: [],
      }
      currentPart.sections.push(currentSection)
      continue
    }

    // #### Sub-heading → heading block within current section
    if (/^#### /.test(trimmed) && currentSection) {
      flushPara()
      const content = trimmed.replace(/^#### /, '').trim()
      currentSection.blocks.push({ type: 'heading', content, spacingBefore: blankCount })
      blankCount = 0
      continue
    }

    // Blank line → end of paragraph, increment blank counter
    if (!trimmed) {
      if (paraLines.length) flushPara()
      blankCount++
      continue
    }

    // Skip horizontal rules
    if (/^[-─═]{3,}$/.test(trimmed)) continue

    // Table detection: line has | and next line is a separator (---|---|---)
    if (currentSection && trimmed.includes('|')) {
      const nextTrimmed = lines[lineIdx + 1]?.trim() ?? ''
      if (/^[-|:\s]+$/.test(nextTrimmed) && nextTrimmed.includes('-')) {
        flushPara()
        const headers = parseTableRow(trimmed)
        lineIdx += 2 // skip header row + separator row
        const rows: string[][] = []
        while (lineIdx < lines.length) {
          const rowLine = lines[lineIdx].trim()
          if (!rowLine || !rowLine.includes('|')) break
          rows.push(parseTableRow(rowLine))
          lineIdx++
        }
        lineIdx-- // back up: loop will increment
        currentSection.blocks.push({ type: 'table', content: '', headers, rows, spacingBefore: blankCount })
        blankCount = 0
        continue
      }
    }

    // Accumulate paragraph/list content
    if (currentSection) {
      if (paraLines.length === 0) {
        // First line of a new paragraph — capture how many blanks preceded it
        paraSpacing = blankCount
        blankCount = 0
      }
      paraLines.push(trimmed)
    }
  }

  flushPara()

  return { parts }
}

export function buildToc(parsed: ParsedDocument): TocEntry[] {
  return parsed.parts.map(part => ({
    id: part.id,
    label: `Part ${part.number} — ${part.title}`,
    level: 'part' as const,
    color: part.color,
    children: part.sections
      .filter(s => s.level === 'chapter')
      .map(s => ({
        id: s.id,
        label: s.number ? `${s.number}  ${s.title}` : s.title,
        number: s.number,
        level: 'chapter' as const,
        color: part.color,
        children: [],
      })),
  }))
}

export function searchDocument(
  parsed: ParsedDocument,
  query: string
): { sectionId: string; sectionTitle: string; partTitle: string; snippet: string; color: string }[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  const results: ReturnType<typeof searchDocument> = []
  const seen = new Set<string>()

  for (const part of parsed.parts) {
    for (const section of part.sections) {
      if (seen.has(section.id)) continue
      const fullText = section.blocks.map(b => b.content).join(' ')
      if (fullText.toLowerCase().includes(q)) {
        const idx = fullText.toLowerCase().indexOf(q)
        const start = Math.max(0, idx - 60)
        const end = Math.min(fullText.length, idx + query.length + 80)
        const snippet = (start > 0 ? '…' : '') + fullText.slice(start, end) + (end < fullText.length ? '…' : '')
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          partTitle: part.title,
          snippet,
          color: part.color,
        })
        seen.add(section.id)
      }
    }
  }

  return results.slice(0, 30)
}
