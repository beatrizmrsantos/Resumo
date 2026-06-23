import CodeBlock from './CodeBlock'
import type { Section } from '../../types'

interface Props {
  section: Section
  searchQuery?: string
}

// Markdown inline tokens: **bold**, *italic*, `code`, CamelCase identifiers, etc.
const INLINE_RE = new RegExp(
  [
    '\\*\\*([^*]+)\\*\\*',                          // **bold**
    '\\*([^*]+)\\*',                                 // *italic*
    '`([^`]+)`',                                     // `inline code`
    '@[A-Z]\\w*',                                    // @Annotation
    '\\bO\\([^)]{1,24}\\)',                          // O(n) complexity
    '\\b\\w+[\\w.]*\\([^)]{0,80}\\)',               // method()
    '\\b(?:[A-Z][a-z]*){2,}(?:<[\\w,.<> ]*>)?(?:\\[\\])?\\b',  // CamelCase
    '\\b[A-Z]\\w+<[\\w,.<> ]+>',                   // Generic<Type>
    '\\b(?:null|undefined|true|false|NaN)\\b',
  ].join('|'),
  'g'
)

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i}>{part}</mark>
      : part
  )
}

const INLINE_CODE_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.84em',
  background: 'rgba(99,102,241,0.1)',
  border: '1px solid rgba(99,102,241,0.2)',
  borderRadius: 4,
  padding: '1px 5px',
  color: '#5B21B6',
  whiteSpace: 'nowrap',
}

function splitKeyVal(text: string): [string, string] {
  const dashIdx = text.indexOf(' — ')
  const colonIdx = text.indexOf(':')
  if (dashIdx > 0 && (colonIdx < 0 || dashIdx < colonIdx)) {
    return [text.slice(0, dashIdx).trim(), text.slice(dashIdx + 3).trim()]
  }
  if (colonIdx > 0) {
    return [text.slice(0, colonIdx).trim(), text.slice(colonIdx + 1).trim()]
  }
  return [text, '']
}

