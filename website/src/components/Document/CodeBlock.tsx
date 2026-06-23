import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

interface Props {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'text' }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const displayLang = language === 'text' ? 'plain text' : language

  return (
    <div style={{
      borderRadius: 10,
      overflow: 'hidden',
      border: '1px solid #2D2D3A',
      margin: '6px 0',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    }}>
      {/* IDE title bar */}
      <div style={{
        background: '#1E1E2E',
        padding: '8px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #2D2D3A',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          </div>
          <span style={{
            fontSize: 11,
            fontFamily: 'var(--font-mono)',
            color: '#6B6B8A',
            letterSpacing: '0.3px',
          }}>
            {displayLang}
          </span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            padding: '3px 8px',
            borderRadius: 5,
            background: copied ? '#1e4d2b' : '#2D2D3A',
            border: `1px solid ${copied ? '#28C840' : '#3D3D4A'}`,
            color: copied ? '#28C840' : '#8888AA',
            fontSize: 11,
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '16px 18px',
          background: '#1A1A2E',
          fontSize: '13px',
          lineHeight: '1.65',
          fontFamily: 'var(--font-mono)',
        }}
        showLineNumbers={code.split('\n').length > 5}
        lineNumberStyle={{
          color: '#3D3D5A',
          fontSize: '12px',
          paddingRight: '16px',
          minWidth: '2.5em',
          userSelect: 'none',
        }}
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
