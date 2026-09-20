import { motion } from 'framer-motion'

export default function ProductBadge({ type, text }) {
  const badgeConfig = {
    'best-seller': {
      bg: 'bg-carbon',
      text: 'text-cream',
      label: 'Más vendido',
    },
    'offer': {
      bg: 'bg-primary',
      text: 'text-white',
      label: 'Oferta',
    },
    'new': {
      bg: 'bg-natural',
      text: 'text-white',
      label: 'Nuevo',
    },
  }

  const config = badgeConfig[type]
  if (!config) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`absolute top-4 left-4 ${config.bg} ${config.text} px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1`}
    >
      {config.label}
    </motion.div>
  )
}
