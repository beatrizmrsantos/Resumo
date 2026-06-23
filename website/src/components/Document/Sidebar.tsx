import type { TocEntry } from '../../types'

interface Props {
  toc: TocEntry[]
  activeId: string
  onNavigate: (id: string) => void
  compact?: boolean
}

export default function Sidebar({ toc, activeId, onNavigate, compact = false }: Props) {
  return (
    <nav style={{
      width: compact ? 'auto' : 260,
      position: compact ? 'static' : 'sticky',
      top: compact ? undefined : 112,
      maxHeight: compact ? undefined : 'calc(100vh - 128px)',
      overflowY: compact ? undefined : 'auto',
      paddingTop: compact ? 14 : 28,
      paddingRight: compact ? 14 : 4,
      paddingBottom: compact ? 20 : 40,
      paddingLeft: compact ? 14 : 0,
    }}>
      <div style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        padding: '0 8px',
        marginBottom: 12,
      }}>
        Contents
      </div>

      {toc.map(part => {
        const isPartActive = part.children.some(c => c.id === activeId) || part.id === activeId

        return (
          <div key={part.id} style={{ marginBottom: 4 }}>
            {/* Part label */}
            <div style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '7px 8px',
              borderRadius: 8,
              background: isPartActive ? `${part.color}12` : 'transparent',
              color: isPartActive ? part.color : 'var(--text-primary)',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.2px',
            }}>
              <div style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: part.color,
                flexShrink: 0,
              }} />
              <span style={{ lineHeight: 1.3 }}>
                {part.label}
              </span>
            </div>

            {/* Chapter items — always visible */}
            <div style={{ paddingLeft: 14, marginTop: 2 }}>
              {part.children.map(chapter => {
                const isActive = chapter.id === activeId
                return (
                  <button
                    key={chapter.id}
                    onClick={() => onNavigate(chapter.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '5px 8px',
                      borderRadius: 6,
                      background: isActive ? `${part.color}18` : 'transparent',
                      borderLeft: isActive ? `2px solid ${part.color}` : '2px solid transparent',
                      color: isActive ? part.color : 'var(--text-secondary)',
                      fontSize: 12,
                      fontWeight: isActive ? 600 : 400,
                      textAlign: 'left',
                      cursor: 'pointer',
                      lineHeight: 1.4,
                      transition: 'all 0.12s',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'var(--bg-sidebar)'
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                      }
                    }}
                  >
                    {chapter.number && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: isActive ? part.color : 'var(--text-muted)',
                        flexShrink: 0,
                        minWidth: 28,
                      }}>
                        {chapter.number}
                      </span>
                    )}
                    <span>{chapter.label.replace(/^\d+\.\d+\s+/, '')}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
