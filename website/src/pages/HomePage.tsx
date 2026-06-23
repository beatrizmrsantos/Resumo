import { documents } from '../content'
import DocumentCard from '../components/Home/DocumentCard'

export default function HomePage() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px 100px' }}>

      {/* Hero */}
      <div style={{ marginBottom: 72 }}>
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--font-hand)',
          fontSize: 14,
          fontWeight: 600,
          color: '#E84393',
          background: '#E8439315',
          border: '1px solid #E8439330',
          borderRadius: 8,
          padding: '5px 14px',
          marginBottom: 22,
          letterSpacing: '0.4px',
        }}>
          ✦ Interview Prep
        </div>

        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 64px)',
          fontWeight: 900,
          color: 'var(--text-primary)',
          letterSpacing: '-1.5px',
          lineHeight: 1.05,
          marginBottom: 22,
        }}>
          My Study Notes<br />
          <span style={{
            color: 'transparent',
            WebkitTextStroke: '2px var(--text-primary)',
          }}>
            for Job Interviews
          </span>
        </h1>

        <p style={{
          fontSize: 16,
          color: 'var(--text-secondary)',
          maxWidth: 500,
          lineHeight: 1.7,
        }}>
          A personal knowledge base with deep explanations, code examples,
          and everything I need to walk into any tech interview with confidence.
        </p>
      </div>

      {/* Section label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 40,
      }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--text-muted)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        }}>
          Documents
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      {/* Folder cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: 32,
        marginBottom: 48,
      }}>
        {documents.map(doc => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>

      {/* Add new document tip */}
      <div style={{
        padding: '18px 24px',
        background: 'var(--bg-sidebar)',
        border: '1.5px dashed var(--border-strong)',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        color: 'var(--text-muted)',
        fontSize: 13,
      }}>
        <span style={{ fontSize: 18 }}>📄</span>
        <span>
          To add a new document: drop a{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--border)', padding: '1px 5px', borderRadius: 4 }}>.txt</code>
          {' '}file in{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--border)', padding: '1px 5px', borderRadius: 4 }}>docs/</code>
          {' '}and register it in{' '}
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, background: 'var(--border)', padding: '1px 5px', borderRadius: 4 }}>website/src/content/index.ts</code>
        </span>
      </div>

    </div>
  )
}
