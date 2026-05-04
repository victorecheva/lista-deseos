import { useState, useEffect } from 'react'

export default function Header({ count = 0 }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (d) =>
    d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
      .replace(/\//g, '-')

  const formatTime = (d) =>
    d.toTimeString().slice(0, 8)

  return (
    <header className="w-full mb-8">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-terminal-border pb-2 mb-4 text-xs text-terminal-gray">
        <span>INSTALACIÓN VÍCTOR-ALPHA // SECTOR-7G</span>
        <span className="text-terminal-green">
          {formatDate(time)} &nbsp;|&nbsp; {formatTime(time)}
          <span className="animate-blink ml-1">█</span>
        </span>
      </div>

      {/* Main header */}
      <div className="text-center space-y-2">
        <div className="text-xs text-terminal-amber tracking-widest glow-text-amber">
          ▸ DOCUMENTO CLASIFICADO — ACCESO RESTRINGIDO ◂
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider glow-text animate-flicker uppercase">
          Sistema de Solicitud
        </h1>
        <h2 className="text-lg sm:text-xl text-terminal-dimgreen tracking-widest uppercase">
          de Suministros Especiales
        </h2>

        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px flex-1 bg-terminal-border max-w-24" />
          <span className="text-terminal-amber text-xs tracking-widest px-2 border border-terminal-amber glow-text-amber">
            CUMPLEAÑOS
          </span>
          <div className="h-px flex-1 bg-terminal-border max-w-24" />
        </div>

        {/* Info bar */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs max-w-lg mx-auto">
          <div className="border border-terminal-border p-2 text-center corner-cut-sm">
            <div className="text-terminal-gray mb-1">SOLICITANTE</div>
            <div className="text-terminal-green font-bold">VÍCTOR</div>
          </div>
          <div className="border border-terminal-border p-2 text-center corner-cut-sm">
            <div className="text-terminal-gray mb-1">PRIORIDAD</div>
            <div className="text-terminal-amber font-bold glow-text-amber">ALTA</div>
          </div>
          <div className="border border-terminal-border p-2 text-center corner-cut-sm">
            <div className="text-terminal-gray mb-1">ARTÍCULOS</div>
            <div className="text-terminal-green font-bold">{String(count).padStart(2, '0')} / {String(count).padStart(2, '0')}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
