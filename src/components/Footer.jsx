export default function Footer() {
  return (
    <footer className="mt-12 border-t border-terminal-border pt-6 pb-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-terminal-gray">
        <div className="tracking-widest">
          © {new Date().getFullYear()} — SISTEMA VÍCTOR-ALPHA
        </div>

        <div className="text-center text-terminal-green opacity-70 tracking-wider">
          <span className="glow-text">[ DOCUMENTO DE ACCESO EXCLUSIVO ]</span>
        </div>

        <div className="tracking-widest">
          REV. 1.0.0 — CLASIFICADO
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="inline-block border border-terminal-border px-6 py-2 text-xs text-terminal-gray tracking-widest corner-cut-sm">
          NOTA: La aprobación de cualquier artículo constituye un compromiso vinculante
          con el bienestar del solicitante. Gracias, mi vida. 💚
        </div>
      </div>
    </footer>
  )
}
