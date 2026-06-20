import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#hero" className="logo">
          <div className="logo-box">SM</div>
          <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-.01em' }}>
            Swayam<span style={{ color: 'var(--green)' }}>.</span>
          </span>
        </a>
        <nav className="nav-links">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </nav>
        <a href="mailto:Swayammohanty26@gmail.com" className="btn btn-primary" style={{ fontSize: '12px', padding: '.5rem 1.2rem' }}>
          Hire Me ✦
        </a>
      </div>
    </header>
  )
}
