import { useEffect, useState } from 'react'
import { fetchProjects } from '../services/api'

const FALLBACK = [
  { id:1, title:'Event Management Web Application', category:'Full-Stack', ai_powered:false,
    description:'Full-stack event booking platform built with Django REST Framework and React, with secure JWT authentication and a complete booking workflow.',
    highlights:['JWT-based login/signup with role-based access for users & admins','Event CRUD with seat-selection, real-time seat status & QR-code tickets','Online payment/verification (UPI/UTR), wishlist & admin dashboard'],
    tech_stack:['Django REST','React','PostgreSQL','JWT'] },
  { id:2, title:'Learning Management System', category:'Full-Stack', ai_powered:false,
    description:'Learning Management System built with Django, with role-based access for Admin, Instructor, and Student.',
    highlights:['Course & lesson management including video lessons','Online quizzes with automatic scoring','Enrollment, progress tracking & auto-generated certificates'],
    tech_stack:['Django','Python','SQL','HTML/CSS','JavaScript'] },
  { id:3, title:'Employee Management System', category:'Full-Stack', ai_powered:false,
    description:'Employee Management System built with PHP and MySQL, with secure admin authentication and full record management.',
    highlights:['Secure admin login with full employee & department CRUD','Attendance tracking and role/designation management','Search & filtering with a responsive Bootstrap admin dashboard'],
    tech_stack:['PHP','MySQL','Bootstrap','HTML/CSS'] },
]

export default function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => { fetchProjects().then(setProjects).catch(() => setProjects(FALLBACK)) }, [])

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal">
          <span className="sec-label">Work</span>
          <h2 className="sec-title">Featured <span className="grad-text">Projects</span></h2>
          <p style={{ color: 'var(--text3)', maxWidth: 460, marginBottom: '2.5rem' }}>A selection of projects I've designed, built, and shipped from scratch.</p>
        </div>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))', gap: '1.25rem' }}>
          {projects.map(p => (
            <div className="proj" key={p.id}>
              {p.ai_powered && <div className="ai-badge">✦ AI POWERED</div>}
              <div>
                <span style={{ fontSize: '11px', color: 'var(--text3)', display: 'block', marginBottom: 4, letterSpacing: '.06em' }}>{p.category}</span>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.3 }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.7, flex: 1 }}>{p.description}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {p.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} style={{ fontSize: '12px', color: 'var(--text2)', display: 'flex', gap: 6 }}>
                    <span style={{ color: 'var(--green)', marginTop: 3, fontSize: 10 }}>◆</span>{h}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {p.tech_stack.map(t => <span className="tech" key={t}>{t}</span>)}
              </div>
              <div style={{ display: 'flex', gap: '.75rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <a href="https://github.com/swayammohanty45?tab=repositories" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '12px', fontWeight: 600, color: 'var(--text3)' }}>⎇ View Code ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
