import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cur = useRef(), fol = useRef()

  useEffect(() => {
    const move = e => {
      if (cur.current) cur.current.style.transform = `translate(${e.clientX - 6}px,${e.clientY - 6}px)`
      if (fol.current) fol.current.style.transform = `translate(${e.clientX - 19}px,${e.clientY - 19}px)`
    }
    window.addEventListener('mousemove', move)

    // Reveal on scroll
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

    return () => { window.removeEventListener('mousemove', move); obs.disconnect() }
  }, [])

  return (
    <>
      <div ref={cur} className="cursor" />
      <div ref={fol} className="cfollow" />
      <div className="bg-grid" />
      <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" /><div className="orb orb4" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
