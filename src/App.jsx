import Header from './components/Header'
import GiftCard from './components/GiftCard'
import Footer from './components/Footer'

const gifts = [
  {
    id: 1,
    title: 'Ropa del Pull',
    category: 'INDUMENTARIA',
    description:
      'Solicitud de prendas de vestir del establecimiento comercial conocido como "Pull & Bear". Cualquier artículo del catálogo vigente es bienvenido. Talla XL preferida. Estado: NUEVO.',
    icon: '👕',
    priority: 'ALTA',
  },
  {
    id: 2,
    title: 'Kit de Rendimiento — Pedal de Freno',
    category: 'EQUIPAMIENTO',
    description:
      'Módulo de mejora para sistema de control de volante de simulación. Componente: pedal de freno con upgrade de rendimiento (load cell o similar). Compatible con pedalera existente. URGENTE.',
    icon: '🎮',
    priority: 'CRÍTICA',
  },
  {
    id: 3,
    title: 'Fotografía Conjunta',
    category: 'MEMORIA',
    description:
      'Registro fotográfico impreso o enmarcado de ambos operativos. Captura de un momento compartido. Formato: a elección del agente emisor. Valor sentimental: INCALCULABLE.',
    icon: '📸',
    priority: 'ALTA',
  },
  {
    id: 4,
    title: 'Concepto de Tatuaje',
    category: 'MODIFICACIÓN',
    description:
      'Propuesta de diseño artístico para modificación corporal permanente. Se aceptan bocetos, referencias visuales o ideas conceptuales. El agente emisor tiene libertad creativa total.',
    icon: '✒️',
    priority: 'MEDIA',
  },
]

export default function App() {
  return (
    <div className="min-h-screen grid-bg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header count={gifts.length} />

        {/* Instructions */}
        <div className="mb-6 border border-terminal-border bg-black bg-opacity-40 p-4 corner-cut text-xs text-terminal-gray leading-relaxed">
          <span className="text-terminal-amber font-bold glow-text-amber">▸ INSTRUCCIONES: </span>
          Los siguientes artículos han sido identificados como suministros prioritarios para el
          cumpleaños del operativo VÍCTOR. El agente designado (tú, mi amor) puede seleccionar
          uno o más ítems de la lista para garantizar la moral y el bienestar del personal.
          Toda asistencia es profundamente apreciada.
        </div>

        {/* Gift grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gifts.map((gift) => (
            <GiftCard key={gift.id} {...gift} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}
