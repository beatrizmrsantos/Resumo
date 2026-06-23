import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Search, X, ChevronUp, ChevronDown, ArrowLeft, ChevronRight } from 'lucide-react'
import { documents, documentContents } from '../content'
import { parseDocument, buildToc, searchDocument } from '../utils/parser'
import Sidebar from '../components/Document/Sidebar'
import SectionContent from '../components/Document/SectionContent'
import { useMobile } from '../hooks/useMobile'
import type { SearchMatch } from '../types'

export default function DocumentPage() {
  const { docId } = useParams<{ docId: string }>()
  const isMobile = useMobile()
  const [showTop, setShowTop] = useState(false)
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const pendingScrollRef = useRef<string | null>(null)

  useEffect(() => {
    setSelectedPartId(null)
    window.scrollTo(0, 0)
  }, [docId])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [matchIndex, setMatchIndex] = useState(0)
  const [chapterSearch, setChapterSearch] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const meta = documents.find(d => d.id === docId)
  const rawContent = docId ? documentContents[docId] : undefined

  const parsed = useMemo(() => {
    if (!rawContent) return null
    return parseDocument(rawContent)
  }, [rawContent])

  const selectedPart = useMemo(() => {
    if (!parsed || !selectedPartId) return null
    return parsed.parts.find(p => p.id === selectedPartId) ?? null
  }, [parsed, selectedPartId])

  const toc = useMemo(() => {
    if (!parsed) return []
    const full = buildToc(parsed)
    if (!selectedPartId) return full
    return full.filter(e => e.id === selectedPartId)
  }, [parsed, selectedPartId])

  const allSections = useMemo(() => {
    if (!parsed) return []
    if (selectedPart) return selectedPart.sections
    return parsed.parts.flatMap(p => p.sections)
  }, [parsed, selectedPart])

  const searchResults: SearchMatch[] = useMemo(() => {
    if (!parsed || !searchQuery.trim()) return []
    return searchDocument(parsed, searchQuery)
  }, [parsed, searchQuery])

  const chapterResults = useMemo(() => {
    if (!chapterSearch.trim() || !parsed) return []
    const q = chapterSearch.toLowerCase()
    return parsed.parts.flatMap(part =>
      part.sections
        .filter(s => s.level === 'chapter' && s.title.toLowerCase().includes(q))
        .map(s => ({ section: s, part }))
    ).slice(0, 10)
  }, [chapterSearch, parsed])

  // Scroll to pending target after a part renders
  useEffect(() => {
    if (!pendingScrollRef.current || !selectedPartId) return
    const target = pendingScrollRef.current
    pendingScrollRef.current = null
    setTimeout(() => {
      const el = document.getElementById(target)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveId(target)
      }
    }, 80)
  }, [selectedPartId])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
        setTimeout(() => searchInputRef.current?.focus(), 50)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setSearchQuery('')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (!allSections.length) return
    const observers: IntersectionObserver[] = []
    allSections.forEach(section => {
      const el = document.getElementById(section.id)
      if (!el) return
      const obs = new IntersectionObserver(
        entries => { if (entries[0].isIntersecting) setActiveId(section.id) },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [allSections])

  const navigateTo = useCallback((id: string) => {
    if (!selectedPartId && parsed) {
      const part = parsed.parts.find(p => p.sections.some(s => s.id === id))
      if (part) {
        pendingScrollRef.current = id
        setSelectedPartId(part.id)
        window.scrollTo(0, 0)
        return
      }
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }, [selectedPartId, parsed])

  const navigateToMatch = (direction: 'next' | 'prev') => {
    if (!searchResults.length) return
    const next = direction === 'next'
      ? (matchIndex + 1) % searchResults.length
      : (matchIndex - 1 + searchResults.length) % searchResults.length
    setMatchIndex(next)
    navigateTo(searchResults[next].sectionId)
  }

  const goBackToOverview = () => {
    setSelectedPartId(null)
    setActiveId('')
    setMobileNavOpen(false)
    window.scrollTo(0, 0)
  }

  const navigateToAndClose = useCallback((id: string) => {
    if (isMobile) setMobileNavOpen(false)
    navigateTo(id)
  }, [isMobile, navigateTo])

  if (!meta || !rawContent) return <Navigate to="/" replace />
  if (!parsed) return <div style={{ padding: 40, color: 'var(--text-muted)' }}>Loading…</div>

  const totalChapters = parsed.parts.flatMap(p => p.sections.filter(s => s.level === 'chapter')).length

  return (
    <div style={{ position: 'relative' }}>

      {/* Search overlay */}
      {searchOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            paddingTop: 100,
          }}
          onClick={e => {
            if (e.target === e.currentTarget) { setSearchOpen(false); setSearchQuery('') }
          }}
        >
          <div style={{
            width: '90%', maxWidth: 640,
            background: 'var(--bg-card)', borderRadius: 14,
            border: '1.5px solid var(--border)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.25)', overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 18px', borderBottom: '1px solid var(--border)',
            }}>
              <Search size={18} color="var(--text-muted)" />
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setMatchIndex(0) }}
                placeholder="Search in this document…"
                autoFocus
                style={{
                  flex: 1, border: 'none', outline: 'none',
                  background: 'transparent', fontSize: 15,
                  color: 'var(--text-primary)', fontFamily: 'var(--font-sans)',
                }}
              />
              {searchQuery && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    {searchResults.length} matches
                  </span>
                  <button onClick={() => { setSearchQuery(''); setMatchIndex(0) }}>
                    <X size={15} color="var(--text-muted)" />
                  </button>
                </div>
              )}
              <kbd style={{
                fontSize: 11, padding: '2px 6px', borderRadius: 5,
                background: 'var(--bg-sidebar)', border: '1px solid var(--border)',
                color: 'var(--text-muted)', fontFamily: 'var(--font-mono)',
              }}>Esc</kbd>
            </div>

            <div style={{ maxHeight: 400, overflowY: 'auto' }}>
              {searchResults.length === 0 && searchQuery && (
                <div style={{ padding: '20px 18px', color: 'var(--text-muted)', fontSize: 13, textAlign: 'center' }}>
                  No matches for "{searchQuery}"
                </div>
              )}
              {searchResults.map((result, idx) => (
                <button
                  key={result.sectionId}
                  onClick={() => {
                    navigateTo(result.sectionId)
                    setMatchIndex(idx)
                    setSearchOpen(false)
                  }}
                  style={{
                    width: '100%', padding: '12px 18px',
                    borderBottom: '1px solid var(--border)', textAlign: 'left',
                    background: idx === matchIndex ? 'var(--bg-sidebar)' : 'transparent',
                    cursor: 'pointer', display: 'block', transition: 'background 0.1s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-sidebar)'}
                  onMouseLeave={e => e.currentTarget.style.background = idx === matchIndex ? 'var(--bg-sidebar)' : 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: result.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>{result.sectionTitle}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>· {result.partTitle}</span>
                  </div>
                  <p style={{
                    fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {result.snippet}
                  </p>
                </button>
              ))}
            </div>

            <div style={{
              padding: '8px 18px', display: 'flex', gap: 16,
              borderTop: '1px solid var(--border)', background: 'var(--bg-sidebar)',
            }}>
              {[{ icon: '↵', text: 'to select' }, { icon: '↑↓', text: 'to navigate' }, { icon: 'Esc', text: 'to close' }].map(h => (
                <div key={h.text} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <kbd style={{
                    fontSize: 10, padding: '1px 5px', borderRadius: 4,
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    color: 'var(--text-muted)', fontFamily: 'var(--font-mono)',
                  }}>{h.icon}</kbd>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Document header bar */}
      <div style={{
        borderBottom: '1px solid var(--border)',
        padding: isMobile ? '10px 14px' : '12px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(253,252,247,0.95)',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 56,
        zIndex: 90,
        gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {selectedPart && (
            <button
              onClick={goBackToOverview}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 12px', borderRadius: 8,
                border: `1.5px solid ${selectedPart.color}40`,
                background: `${selectedPart.color}10`,
                color: selectedPart.color,
                fontSize: 12, fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.15s',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${selectedPart.color}20`
                e.currentTarget.style.borderColor = `${selectedPart.color}70`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${selectedPart.color}10`
                e.currentTarget.style.borderColor = `${selectedPart.color}40`
              }}
            >
              <ArrowLeft size={13} strokeWidth={2.5} />
              {isMobile ? '' : 'All Parts'}
            </button>
          )}

          <span style={{ fontSize: 20 }}>{meta.icon}</span>
          <div>
            <h1 style={{ fontSize: isMobile ? 13 : 15, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
              {selectedPart
                ? <>
                    <span style={{ color: selectedPart.color, fontWeight: 700, fontSize: 13 }}>
                      Part {selectedPart.number} —
                    </span>
                    {' '}{selectedPart.title}
                  </>
                : meta.title
              }
            </h1>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {selectedPart
                ? `${selectedPart.sections.filter(s => s.level === 'chapter').length} chapters`
                : `${parsed.parts.length} parts · ${totalChapters} chapters`
              }
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => { setSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 50) }}
            style={{
              display: 'flex', alignItems: 'center', gap: isMobile ? 6 : 10,
              padding: isMobile ? '8px 10px' : '8px 16px', borderRadius: 10,
              border: '1.5px solid var(--border)', background: 'var(--bg-card)',
              color: 'var(--text-muted)', fontSize: 13,
              fontFamily: 'var(--font-sans)', cursor: 'pointer',
              ...(isMobile ? {} : { width: 240, justifyContent: 'space-between' }),
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Search size={15} />
              {!isMobile && <span>Search…</span>}
            </div>
            {!isMobile && (
              <kbd style={{
                fontSize: 10, padding: '2px 6px', borderRadius: 5,
                background: 'var(--bg-sidebar)', border: '1px solid var(--border)',
                fontFamily: 'var(--font-mono)', color: 'var(--text-muted)',
              }}>⌘K</kbd>
            )}
          </button>

          {searchQuery && searchResults.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                {matchIndex + 1}/{searchResults.length}
              </span>
              <button
                onClick={() => navigateToMatch('prev')}
                style={{ padding: 4, borderRadius: 6, background: 'var(--bg-sidebar)', border: '1px solid var(--border)' }}
              >
                <ChevronUp size={14} color="var(--text-secondary)" />
              </button>
              <button
                onClick={() => navigateToMatch('next')}
                style={{ padding: 4, borderRadius: 6, background: 'var(--bg-sidebar)', border: '1px solid var(--border)' }}
              >
                <ChevronDown size={14} color="var(--text-secondary)" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── PARTS OVERVIEW ── */}
      {!selectedPart && (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '32px 16px 60px' : '56px 24px 80px' }}>
          {/* Doc hero */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 56 }}>
            <div style={{ fontSize: isMobile ? 40 : 52, marginBottom: 12 }}>{meta.icon}</div>
            <h2 style={{
              fontSize: isMobile ? 26 : 38, fontWeight: 900, letterSpacing: '-1.2px',
              color: 'var(--text-primary)', marginBottom: 10,
            }}>
              {meta.title}
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : 15, color: 'var(--text-secondary)', lineHeight: 1.75,
              maxWidth: 520, margin: '0 auto',
            }}>
              {meta.description}
            </p>

            {/* Chapter search */}
            <div style={{ position: 'relative', maxWidth: 480, margin: '28px auto 0' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 16px',
                borderRadius: 12,
                border: '1.5px solid var(--border)',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <Search size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                <input
                  value={chapterSearch}
                  onChange={e => setChapterSearch(e.target.value)}
                  placeholder="Search chapters…"
                  style={{
                    flex: 1, border: 'none', outline: 'none',
                    background: 'transparent', fontSize: 14,
                    color: 'var(--text-primary)', fontFamily: 'var(--font-sans)',
                  }}
                />
                {chapterSearch && (
                  <button onClick={() => setChapterSearch('')} style={{ display: 'flex', padding: 2 }}>
                    <X size={14} color="var(--text-muted)" />
                  </button>
                )}
              </div>

              {chapterResults.length > 0 && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 12,
                  boxShadow: 'var(--shadow-lg)',
                  overflow: 'hidden',
                  zIndex: 50,
                }}>
                  {chapterResults.map(({ section, part }) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setChapterSearch('')
                        navigateTo(section.id)
                      }}
                      style={{
                        width: '100%', padding: '10px 16px',
                        display: 'flex', alignItems: 'center', gap: 10,
                        borderBottom: '1px solid var(--border)',
                        textAlign: 'left', cursor: 'pointer',
                        background: 'transparent', transition: 'background 0.1s',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-sidebar)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: part.color, flexShrink: 0,
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                          {section.title.replace(/^\d+\.\d+\s+/, '')}
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                          {part.title}
                        </div>
                      </div>
                      {section.number && (
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10,
                          color: part.color, flexShrink: 0,
                        }}>
                          {section.number}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Parts grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: isMobile ? 16 : 22,
          }}>
            {parsed.parts.map(part => {
              const chapters = part.sections.filter(s => s.level === 'chapter')
              return (
                <PartCard
                  key={part.id}
                  part={part}
                  chapters={chapters}
                  onClick={() => { setSelectedPartId(part.id); window.scrollTo(0, 0) }}
                />
              )
            })}
          </div>
        </div>
      )}

      {/* ── PART DETAIL VIEW ── */}
      {selectedPart && (
        <>
          {/* Mobile: toggle tab on left edge */}
          {isMobile && (
            <button
              onClick={() => setMobileNavOpen(o => !o)}
              style={{
                position: 'fixed',
                left: mobileNavOpen ? 272 : 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 160,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 28,
                height: 64,
                borderRadius: '0 10px 10px 0',
                background: selectedPart.color,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '2px 0 16px rgba(0,0,0,0.2)',
                transition: 'left 0.3s ease',
                padding: 0,
              }}
            >
              <ChevronRight
                size={16}
                color="white"
                strokeWidth={2.5}
                style={{
                  transform: mobileNavOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'block',
                }}
              />
            </button>
          )}

          {/* Mobile: backdrop */}
          {isMobile && mobileNavOpen && (
            <div
              onClick={() => setMobileNavOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 149,
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(2px)',
              }}
            />
          )}

          {/* Mobile: sliding sidebar panel */}
          {isMobile && (
            <div
              style={{
                position: 'fixed',
                left: 0,
                top: 56,
                bottom: 0,
                width: 272,
                zIndex: 150,
                transform: mobileNavOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease',
                overflowY: 'auto',
                background: `${selectedPart.color}B0`,
                backdropFilter: 'blur(12px)',
                borderTop: `2px solid ${selectedPart.color}`,
                borderRight: `2px solid ${selectedPart.color}`,
                borderBottom: `2px solid ${selectedPart.color}`,
                borderLeft: 'none',
                borderRadius: '0 20px 20px 0',
                boxShadow: mobileNavOpen ? `4px 0 24px ${selectedPart.color}40, 0 4px 20px rgba(0,0,0,0.12)` : 'none',
              }}
            >
              <Sidebar toc={toc} activeId={activeId} onNavigate={navigateToAndClose} compact />
            </div>
          )}

          <div style={{
            maxWidth: 1280, margin: '0 auto',
            padding: isMobile ? '0 12px' : '0 24px',
            display: 'flex', gap: 36,
          }}>
            {/* Sidebar — desktop only */}
            {!isMobile && (
              <div style={{ flexShrink: 0 }}>
                <Sidebar toc={toc} activeId={activeId} onNavigate={navigateTo} />
              </div>
            )}

            {/* Content */}
            <div ref={contentRef} style={{ flex: 1, minWidth: 0, paddingTop: isMobile ? 16 : 28, paddingBottom: 80 }}>
              {selectedPart.sections
                .filter(s => s.level === 'chapter')
                .map(chapter => {
                  const allSecs = selectedPart.sections
                  const chIdx = allSecs.indexOf(chapter)
                  const nextChIdx = allSecs.findIndex((s, i) => s.level === 'chapter' && i > chIdx)
                  const subsections = allSecs.filter((s, i) =>
                    s.level === 'subsection' && i > chIdx && (nextChIdx === -1 || i < nextChIdx)
                  )
                  return (
                    <div
                      key={chapter.id}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1.5px solid var(--border)',
                        borderRadius: 12,
                        padding: isMobile ? '16px 16px' : '28px 32px',
                        marginBottom: isMobile ? 10 : 16,
                        borderLeft: `4px solid ${selectedPart.color}`,
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <SectionContent section={chapter} searchQuery={searchQuery} />
                      {subsections.map(sub => (
                        <div key={sub.id} style={{ borderTop: '1px solid var(--border)', marginTop: 24, paddingTop: 4 }}>
                          <SectionContent section={sub} searchQuery={searchQuery} />
                        </div>
                      ))}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </>
      )}

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 36, right: 36, zIndex: 300,
            width: 44, height: 44, borderRadius: '50%',
            background: 'var(--text-primary)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.24)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'
          }}
        >
          <ChevronUp size={20} color="white" strokeWidth={2.5} />
        </button>
      )}
    </div>
  )
}

// ── Part overview card ──────────────────────────────────────────────────────
import type { Part, Section } from '../types'

interface PartCardProps {
  part: Part
  chapters: Section[]
  onClick: () => void
}

function PartCard({ part, chapters, onClick }: PartCardProps) {
  const [hovered, setHovered] = useState(false)
  const preview = chapters.slice(0, 7)
  const extra = chapters.length - preview.length

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        background: `${part.color}0E`,
        border: `2px solid ${part.color}${hovered ? '55' : '28'}`,
        borderRadius: 16,
        padding: '28px 26px 22px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 20px 48px ${part.color}20, 0 4px 16px rgba(0,0,0,0.06)`
          : '0 2px 8px rgba(0,0,0,0.04)',
        width: '100%',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Part badge */}
      <div style={{
        alignSelf: 'flex-start',
        display: 'inline-flex', alignItems: 'center',
        padding: '5px 14px', borderRadius: 20, background: part.color,
        marginBottom: 16,
      }}>
        <span style={{
          fontSize: 13, fontWeight: 800, color: 'white',
          letterSpacing: '0.4px',
        }}>
          Part {part.number}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 17, fontWeight: 800, color: 'var(--text-primary)',
        letterSpacing: '-0.4px', lineHeight: 1.3, marginBottom: 18,
      }}>
        {part.title}
      </h3>

      {/* Chapter list — flex: 1 pushes footer to bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 20, flex: 1 }}>
        {preview.map(ch => (
          <div key={ch.id} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              color: part.color, opacity: 0.85, flexShrink: 0, minWidth: 30,
            }}>
              {ch.number}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              {ch.title.replace(/^\d+\.\d+\s+/, '')}
            </span>
          </div>
        ))}
        {extra > 0 && (
          <span style={{ fontSize: 11, color: 'var(--text-muted)', paddingLeft: 38 }}>
            +{extra} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div style={{
        paddingTop: 14,
        borderTop: `1px solid ${part.color}22`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          {chapters.length} chapter{chapters.length !== 1 ? 's' : ''}
        </span>
        <span style={{
          fontSize: 13, fontWeight: 700, color: part.color,
          transition: 'gap 0.15s',
        }}>
          Open →
        </span>
      </div>
    </button>
  )
}
