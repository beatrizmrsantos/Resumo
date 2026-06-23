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
        style={{ position: 'relative', paddingTop: 30 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Folder tab */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 24,
          height: 32,
          padding: '0 22px',
          background: doc.color,
          borderRadius: '10px 10px 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
        }}>
          <span style={{ fontSize: 13 }}>{doc.icon}</span>
          <span style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 13,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.3px',
            whiteSpace: 'nowrap',
          }}>
            notes
          </span>
        </div>

        {/* Card body */}
        <div style={{
          background: `${doc.color}30`,
          border: `2px solid ${doc.color}60`,
          borderRadius: '0 14px 14px 14px',
          padding: '36px 36px 32px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 16px 48px ${doc.color}22, 0 4px 16px rgba(0,0,0,0.07)`
            : '0 2px 10px rgba(0,0,0,0.04)',
        }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-0.6px',
            lineHeight: 1.15,
            marginBottom: 14,
          }}>
            {doc.title}
          </h2>

          <p style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            {doc.description}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${doc.color}25`,
            paddingTop: 20,
          }}>
            <span style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 13,
              color: `${doc.color}AA`,
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
              transition: 'gap 0.15s',
            }}>
              Open <ArrowRight size={14} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
