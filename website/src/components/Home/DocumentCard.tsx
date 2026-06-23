import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { DocumentMeta } from '../../types'

interface Props {
  doc: DocumentMeta
}

export default function DocumentCard({ doc }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/doc/${doc.id}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div
        style={{ position: 'relative', paddingTop: 34 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Folder tab — starts at left edge, ~44% wide, like a macOS folder */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '44%',
          height: 34,
          background: doc.color,
          borderRadius: '12px 12px 0 0',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 18,
          gap: 8,
        }}>
          <span style={{ fontSize: 14, lineHeight: 1 }}>{doc.icon}</span>
          <span style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 18,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.2px',
            whiteSpace: 'nowrap',
          }}>
            notes
          </span>
        </div>

        {/* Folder body */}
        <div style={{
          background: `${doc.color}45`,
          borderRadius: '0 16px 16px 16px',
          padding: '34px 34px 28px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 20px 52px ${doc.color}30, 0 6px 20px rgba(0,0,0,0.08)`
            : `0 4px 20px ${doc.color}18, 0 2px 8px rgba(0,0,0,0.04)`,
        }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-0.6px',
            lineHeight: 1.15,
            marginBottom: 12,
          }}>
            {doc.title}
          </h2>

          <p style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: 28,
          }}>
            {doc.description}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${doc.color}30`,
            paddingTop: 18,
          }}>
            <span style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 17,
              color: `${doc.color}99`,
            }}>
              {doc.filename}
            </span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              fontWeight: 700,
              color: doc.color,
            }}>
              Open <ArrowRight size={14} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
