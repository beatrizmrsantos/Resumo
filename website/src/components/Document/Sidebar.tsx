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
        color: compact ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
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
              background: compact
                ? (isPartActive ? 'rgba(255,255,255,0.15)' : 'transparent')
                : (isPartActive ? `${part.color}12` : 'transparent'),
              color: compact ? 'white' : (isPartActive ? part.color : 'var(--text-primary)'),
              fontSize: compact ? 14 : 12,
              fontWeight: 700,
              letterSpacing: '0.2px',
            }}>
              <div style={{
                width: compact ? 8 : 6,
                height: compact ? 8 : 6,
                borderRadius: '50%',
                background: compact ? 'rgba(255,255,255,0.7)' : part.color,
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
                      padding: compact ? '7px 8px' : '5px 8px',
                      borderRadius: 6,
                      background: compact
                        ? (isActive ? 'rgba(255,255,255,0.2)' : 'transparent')
                        : (isActive ? `${part.color}18` : 'transparent'),
                      borderLeft: isActive
                        ? `2px solid ${compact ? 'white' : part.color}`
                        : '2px solid transparent',
                      color: compact
                        ? (isActive ? 'white' : 'rgba(255,255,255,0.8)')
                        : (isActive ? part.color : 'var(--text-secondary)'),
                      fontSize: compact ? 13 : 12,
                      fontWeight: isActive ? 600 : 400,
                      textAlign: 'left',
                      cursor: 'pointer',
                      lineHeight: 1.4,
                      transition: 'all 0.12s',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = compact ? 'rgba(255,255,255,0.12)' : 'var(--bg-sidebar)'
                        e.currentTarget.style.color = compact ? 'white' : 'var(--text-primary)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = compact ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)'
                      }
                    }}
                  >
                    {chapter.number && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: compact ? 11 : 10,
                        color: compact
                          ? (isActive ? 'white' : 'rgba(255,255,255,0.55)')
                          : (isActive ? part.color : 'var(--text-muted)'),
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
