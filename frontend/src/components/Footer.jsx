export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,230,118,.1)', padding: '2rem 0', background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="logo-box" style={{ width: 28, height: 28, fontSize: 11 }}>SM</div>
          <span style={{ fontWeight: 800, fontSize: '.95rem' }}>Swayam<span style={{ color: 'var(--green)' }}>.</span></span>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text3)' }}>
          Built with <span style={{ color: 'var(--violet)', fontWeight: 600 }}>React</span> + <span style={{ color: 'var(--green)', fontWeight: 600 }}>FastAPI</span> · © {new Date().getFullYear()} Swayam Mohanty
        </p>
        <a href="mailto:Swayammohanty26@gmail.com" style={{ fontSize: '12px', color: 'var(--text3)', fontWeight: 600 }}>Swayammohanty26@gmail.com</a>
      </div>
    </footer>
  )
}
