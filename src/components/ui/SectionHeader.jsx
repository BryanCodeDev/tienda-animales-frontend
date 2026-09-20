import { motion } from 'framer-motion'

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
  delay = 0,
}) {
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6 },
    },
  }

  return (
    <motion.div
      className={`section-title ${centered ? 'text-center' : 'text-left'} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={container}
    >
      <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
