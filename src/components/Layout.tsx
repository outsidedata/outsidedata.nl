import { Outlet } from 'react-router-dom'
import { AsciiHeader } from './AsciiHeadersClean'

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <h1 className="sr-only">Outside Data Consultants - AI and Data Consulting in North Holland</h1>

      <div className="grid-bg" aria-hidden="true" />

      <div className="terminal-container">
        <AsciiHeader />

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
        </footer>
      </div>
    </>
  )
}
