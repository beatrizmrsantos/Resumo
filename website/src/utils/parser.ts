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

  function flushPara() {
    if (!paraLines.length || !currentSection) { paraLines = []; return }
    const content = paraLines.join('\n').trim()
    if (content) currentSection.blocks.push({ type: 'paragraph', content })
    paraLines = []
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
    if (normalised) currentSection.blocks.push({ type: 'code', content: normalised, language: codeLang })
    codeLines = []
  }

  for (const line of lines) {
    const trimmed = line.trim()

    // Inside code fence
    if (inCode) {
      if (/^```\s*$/.test(trimmed)) {
        flushCode()
        inCode = false
      } else {
        codeLines.push(line)
      }
      continue
    }

    // Code fence opener
    if (/^```/.test(trimmed)) {
      flushPara()
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
      continue
    }

    // Skip other # headings (document title, etc.)
    if (/^# /.test(trimmed)) continue

    // ## N.NN Chapter — look up the part by number prefix, not by currentPart
    const chapterMatch = trimmed.match(/^## (\d+)\.(\d+)\s+(.+)$/)
    if (chapterMatch) {
      flushPara()
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
      currentSection.blocks.push({ type: 'heading', content })
      continue
    }

    // Blank line → end of paragraph
    if (!trimmed) {
      flushPara()
      continue
    }

    // Skip horizontal rules
    if (/^[-─═]{3,}$/.test(trimmed)) continue

    // Accumulate paragraph/list content
    if (currentSection) {
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
