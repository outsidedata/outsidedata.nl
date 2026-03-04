import { TerminalWindow } from "../components";

export function Home() {
  return (
    <>
      <br />
      <TerminalWindow title="Active Projects">
        <div className="project-grid">
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
              <br />
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
    </>
  );
}
