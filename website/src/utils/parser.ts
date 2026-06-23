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

function detectLanguage(firstLine: string): string {
  const langMap: Record<string, string> = {
    java: 'java', typescript: 'typescript', ts: 'typescript',
    javascript: 'javascript', js: 'javascript', jsx: 'jsx',
    tsx: 'tsx', python: 'python', py: 'python',
    sql: 'sql', bash: 'bash', sh: 'bash',
    yaml: 'yaml', yml: 'yaml', json: 'json',
    xml: 'xml', html: 'html', css: 'css', scss: 'scss',
    dart: 'dart', kotlin: 'kotlin', swift: 'swift',
    graphql: 'graphql', dockerfile: 'dockerfile',
    c: 'c', cpp: 'cpp',
  }
  const cleaned = firstLine.trim().replace(/^`{3}/, '').toLowerCase()
  return langMap[cleaned] || 'text'
}

function looksLikeCode(lines: string[]): boolean {
  const ne = lines.filter(l => l.trim())
  if (!ne.length) return false

  // Java / OOP strong signals
  if (ne.some(l => /\b(public|private|protected|static|void|class\s+\w+|interface\s+\w+|extends|implements|throws)\b/.test(l))) return true
  // brace-pair structure: opening + matching close brace alone on a line → unambiguously code
  if (ne.some(l => l.trimEnd().endsWith('{')) && ne.some(l => /^\s*\}/.test(l))) return true
  if (ne.some(l => /\bnew\s+[A-Z]\w*\s*\(/.test(l))) return true
  if (ne.filter(l => l.trimEnd().endsWith(';')).length >= 2) return true
  if (ne.some(l => /^\s+@\w+/.test(l))) return true // annotations

  // JavaScript / TypeScript
  if (ne.some(l => /\b(const|let)\s+\w+[\s:=]/.test(l))) return true
  if (ne.some(l => /\b(export\s+(default|function|class)|import\s+.+\s+from\s+['"])/.test(l))) return true
  if (ne.some(l => /\bfunction\s+\w+\s*\(/.test(l))) return true

  // Java/C comment + supporting evidence
  const hasLineComment = ne.some(l => l.trim().startsWith('//'))
  const hasSemicolon   = ne.some(l => l.trimEnd().endsWith(';'))
  const hasMethodCall  = ne.some(l => /[a-z_]\w*\.[a-z_]\w*\(/.test(l))
  const hasBraceOpen   = ne.some(l => l.trimEnd().endsWith('{'))
  if (hasLineComment && (hasSemicolon || hasMethodCall || hasBraceOpen)) return true

  // Python
  if (ne.some(l => /^\s*def \w+\s*\(|^\s*class \w+\s*[:(]/.test(l))) return true
  if (ne.some(l => /^\s*(if .+:|for .+:|while .+:|elif .+:|except[\s:]|with .+:|return |yield |raise )/.test(l))) return true
  if (ne.some(l => /^\s*(import \w|from \w+ import)/.test(l))) return true

  // Python: inline # comment paired with an assignment
  const hasPyInline = ne.some(l => /\s{2,}#/.test(l))
  const hasPyAssign = ne.some(l => /^\s+\w+\s*=\s*[^\s—]/.test(l) && !/ —/.test(l) && !/^\s+\w+:/.test(l))
  if (hasPyInline && hasPyAssign) return true
  if (ne.some(l => l.trim().startsWith('#')) && (hasPyAssign || hasMethodCall)) return true

  // CSS / SCSS
  const hasCSSSelector = ne.some(l =>
    /^\s*(?:[.#:*&]|::)[\w\s.#:,()*>~[\]="'-]*\s*\{/.test(l) ||
    /^\s*@(?:media|keyframes|supports|font-face|layer|mixin|include)\b/.test(l))
  const hasCSSProp = ne.some(l => /[\w-]+\s*:\s*[^{}\n]+;/.test(l))
  const hasCSSComment = ne.some(l => /\/\*/.test(l))
  if (hasCSSSelector) return true
  if (hasCSSComment && hasCSSProp) return true

  // HTML / XML — but NOT definition lines like `<tag>  — description`
  if (ne.some(l => /<!--/.test(l))) return true                        // HTML comment
  if (ne.some(l => /<[a-zA-Z][^>]*=["']/.test(l))) return true        // tag with quoted attribute
  if (ne.some(l => /<\/[a-zA-Z]/.test(l) && !/ —/.test(l))) return true  // closing tag, not a definition

  // SQL
  if (ne.some(l => /^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|FROM|WHERE|JOIN|GROUP BY|ORDER BY)\b/i.test(l))) return true

  // Shell / CLI
  if (ne.some(l => /^\s*(docker |kubectl |git |npm |mvn |java -|curl |wget |\$ |#!)/.test(l))) return true

  return false
}

function detectLang(lines: string[]): string {
  const text = lines.join('\n')
  if (/^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|FROM|WHERE|JOIN)\b/mi.test(text)) return 'sql'
  if (/^\s*(def \w|class \w+[:(]|@\w+\s*\ndef )|self\.\w+/m.test(text)) return 'python'
  if (/\b(const|let)\s+\w+[\s:=]|interface\s+\w+|type\s+\w+\s*=|:\s*(string|number|boolean|void)\b/.test(text)) return 'typescript'
  if (/\b(const|let|var)\s+\w+\s*=|\bfunction\s+\w+\s*\(|\bmodule\.exports|\bconsole\.log/.test(text)) return 'javascript'
  if (/^\s*(docker |kubectl |git |npm |mvn |java -|curl |wget |\$ |#!\/)/.test(text)) return 'bash'
  if (/<(!DOCTYPE|html|head|body|div|span|header|nav|main|footer|article|section|script|style|ul|li|p\b|h[1-6]\b|img|a\b|form|input)\b/i.test(text)) return 'html'
  if (/\$[\w-]+\s*:|@mixin\s|@include\s|@extend\s|@each\s|@for\s|#{/.test(text)) return 'scss'
  if (/^\s*[.#:*&][\w\s.#:,*>()+~[\]="'-]*\s*\{|@media\s|@keyframes\s|@supports\s/.test(text)) return 'css'
  if (/\/\*/.test(text) && /[\w-]+\s*:\s*[^{}\n]+;/.test(text)) return 'css'
  if (/^\s*<\w+[\s/>]|<\/\w+>/.test(text)) return 'xml'
  return 'java'
}

function parseBlocks(rawText: string): Block[] {
  const lines = rawText.split('\n')
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // Code fence: optional leading whitespace + ```lang
    if (/^\s*```/.test(line) && !trimmed.endsWith('```')) {
      const language = detectLanguage(trimmed)
      const codeLines: string[] = []
      i++
      while (i < lines.length) {
        const codeLine = lines[i]
        if (/^\s*```\s*$/.test(codeLine)) { i++; break }
        codeLines.push(codeLine)
        i++
      }
      const minIndent = codeLines
        .filter(l => l.trim().length > 0)
        .reduce((min, l) => Math.min(min, l.match(/^(\s*)/)?.[1].length ?? 0), Infinity)
      const normalised = codeLines
        .map(l => l.slice(Math.min(minIndent === Infinity ? 0 : minIndent, 2)))
        .join('\n').trim()
      if (normalised) blocks.push({ type: 'code', content: normalised, language })
      continue
    }

    // ALL CAPS section heading (checked before indented-block logic)
    if (
      trimmed.length > 2 && trimmed.length < 80 &&
      trimmed === trimmed.toUpperCase() &&
      /^[A-Z][A-Z\s\/\-–—().,@]+$/.test(trimmed) &&
      !trimmed.startsWith('=') && !trimmed.startsWith('─')
    ) {
      blocks.push({ type: 'heading', content: trimmed })
      i++
      continue
    }

    // Separator lines
    if (/^[=─]{10,}$/.test(trimmed)) { i++; continue }

    // Indented block (2+ spaces, not a bullet) — detect code vs prose
    if (trimmed.length > 0 && /^ {2,}/.test(line) &&
        !trimmed.startsWith('•') && !trimmed.startsWith('─')) {
      const blockLines: string[] = [line]
      i++
      while (i < lines.length) {
        const l = lines[i]
        const t = l.trim()
        if (!t) { i++; break }                          // blank line ends block
        if (/^[=─]{10,}$/.test(t)) break               // separator ends block
        if (/^ {2,}/.test(l)) { blockLines.push(l); i++ }
        else break                                       // back to column 0
      }

      const ne = blockLines.filter(l => l.trim())
      if (looksLikeCode(ne)) {
        const lang = detectLang(ne)
        const minInd = ne.reduce((m, l) => Math.min(m, l.match(/^ */)?.[0].length ?? 0), Infinity)
        const code = blockLines
          .map(l => (l.length > minInd ? l.slice(minInd) : l.trim()))
          .join('\n').trim()
        if (code) blocks.push({ type: 'code', content: code, language: lang })
      } else {
        const content = ne.map(l => l.trim()).join('\n')
        if (content) blocks.push({ type: 'paragraph', content })
      }
      continue
    }

    // Regular paragraph — stop at blank lines, separators, or indented lines
    if (trimmed.length > 0) {
      const paraLines: string[] = [trimmed]
      i++
      while (i < lines.length) {
        const next = lines[i].trim()
        if (
          !next ||
          /^\s*```/.test(lines[i]) ||
          /^[=─]{10,}$/.test(next) ||
          /^ {2,}/.test(lines[i])
        ) break
        paraLines.push(next)
        i++
      }
      const content = paraLines.join('\n')
      if (content.trim()) blocks.push({ type: 'paragraph', content })
      continue
    }

    i++
  }

  // Merge consecutive code blocks (blank lines in source split them, but they belong together)
  const merged: Block[] = []
  for (const block of blocks) {
    const prev = merged[merged.length - 1]
    if (block.type === 'code' && prev?.type === 'code') {
      const combined = prev.content + '\n\n' + block.content
      prev.content = combined
      prev.language = detectLang(combined.split('\n'))
    } else {
      merged.push(block)
    }
  }
  return merged
}

