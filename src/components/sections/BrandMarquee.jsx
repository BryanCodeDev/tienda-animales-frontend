import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function BrandMarquee() {
  const brands = [
    { name: 'Royal Canin' },
    { name: 'Purina' },
    { name: 'Hill\'s' },
    { name: 'Whiskas' },
    { name: 'Pedigree' },
    { name: 'Acana' },
    { name: 'Orijin' },
    { name: 'Farmina' },
    { name: 'Blue Buffalo' },
    { name: 'Orijen' },
  ]

  const controls = useAnimation()
  const containerRef = useRef(null)

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    })
  }, [controls])

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            Las marcas que conoces. La calidad que buscas.
          </h2>
          <p className="text-gray-500 mt-4">
            Trabajamos con las marcas líderes en nutrición animal.
          </p>
        </motion.div>
      </div>

      <div className="overflow-hidden bg-gray-50 py-8">
        <div ref={containerRef} className="relative">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={controls}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-gray-700 font-bold text-lg whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
