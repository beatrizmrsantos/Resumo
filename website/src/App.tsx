import { Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import HomePage from './pages/HomePage'
import DocumentPage from './pages/DocumentPage'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doc/:docId" element={<DocumentPage />} />
        </Routes>
      </main>
    </div>
  )
}