function parsePartContent(
  contentChunk: string,
  partColor: string,
): Section[] {
  const minorSepRegex = /^─{40,}\s*$/m
  const sectionBlocks = contentChunk.split(minorSepRegex)

  const sections: Section[] = []
  let currentSectionTitle = ''
  let currentSectionNumber: string | undefined
  let isChapterTitle = false

  for (let si = 0; si < sectionBlocks.length; si++) {
    const block = sectionBlocks[si].trim()
    if (!block) continue

    const lines = block.split('\n').filter(l => l.trim())
    const firstLine = lines[0]?.trim() ?? ''
    const chapterMatch = firstLine.match(/^(\d+\.\d+)\s+(.+)$/)
    const isChapterNum = !!chapterMatch

    const isTitleBlock =
      lines.length <= 3 &&
      (isChapterNum || firstLine === firstLine.toUpperCase()) &&
      firstLine.length < 100

    if (isTitleBlock && si + 1 < sectionBlocks.length) {
      currentSectionTitle = firstLine
      currentSectionNumber = chapterMatch?.[1]
      isChapterTitle = isChapterNum
      continue
    }

    if (!currentSectionTitle) {
      currentSectionTitle = firstLine || 'Overview'
      currentSectionNumber = undefined
      isChapterTitle = false
    }

    const sectionId = currentSectionNumber
      ? `section-${currentSectionNumber.replace('.', '-')}`
      : `section-${slugify(currentSectionTitle)}`

    const section: Section = {
      id: sectionId,
      title: currentSectionTitle,
      level: isChapterTitle ? 'chapter' : 'subsection',
      number: currentSectionNumber,
      partColor,
      blocks: parseBlocks(block),
    }

    if (section.blocks.length > 0) {
      sections.push(section)
    }

    currentSectionTitle = ''
    currentSectionNumber = undefined
  }

  return sections
}

