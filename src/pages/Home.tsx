import { Link } from "react-router-dom";
import { TerminalWindow } from "../components";

export function Home() {
  return (
    <>
      {/* System Status */}
      {/* <TerminalWindow title="system_status.log">
        <div className="terminal-text">
          <p><span className="comment">// SYSTEM INITIALIZATION</span></p>
          <p>
            <span className="highlight">[BOOT]</span> Outside Data Consultants v2.0<br />
            <span className="highlight">[LOAD]</span> Location: North Holland, Netherlands<br />
            <span className="highlight">[INIT]</span> Services: AI Consulting | Data Analysis | Open Source<br />
            <span className="highlight">[STAT]</span> Status: <span style={{ color: '#00ff41' }}>OPERATIONAL</span>
          </p>
        </div>
        <div className="status-line">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-text">All systems nominal</span>
        </div>
      </TerminalWindow> */}

      {/* About Section */}
      {/* <TerminalWindow title="cat README.md">
        <h2 className="section-header">WHO_WE_ARE</h2>
        <div className="terminal-text">
          <p>
            We build tools that make data <span className="highlight">speak</span>.
            Based in North Holland, Outside Data Consultants operates at the intersection
            of <span className="highlight">artificial intelligence</span>,
            <span className="highlight"> data analysis</span>, and
            <span className="highlight"> open source development</span>.
          </p>
          <p>
            Our mission: democratize access to sophisticated data tools.
            We believe the most powerful analyses should be accessible to everyone,
            not locked behind enterprise paywalls.
          </p>
          <p className="comment">
            // Founded by Bill | Running on curiosity and caffeine
          </p>
        </div>
        <pre className="data-viz" aria-hidden="true">{`
    CPU [##########----------] 50%     MEM [################----] 80%
    NET [##################--] 90%     DSK [########------------] 40%
        `}</pre>
      </TerminalWindow> */}

      {/* Projects Section */}
      <br/>
      <TerminalWindow title="Active Projects">
        {/* <h2 className="section-header">ACTIVE_PROJECTS</h2> */}
        <div className="project-grid">
          {/* Dolex */}
          <article className="project-card">
            <div className="project-card-header">
              <h3 className="project-name glitch" data-text="DOLEX">
                DOLEX
              </h3>
              <p className="project-tagline">
                "Point Claude at Your Data, Get Expert Visualizations"
              </p>
            </div>
            <div className="project-card-body">
              <p className="project-description">
                MCP server for automatic data analysis. Connect Claude to your
                data and watch as expert-level visualizations materialize from
                your CSV files.
              </p>
              <ul className="project-features">
                <li>Profiles CSV files and entire directories</li>
                <li>43 handcrafted chart types</li>
                <li>Runs 100% locally - your data stays yours</li>
                <li>npm: @outsidedata/dolex</li>
              </ul>
              <a
                href="https://dolex.org"
                className="project-link external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                open dolex.org
                <span className="sr-only">
                  {" "}
                  (external link, opens in new tab)
                </span>
              </a>
              <div className="status-line">
                <span className="status-dot" aria-hidden="true" />
                <span className="status-text">Active Development</span>
              </div>
            </div>
          </article>

          {/* CROSSHAIR */}
          <article className="project-card">
            <div className="project-card-header">
              <h3 className="project-name glitch" data-text="CROSSHAIR">
                CROSSHAIR
              </h3>
              <p className="project-tagline">LLM Safety Benchmark</p>
            </div>
            <div className="project-card-body">
              <p className="project-description">
                <strong>C</strong>ompliance and <strong>R</strong>esistance{" "}
                <strong>O</strong>perating under <strong>S</strong>imulated{" "}
                <strong>H</strong>ostile <strong>A</strong>dversarial{" "}
                <strong>I</strong>nstruction <strong>R</strong>egimes
              </p>
              <ul className="project-features">
                <li>Military targeting scenarios</li>
                <li>Mass surveillance testing</li>
                <li>Judicial system probes</li>
                <li>Nuclear command simulations</li>
              </ul>
              <br/>
              <a
                href="https://crosshairbenchmark.com"
                className="project-link external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                open crosshairbenchmark.com
                <span className="sr-only">
                  {" "}
                  (external link, opens in new tab)
                </span>
              </a>
              <div className="status-line">
                <span
                  className="status-dot"
                  style={{ background: "var(--phosphor-amber)" }}
                  aria-hidden="true"
                />
                <span className="status-text">Research Initiative</span>
              </div>
            </div>
          </article>
        </div>
      </TerminalWindow>

      {/* Call to Action */}
      {/* <TerminalWindow title="next_steps.sh">
        <div className="prompt-line" aria-hidden="true">
          <span className="prompt-user">guest</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">outsidedata</span>:
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span style={{ marginLeft: 10 }}>echo "Ready to collaborate?"</span>
        </div>
        <p className="terminal-text" style={{ margin: '15px 0' }}>Ready to collaborate?</p>
        <div className="prompt-line">
          <span className="prompt-user" aria-hidden="true">guest</span>
          <span className="prompt-at" aria-hidden="true">@</span>
          <span className="prompt-host" aria-hidden="true">outsidedata</span>
          <span className="prompt-path" aria-hidden="true">:</span>
          <span className="prompt-path" aria-hidden="true">~</span>
          <span className="prompt-symbol" aria-hidden="true">$</span>
          <span style={{ marginLeft: 10 }}>
            <Link to="/contact" style={{ color: 'var(--phosphor-amber)' }}>./contact --init</Link>
            <span className="cursor" aria-hidden="true" />
          </span>
        </div>
      </TerminalWindow> */}
    </>
  );
}
