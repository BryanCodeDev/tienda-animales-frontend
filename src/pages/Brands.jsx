import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import brands from '@data/brands.js'
import { useSEO } from '@/utils/seo.js'

export default function Brands() {
  useSEO({
    title: 'Marcas de alimentos para mascotas',
    description:
      'Conoce las marcas de alimentos premium para perros y gatos que trabajamos. Royal Canin, Purina, Hill\'s, Whiskas y más.',
    canonical: '/marcas',
  })

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-md sm:text-display-xl md:text-display-2xl font-bold text-carbon mb-4">
            Nuestras marcas
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Las marcas que conoces. La calidad que buscas. Trabajamos con las
            marcas líderes en nutrición animal para ofrecer lo mejor a tus
            mascotas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.8 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center group"
            >
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-32 flex items-center justify-center mb-3 group-hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="text-lg font-bold text-gray-700">${brand.name}</span>`
                  }}
                />
              </motion.div>
              <Link
                to={`/alimentos?marca=${brand.slug}`}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {brand.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center p-8 bg-gray-50 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md font-bold text-carbon mb-4">
            ¿Representas una marca?
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Estamos abiertos a colaborar con marcas comprometidas con la
            calidad y el bienestar animal.
          </p>
          <Link to="/contacto">
            <motion.span
              className="text-primary font-medium inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Hablemos
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