export default function SectionContent({ section, searchQuery = '' }: Props) {
  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []
    let last = 0
    INLINE_RE.lastIndex = 0

    let match: RegExpExecArray | null
    while ((match = INLINE_RE.exec(text)) !== null) {
      if (match.index > last) {
        const before = text.slice(last, match.index)
        parts.push(searchQuery.trim() ? highlightText(before, searchQuery) : before)
      }

      const full = match[0]
      const boldContent  = match[1]
      const italicContent = match[2]
      const codeContent  = match[3]

      if (boldContent !== undefined) {
        parts.push(
          <strong key={match.index} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
            {searchQuery.trim() ? highlightText(boldContent, searchQuery) : boldContent}
          </strong>
        )
      } else if (italicContent !== undefined) {
        parts.push(<em key={match.index}>{italicContent}</em>)
      } else if (codeContent !== undefined) {
        parts.push(
          <code key={match.index} style={INLINE_CODE_STYLE}>
            {searchQuery.trim() ? highlightText(codeContent, searchQuery) : codeContent}
          </code>
        )
      } else {
        parts.push(
          <code key={match.index} style={INLINE_CODE_STYLE}>
            {searchQuery.trim() ? highlightText(full, searchQuery) : full}
          </code>
        )
      }

      last = match.index + full.length
    }

    if (last < text.length) {
      const after = text.slice(last)
      parts.push(searchQuery.trim() ? highlightText(after, searchQuery) : after)
    }
    return parts.length === 0 ? text : parts.length === 1 ? parts[0] : <>{parts}</>
  }

  const renderLine = (rawLine: string, li: number): React.ReactNode => {
    const trimmed = rawLine.trim()
    if (!trimmed) return null

    // Strip markdown bold/italic markers for pattern matching only
    const bare = trimmed.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1')

    // ── Bullet ──────────────────────────────────────────────────────────────
    if (/^[-•*]\s/.test(bare)) {
      return (
        <div key={li} style={{
          display: 'flex', gap: 10, paddingLeft: 4,
          color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6,
        }}>
          <span style={{ color: section.partColor, flexShrink: 0, fontWeight: 700, marginTop: 2 }}>›</span>
          <span>{renderInline(bare.replace(/^[-•*]\s*/, ''))}</span>
        </div>
      )
    }

    // ── Category header: ALL_CAPS WORD(S) — description ─────────────────────
    if (/^[A-Z]{2,}(?:\s+[A-Z0-9]+)*\s+[—–]/.test(bare)) {
      const [catName, catDesc] = splitKeyVal(bare)
      return (
        <div key={li} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginTop: 18, marginBottom: 4, flexWrap: 'wrap',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 800,
            color: 'white', background: section.partColor,
            padding: '3px 11px', borderRadius: 5,
            letterSpacing: '0.7px', textTransform: 'uppercase',
            flexShrink: 0,
          }}>
            {catName}
          </span>
          {catDesc && (
            <span style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.4 }}>
              {renderInline(catDesc)}
            </span>
          )}
        </div>
      )
    }

    // ── Definition lines (tested on `bare`, rendered with `trimmed`) ─────────
    const isUpperDef  = /^[A-Z][A-Z\s/]+:/.test(bare)
    const isPascalDef = /^[A-Z][a-z]\w*[:(]/.test(bare) && /^[A-Z][a-z]\w*:/.test(bare)
    const isLowerDef  = /^[a-z_][\w-]*\s*[—:]/.test(bare)

    if (isUpperDef || isPascalDef || isLowerDef) {
      const [key, val] = splitKeyVal(bare)
      return (
        <div key={li} style={{
          display: 'flex', alignItems: 'baseline', gap: 6,
          fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)',
          paddingLeft: isPascalDef ? 8 : 0,
          borderLeft: isPascalDef ? `2px solid ${section.partColor}30` : 'none',
          marginLeft: isPascalDef ? 4 : 0,
        }}>
          <code style={{
            fontFamily: 'var(--font-mono)',
            fontSize: isPascalDef ? 11 : 12,
            fontWeight: 600,
            color: isPascalDef ? section.partColor : 'var(--text-primary)',
            background: isPascalDef ? `${section.partColor}12` : 'rgba(0,0,0,0.05)',
            padding: '1px 6px', borderRadius: 4,
            border: isPascalDef
              ? `1px solid ${section.partColor}30`
              : '1px solid var(--border)',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}>
            {key}
          </code>
          {val && <span>{renderInline(val)}</span>}
        </div>
      )
    }

    // ── Regular paragraph ─────────────────────────────────────────────────────
    return (
      <p key={li} style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
        {renderInline(trimmed)}
      </p>
    )
  }

  return (
    <div id={section.id} style={{ scrollMarginTop: '80px', marginBottom: 0 }}>
      {/* Chapter header */}
      {section.level === 'chapter' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, paddingTop: 16 }}>
          {section.number && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
              color: section.partColor,
              background: `${section.partColor}15`,
              border: `1px solid ${section.partColor}30`,
              padding: '4px 9px', borderRadius: 6, letterSpacing: '0.5px', flexShrink: 0,
            }}>
              {section.number}
            </span>
          )}
          <h2 style={{
            fontSize: 26, fontWeight: 900, color: 'var(--text-primary)',
            letterSpacing: '-0.5px', lineHeight: 1.15,
          }}>
            {highlightText(section.title.replace(/^\d+\.\d+\s+/, ''), searchQuery)}
          </h2>
        </div>
      )}

      {/* Subsection header */}
      {section.level === 'subsection' && (
        <div style={{
          borderLeft: `3px solid ${section.partColor}`,
          paddingLeft: 14, marginBottom: 18, marginTop: 32,
        }}>
          <h3 style={{
            fontSize: 15, fontWeight: 700, color: 'var(--text-primary)',
            letterSpacing: '0.3px', textTransform: 'uppercase',
          }}>
            {highlightText(section.title, searchQuery)}
          </h3>
        </div>
      )}

      {/* Content blocks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {section.blocks.map((block, i) => {
          if (block.type === 'code') {
            return <CodeBlock key={i} code={block.content} language={block.language} />
          }

          if (block.type === 'heading') {
            return (
              <h4 key={i} style={{
                fontSize: 13, fontWeight: 800, color: 'var(--text-primary)',
                letterSpacing: '1px', textTransform: 'uppercase',
                marginTop: 8, marginBottom: -4,
              }}>
                {highlightText(block.content, searchQuery)}
              </h4>
            )
          }

          const lines = block.content.split('\n')
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {lines.map((line, li) => renderLine(line.trim(), li))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
