export default function About() {
  const stats = [
    { val: '8.28', label: 'MCA CGPA', color: 'var(--green)' },
    { val: '8.41', label: 'BCA CGPA', color: 'var(--violet)' },
    { val: '3', label: 'Projects', color: 'var(--cyan)' },
    { val: '2026', label: 'Graduating', color: '#ff7043' },
  ]
  const traits = [
    { icon: '⌨', title: 'Web Developer', desc: 'Builds scalable web apps, backend systems & REST APIs with Python and Django.' },
    { icon: '🗄', title: 'Database Design', desc: 'Designs database-driven platforms backed by MySQL.' },
    { icon: '🚀', title: 'Adaptable Learner', desc: 'Continuously explores new technologies and picks up new stacks quickly.' },
    { icon: '🧩', title: 'Analytical Thinker', desc: 'Strong software engineering fundamentals and problem-solving.' },
  ]
  return (
    <section id="about" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal"><span className="sec-label">About Me</span><h2 className="sec-title">Who Am I<span className="grad-text">?</span></h2></div>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', alignItems: 'start' }}>
          <div className="reveal">
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '15px' }}>
              I'm a final-year <span style={{ color: 'var(--green)', fontWeight: 700 }}>MCA student</span> at Silicon University, Bhubaneswar with a deep passion for building real-world software. I'm a versatile developer skilled in Python with Django, building scalable web applications, backend systems, and RESTful APIs.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '15px' }}>
              I specialize in designing <span style={{ color: 'var(--violet)', fontWeight: 700 }}>database-driven platforms</span> and reliable software solutions, while continuously exploring new technologies to deliver secure, high-performance applications that solve real-world problems.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map(s => (
                <div className="stat" key={s.label}>
                  <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {traits.map(t => (
              <div className="trait" key={t.title}>
                <div className="trait-icon">{t.icon}</div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: 6 }}>{t.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text3)', lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
