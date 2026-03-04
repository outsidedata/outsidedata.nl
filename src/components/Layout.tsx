import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AsciiHeader } from './AsciiHeadersClean'
import { AsciiHeaderAlt } from './AsciiHeaderAlt'

export function Layout() {
  const location = useLocation()
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    const saved = localStorage.getItem('animationsEnabled')
    const enabled = saved !== 'false'
    if (!enabled) {
      document.body.classList.add('animations-disabled')
    }
    return enabled
  })

  const toggleAnimations = () => {
    const newValue = !animationsEnabled
    setAnimationsEnabled(newValue)
    localStorage.setItem('animationsEnabled', String(newValue))
    if (newValue) {
      document.body.classList.remove('animations-disabled')
    } else {
      document.body.classList.add('animations-disabled')
    }
  }

  const isContact = location.pathname === '/contact'

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <h1 className="sr-only">
        {isContact ? 'Contact Outside Data Consultants' : 'Outside Data Consultants - AI and Data Consulting in North Holland'}
      </h1>

      <div className="grid-bg" aria-hidden="true" />

      <div className="terminal-container">
        {isContact ? (
          <pre className="ascii-header" aria-hidden="true">foo</pre>
        ) : (
          <AsciiHeader />
        )}

        {/* <div className="responsive-header" aria-hidden="true">
          <span className="company-name">{isContact ? 'CONTACT' : 'OUTSIDE DATA'}</span>
          {!isContact && <span className="company-subtitle">CONSULTANTS</span>}
        </div>

        <div className="mobile-header" aria-hidden="true">
          {isContact ? 'CONTACT' : 'OUTSIDE DATA'}
        </div>

        <div className="terminal-window nav-terminal">
          <div className="terminal-header" aria-hidden="true">
            <span className="terminal-btn close" />
            <span className="terminal-btn min" />
            <span className="terminal-btn max" />
            <span className="terminal-title">bash -- outsidedata@north-holland:~</span>
          </div>
          <div className="terminal-body">
            <div className="prompt-line" aria-hidden="true">
              <span className="prompt-user">guest</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">outsidedata</span>:
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span style={{ marginLeft: 10 }}>./navigate.sh</span>
            </div>
            <nav className="nav-commands" role="navigation" aria-label="Main navigation">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                home
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                contact --about
              </NavLink>
              <a href="https://dolex.org" className="nav-link external-link" target="_blank" rel="noopener noreferrer">
                dolex.org
                <span className="sr-only"> (external link, opens in new tab)</span>
              </a>
            </nav>
          </div>
        </div> */}

        <main id="main-content" className="boot-sequence">
          <Outlet />
        </main>

        <footer className="terminal-footer">
          <p>
            <span className="comment" aria-hidden="true">// </span>
            <a href="mailto:info@outsidedata.nl">info@outsidedata.nl</a>
            <span className="comment" aria-hidden="true"> | </span>
            Noord Holland, NL
            <span className="comment" aria-hidden="true"> | </span>
            <span>{new Date().getFullYear()}</span>
          </p>
          {/* <p style={{ marginTop: 10, opacity: 0.5 }} aria-hidden="true">
            {'> Connection secure | End transmission_'}
          </p> */}
        </footer>
      </div>

      {/* <button
        className="animation-toggle"
        type="button"
        onClick={toggleAnimations}
        aria-label="Toggle animations on or off"
      >
        Animations: {animationsEnabled ? 'ON' : 'OFF'}
      </button> */}
    </>
  )
}
