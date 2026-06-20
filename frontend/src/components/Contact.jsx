import { useState } from 'react'
import { sendContact } from '../services/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')
    try { await sendContact(form); setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }) }
    catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal">
          <span className="sec-label">Get In Touch</span>
          <h2 className="sec-title">Let's <span className="grad-text">Work Together</span></h2>
          <p style={{ color: 'var(--text3)', maxWidth: 460, marginBottom: '3rem' }}>Open to full-time roles, internships, and collaborations. Graduating May 2026.</p>
        </div>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3.5rem' }}>
          <div className="reveal">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="mailto:Swayammohanty26@gmail.com" className="cinfo">
                <div className="cinfo-icon" style={{ background: 'rgba(0,230,118,.15)', border: '1px solid rgba(0,230,118,.3)', color: 'var(--green)' }}>✉</div>
                <div><div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: 2, letterSpacing: '.06em' }}>Email</div><span style={{ fontSize: '13px', fontWeight: 600 }}>Swayammohanty26@gmail.com</span></div>
              </a>
              <a href="tel:+917077418558" className="cinfo">
                <div className="cinfo-icon" style={{ background: 'rgba(124,77,255,.15)', border: '1px solid rgba(124,77,255,.3)', color: 'var(--violet)' }}>☎</div>
                <div><div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: 2, letterSpacing: '.06em' }}>Phone</div><span style={{ fontSize: '13px', fontWeight: 600 }}>+91-7077418558</span></div>
              </a>
              <div className="cinfo">
                <div className="cinfo-icon" style={{ background: 'rgba(0,229,255,.15)', border: '1px solid rgba(0,229,255,.3)', color: 'var(--cyan)' }}>📍</div>
                <div><div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: 2, letterSpacing: '.06em' }}>Location</div><span style={{ fontSize: '13px', fontWeight: 600 }}>Odisha, India</span></div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
                <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handle} required />
              </div>
              <input name="subject" placeholder="Subject" value={form.subject} onChange={handle} required />
              <textarea name="message" placeholder="Your message..." value={form.message} onChange={handle} required rows={5} style={{ resize: 'vertical', minHeight: 120 }} />
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '.8rem 2rem' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : '✦ Send Message'}
              </button>
              {status === 'success' && <p style={{ fontSize: '13px', color: 'var(--green)', fontWeight: 600 }}>✓ Message sent! Swayam will get back to you soon.</p>}
              {status === 'error' && <p style={{ fontSize: '13px', color: '#f87171', fontWeight: 600 }}>Something went wrong. Please email directly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
