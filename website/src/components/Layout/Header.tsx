import { Link, useLocation } from 'react-router-dom'
import { BookOpen, ChevronLeft } from 'lucide-react'
import { useMobile } from '../../hooks/useMobile'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isMobile = useMobile()

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(253,252,247,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: isMobile ? '0 16px' : '0 24px',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {!isHome && (
          <ChevronLeft size={18} color="var(--text-muted)" />
        )}
        <div style={{
          width: 32, height: 32,
          background: '#1A1814', borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <BookOpen size={16} color="white" />
        </div>
        <span style={{
          fontFamily: 'var(--font-hand)',
          fontSize: isMobile ? 18 : 22,
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.3px',
        }}>
          interview notes
        </span>
      </Link>

      {!isMobile && (
        <div style={{
          fontFamily: 'var(--font-hand)',
          fontSize: 15,
          color: 'var(--text-muted)',
        }}>
          by Beatriz Santos
        </div>
      )}
    </header>
  )
}
