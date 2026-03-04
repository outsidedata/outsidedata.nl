import { useState } from 'react'
import { TerminalWindow } from '../components'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:bill@outsidedata.nl?subject=${encodeURIComponent(formData.subject || 'Contact from website')}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    setSubmitted(true)
    window.location.href = mailtoLink
  }

  return (
    <>
      {/* About Section */}
      <TerminalWindow title="cat about.txt">
        <h2 className="section-header">ABOUT</h2>
        <div className="terminal-text">
          <p>
            <span className="highlight">Outside Data Consultants</span> is a Netherlands-based
            consultancy focused on the intersection of artificial intelligence and practical
            data solutions.
          </p>
          <p>
            Founded by <span className="highlight">Bill</span>, we operate on a simple principle:
            the best tools should be <span className="highlight">open</span>, the best analysis
            should be <span className="highlight">accessible</span>, and the best AI should be
            <span className="highlight"> safe</span>.
          </p>
          <p>
            From building MCP servers that democratize data visualization to researching
            the safety boundaries of large language models, our work spans the full spectrum
            of modern AI development.
          </p>
          <p className="comment">
            // We write code. We question assumptions. We ship.
          </p>
        </div>
        <pre className="data-viz" aria-hidden="true">{`
    ╔══════════════════════════════════════════════════════════════╗
    ║  EXPERTISE MATRIX                                            ║
    ╠══════════════════════════════════════════════════════════════╣
    ║  AI/ML Consulting    [████████████████████] 100%            ║
    ║  Data Analysis       [██████████████████░░]  90%            ║
    ║  Open Source Dev     [████████████████████] 100%            ║
    ║  LLM Safety Research [████████████████░░░░]  80%            ║
    ║  Caffeine Tolerance  [████████████████████] MAX             ║
    ╚══════════════════════════════════════════════════════════════╝
        `}</pre>
      </TerminalWindow>

      {/* Contact Form */}
      <TerminalWindow title="./send_message.sh">
        <h2 className="section-header">INITIATE_CONTACT</h2>
        <div className="terminal-text">
          <p><span className="comment">// Establishing secure channel...</span></p>
          <p>Ready to transmit? Fill out the form below or use direct contact.</p>
        </div>

        {submitted ? (
          <div className="terminal-text">
            <p><span className="highlight">[TRANSMITTED]</span> Message payload delivered to mail client.</p>
            <p style={{ marginTop: 15 }}>
              <span className="comment">// If your mail client didn't open, you can email directly:</span>
            </p>
            <p style={{ marginTop: 10 }}>
              <a href="mailto:bill@outsidedata.nl" style={{ color: 'var(--phosphor-amber)' }}>
                bill@outsidedata.nl
              </a>
            </p>
            <button
              type="button"
              className="form-submit"
              style={{ marginTop: 20 }}
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', subject: '', message: '' })
              }}
            >
              send another
            </button>
          </div>
        ) : (
          <>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">IDENTIFY</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name or handle"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">RETURN_ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">SUBJECT_LINE</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">PAYLOAD</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Your message here..."
                  required
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <button type="submit" className="form-submit">transmit</button>
            </form>

            <div className="status-line" style={{ marginTop: 20 }}>
              <span className="status-dot" aria-hidden="true" />
              <span className="status-text">Secure connection ready</span>
            </div>
          </>
        )}
      </TerminalWindow>

      {/* Direct Contact Info */}
      <TerminalWindow title="cat contact_info.json">
        <h2 className="section-header">DIRECT_CHANNELS</h2>

        <div className="terminal-text">
          <p className="comment">// Preferred method: Email</p>
          <p style={{ fontSize: 18, margin: '15px 0' }}>
            <span className="highlight" aria-hidden="true">$</span>{' '}
            <span aria-hidden="true">mail -s "Hello"</span>{' '}
            <a href="mailto:bill@outsidedata.nl" style={{ color: 'var(--phosphor-amber)', textDecoration: 'none' }}>
              bill@outsidedata.nl
            </a>
          </p>
        </div>

        <div className="info-block">
          <dl>
            <dt>ENTITY</dt>
            <dd>Outside Data Consultants</dd>

            <dt>OPERATOR</dt>
            <dd>Bill</dd>

            <dt>LOCATION</dt>
            <dd>North Holland, Netherlands</dd>

            <dt>KVK_NUMBER</dt>
            <dd>[KVK_NUMBER]</dd>

            <dt>BTW_NUMBER</dt>
            <dd>[BTW_NUMBER]</dd>

            <dt>EMAIL</dt>
            <dd>bill@outsidedata.nl</dd>
          </dl>
        </div>

        <pre className="data-viz" aria-hidden="true">{`
    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │        ╭─────╮                                              │
    │        │ NLD │  ◄── You are connecting here                │
    │        ╰──┬──╯                                              │
    │           │                                                 │
    │      ═════╧═════  NORTH HOLLAND NODE                       │
    │           ║                                                 │
    │      ┌────╨────┐                                           │
    │      │ EUROPE  │                                           │
    │      └─────────┘                                           │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘
        `}</pre>
      </TerminalWindow>

      {/* Response Time */}
      <TerminalWindow title="response_protocol.sh">
        <div className="prompt-line" aria-hidden="true">
          <span className="prompt-user">system</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">outsidedata</span>:
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span style={{ marginLeft: 10 }}>echo $RESPONSE_TIME</span>
        </div>
        <div className="terminal-text">
          <p style={{ margin: '15px 0' }}>
            <span className="highlight">TYPICAL_RESPONSE:</span> 24-48 hours<br />
            <span className="highlight">URGENT_MATTERS:</span> Include [URGENT] in subject<br />
            <span className="highlight">TIMEZONE:</span> CET (North Holland)
          </p>
        </div>
        <div className="prompt-line" aria-hidden="true">
          <span className="prompt-user">system</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">outsidedata</span>:
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span style={{ marginLeft: 10 }}><span className="cursor" /></span>
        </div>
      </TerminalWindow>
    </>
  )
}