function parseOrphanedChapter(
  chapterNumStr: string,
  chapterTitle: string,
  contentChunk: string,
  partColor: string,
): Section[] {
  const minorSepRegex = /^─{40,}\s*$/m
  const sectionBlocks = contentChunk.split(minorSepRegex)

  // First block is the chapter's own content (OVERVIEW etc.), no title block precedes it
  const sectionId = `section-${chapterNumStr.replace('.', '-')}`
  const chapterSection: Section = {
    id: sectionId,
    title: chapterTitle,
    level: 'chapter',
    number: chapterNumStr,
    partColor,
    blocks: parseBlocks(sectionBlocks[0] ?? ''),
  }

  const subsections: Section[] = []
  let currentTitle = ''

  for (let si = 1; si < sectionBlocks.length; si++) {
    const block = sectionBlocks[si].trim()
    if (!block) continue

    const lines = block.split('\n').filter(l => l.trim())
    const firstLine = lines[0]?.trim() ?? ''
    const isTitleBlock =
      lines.length <= 3 &&
      firstLine === firstLine.toUpperCase() &&
      firstLine.length < 100 &&
      /^[A-Z]/.test(firstLine) &&
      !/^\d+\.\d+/.test(firstLine)

    if (isTitleBlock && si + 1 < sectionBlocks.length) {
      currentTitle = firstLine
      continue
    }

    if (currentTitle) {
      subsections.push({
        id: `section-${slugify(currentTitle)}`,
        title: currentTitle,
        level: 'subsection',
        partColor,
        blocks: parseBlocks(block),
      })
      currentTitle = ''
    } else {
      // Append to chapter content as extra blocks
      chapterSection.blocks.push(...parseBlocks(block))
    }
  }

  const result: Section[] = []
  if (chapterSection.blocks.length > 0) result.push(chapterSection)
  result.push(...subsections)
  return result
}

