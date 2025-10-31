import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Music from './components/Music'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>DyinGroom — Full-Stack Dev & Guitarist</title>
        <meta name="description" content="Jewel Ahmed (DyinGroom) — a full-stack developer, pentester, and guitarist crafting secure digital systems and original music." />
        <meta property="og:title" content="DyinGroom — Full-Stack Dev & Guitarist" />
        <meta property="og:description" content="Jewel Ahmed (DyinGroom) — a full-stack developer, pentester, and guitarist crafting secure digital systems and original music." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-rich-black">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon-green text-rich-black px-4 py-2 rounded">
          Skip to main content
        </a>
        
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Music />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App