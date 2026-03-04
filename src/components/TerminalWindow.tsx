import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  minHeight?: number
}

export function TerminalWindow({ title, children, minHeight }: TerminalWindowProps) {
  return (
    <div className="terminal-window">
      <div className="terminal-header" aria-hidden="true">
        <span className="terminal-btn close" />
        <span className="terminal-btn min" />
        <span className="terminal-btn max" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body" style={minHeight ? { minHeight } : undefined}>
        {children}
      </div>
    </div>
  )
}