export function parseDocument(rawContent: string): ParsedDocument {
  const majorSepRegex = /^={40,}\s*$/m
  const chunks = rawContent.split(majorSepRegex)

  // Skip TABLE OF CONTENTS chunk and its content chunk
  const skipIndices = new Set<number>()
  for (let i = 0; i < chunks.length; i++) {
    if (/TABLE OF CONTENTS/.test(chunks[i])) {
      skipIndices.add(i)
      skipIndices.add(i + 1)
    }
  }

  const parts: Part[] = []
  const processedIndices = new Set<number>()

  // First pass: find all PART sections
  for (let ci = 0; ci < chunks.length; ci++) {
    if (skipIndices.has(ci)) continue

    const chunk = chunks[ci].trim()
    if (!chunk) continue

    const partMatch = chunk.match(/^PART\s+(\d+)\s*[—–-]+\s*(.+)/m)
    if (!partMatch) continue

    // Skip if chunk also contains chapter listings (TOC-like)
    if (/^\s+\d+\.\d+\s+/m.test(chunk)) continue

    processedIndices.add(ci)

    const partNumber = partMatch[1]
    const partTitle = partMatch[2].trim()
    const color = PART_COLORS[partNumber] ?? DEFAULT_COLOR
    const partId = `part-${partNumber}`

    const contentChunk = chunks[ci + 1] ?? ''
    processedIndices.add(ci + 1)
    ci++

    const sections = parsePartContent(contentChunk, color)
    if (sections.length > 0) {
      parts.push({ id: partId, number: partNumber, title: partTitle, color, sections })
    }
  }

  // Second pass: handle orphaned chapter sections (N.NN TITLE as standalone chunk)
  for (let ci = 0; ci < chunks.length; ci++) {
    if (skipIndices.has(ci) || processedIndices.has(ci)) continue

    const chunk = chunks[ci].trim()
    if (!chunk) continue

    // Must be a short chunk that is just a chapter number + title
    const lines = chunk.split('\n').filter(l => l.trim())
    if (lines.length > 2) continue

    const orphanMatch = chunk.match(/^(\d+)\.(\d+)\s+(.+)$/)
    if (!orphanMatch) continue

    const partNum = orphanMatch[1]
    const chapterNumStr = `${orphanMatch[1]}.${orphanMatch[2]}`
    const chapterTitle = orphanMatch[3].trim()

    if (/APPENDIX/i.test(chapterTitle)) continue

    const existingPart = parts.find(p => p.number === partNum)
    if (!existingPart) continue

    processedIndices.add(ci)
    const contentChunk = chunks[ci + 1] ?? ''
    if (contentChunk) processedIndices.add(ci + 1)

    const newSections = parseOrphanedChapter(
      chapterNumStr,
      chapterTitle,
      contentChunk,
      existingPart.color,
    )
    existingPart.sections.push(...newSections)
  }

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
        label: s.number ? `${s.number}  ${s.title.replace(/^\d+\.\d+\s+/, '')}` : s.title,
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
