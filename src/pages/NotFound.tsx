import { Link } from 'react-router-dom'
import { TerminalWindow } from '../components'

export function NotFound() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <TerminalWindow title="error.log">
        <pre className="data-viz" style={{ opacity: 1, fontSize: 14, marginBottom: 20 }} aria-hidden="true">{`
    ███████╗██████╗ ██████╗  ██████╗ ██████╗
    ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
    █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
    ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
    ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
        `}</pre>

        <div className="terminal-text">
          <p><span className="highlight">[ERROR 404]</span> File not found</p>
          <p className="comment">// The requested resource does not exist on this server</p>
        </div>

        <div className="prompt-line" style={{ marginTop: 20 }}>
          <span className="prompt-user" aria-hidden="true">guest</span>
          <span className="prompt-at" aria-hidden="true">@</span>
          <span className="prompt-host" aria-hidden="true">outsidedata</span>
          <span className="prompt-path" aria-hidden="true">:</span>
          <span className="prompt-path" aria-hidden="true">~</span>
          <span className="prompt-symbol" aria-hidden="true">$</span>
          <span style={{ marginLeft: 10 }}>cd /</span>
        </div>

        <div style={{ marginTop: 20 }}>
          <Link to="/" className="nav-link" style={{ display: 'inline-block' }}>
            return home
          </Link>
        </div>

        <div className="status-line" style={{ marginTop: 30 }}>
          <span className="status-dot" style={{ background: '#ff5f57' }} aria-hidden="true" />
          <span className="status-text">Connection terminated</span>
        </div>
      </TerminalWindow>
    </div>
  )
}
