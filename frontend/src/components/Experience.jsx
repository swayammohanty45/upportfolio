const tl = [
  { type:'edu', title:'Master of Computer Applications (MCA)', org:'Silicon University, Bhubaneswar', period:'Graduating May 2026 · CGPA 8.28', col:'#7c4dff',
    pts:['Specializing in Full-Stack & Software Engineering','Consistent 8.28 CGPA performance'] },
  { type:'edu', title:'Bachelor of Computer Applications (BCA)', org:'U.N Autonomous College of Sc. & Tech., Adaspur', period:'Apr 2024 · CGPA 8.41', col:'#00e5ff',
    pts:['Graduated with 8.41 CGPA','Strong computer science fundamentals'] },
  { type:'edu', title:'12th Standard (Science)', org:'U.N Autonomous College of Sc. & Tech., Adaspur', period:'June 2021 · CGPA 8.70', col:'#ff4d8d',
    pts:['Science stream with 8.70 CGPA'] },
  { type:'edu', title:'10th Standard', org:'Sri Pingaleswar Bidyapitha, Raniamunha, Polasara', period:'March 2019 · CGPA 8.40', col:'#00e676',
    pts:['Completed matriculation with 8.40 CGPA'] },
]

export default function Experience() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="reveal"><span className="sec-label">Journey</span><h2 className="sec-title">Academic <span className="grad-text">Background</span></h2></div>
        <div className="tl reveal" style={{ marginTop: '3.5rem' }}>
          <div className="tl-line" />
          <div>
            {tl.map((i, k) => (
              <div className="tl-item" key={k}>
                <div className="tl-icon" style={{ border: `2px solid ${i.col}`, color: i.col, boxShadow: `0 0 20px ${i.col}30` }}>
                  {i.type === 'work' ? '💼' : '🎓'}
                </div>
                <div className="tl-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.75rem' }}>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: 3 }}>{i.title}</h3>
                      <p style={{ fontSize: '13px', color: i.col, fontWeight: 600 }}>{i.org}</p>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text3)', background: 'var(--bg3)', padding: '4px 10px', borderRadius: 100, border: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{i.period}</div>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {i.pts.map((p, pi) => (
                      <li key={pi} style={{ fontSize: '13px', color: 'var(--text3)', display: 'flex', gap: 6 }}>
                        <span style={{ color: i.col, marginTop: 3, fontSize: 10 }}>▸</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
