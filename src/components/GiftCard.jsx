import { useState } from 'react'

const CATEGORY_STYLES = {
  EQUIPAMIENTO: { color: 'text-terminal-amber', border: 'border-yellow-600', glowRgb: '251,191,36' },
  INDUMENTARIA: { color: 'text-terminal-green', border: 'border-green-600', glowRgb: '74,222,128' },
  MEMORIA:      { color: 'text-blue-400',       border: 'border-blue-600',  glowRgb: '96,165,250' },
  MODIFICACIÓN: { color: 'text-purple-400',     border: 'border-purple-600',glowRgb: '192,132,252' },
}

const rgba = (rgb, alpha) => `rgba(${rgb},${alpha})`

export default function GiftCard({ id, title, category, description, icon, priority }) {
  const [hovered, setHovered] = useState(false)
  const style = CATEGORY_STYLES[category] || CATEGORY_STYLES.EQUIPAMIENTO

  return (
    <div
      className={`
        relative border bg-terminal-panel corner-cut
        transition-all duration-300 cursor-default
        ${hovered ? `border-opacity-100` : 'border-terminal-border'}
      `}
      style={{
        borderColor: hovered ? rgba(style.glowRgb, 0.8) : undefined,
        boxShadow: hovered
          ? `0 0 24px ${rgba(style.glowRgb, 0.4)}, inset 0 0 24px ${rgba(style.glowRgb, 0.06)}`
          : '0 0 6px rgba(74,222,128,0.1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner decoration */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-terminal-green opacity-60" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-terminal-green opacity-60" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-terminal-green opacity-60" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-terminal-green opacity-60" />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-terminal-gray text-xs font-bold tracking-widest">
              ART-{String(id).padStart(3, '0')}
            </span>
            <span
              className={`priority-badge ${style.color}`}
              style={{ borderColor: 'currentColor' }}
            >
              {category}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-terminal-gray tracking-wider">PRI:</span>
            <span className={`text-xs font-bold ${priority === 'CRÍTICA' ? 'text-terminal-red' : 'text-terminal-amber'}`}>
              {priority}
            </span>
          </div>
        </div>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`text-3xl w-12 h-12 flex items-center justify-center border ${style.border} bg-black bg-opacity-40 flex-shrink-0 corner-cut-sm`}
            style={{ boxShadow: `inset 0 0 12px ${rgba(style.glowRgb, 0.4)}` }}
          >
            {icon}
          </div>
          <h3 className={`text-base font-bold leading-tight uppercase tracking-wide ${style.color}`}
              style={{ textShadow: `0 0 8px ${rgba(style.glowRgb, 0.4)}` }}>
            {title}
          </h3>
        </div>

        {/* Divider */}
        <div className="border-t border-terminal-border mb-3 relative">
          <div className="absolute -top-px left-4 right-4 h-px bg-terminal-green opacity-20" />
        </div>

        {/* Description */}
        <p className="text-xs text-terminal-gray leading-relaxed tracking-wide">
          {description}
        </p>

        {/* Status bar */}
        <div className="mt-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${hovered ? 'bg-terminal-green animate-pulse' : 'bg-terminal-gray'}`} />
            <span className="text-terminal-gray tracking-widest">
              {hovered ? 'SELECCIONADO' : 'EN ESPERA'}
            </span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-1 ${i < 4 ? 'bg-terminal-dimgreen' : 'bg-terminal-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
