import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SiteNavbar from './components/common/SiteNavbar'
import SiteFooter from './components/common/SiteFooter'
import WhatsAppButton from './components/common/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import Employers from './pages/Employers'
import Workers from './pages/Workers'
import Industries from './pages/Industries'
import OurApproach from './pages/OurApproach'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <SiteNavbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/our-approach" element={<OurApproach />} />
          </Routes>
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </div>
    </Router>
  )
}
