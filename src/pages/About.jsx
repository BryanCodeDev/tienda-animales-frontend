import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Award, Leaf, Globe2, MessageCircle } from 'lucide-react'
import IMAGES from '@data/images.js'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@constants/config.js'
import { useSEO } from '@/utils/seo.js'

export default function About() {
  useSEO({
    title: 'Nosotro | PetBloom',
    description:
      'Conoce la historia de PetBloom, nacida del amor por las mascotas y el compromiso con su bienestar y nutrición.',
    canonical: '/nosotros',
  })

  const values = [
    {
      title: 'Amor por las mascotas',
      description: 'Cada mascota es única. Diseñamos soluciones que respetan esa singularidad.',
      icon: Heart,
    },
    {
      title: 'Calidad premium',
      description: 'Seleccionamos solo las mejores marcas y productos para tu compañero.',
      icon: Award,
    },
    {
      title: 'Bienestar integral',
      description: 'Tu mascota merece lo mejor. Nutrición, juegos y cuidados integrales.',
      icon: Leaf,
    },
    {
      title: 'Compromiso social',
      description: 'Colaboramos con organizaciones que protegen a los animales.',
      icon: Globe2,
    },
  ]

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-2xl md:text-display-2xl font-bold text-carbon mb-4">
            Nuestra historia
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            En PetBloom creemos que la alimentación define la calidad de vida de
            tus mascotas. Nacimos del amor por los animales y el deseo de ofrecer
            alimentos premium que promuevan una vida larga y saludable.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="rounded-3xl overflow-hidden h-80 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={IMAGES.experience.aboutTeam}
            alt="Equipo PetBloom con mascotas"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Mission */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-display-md font-bold text-carbon mb-4">
            Nuestra misión
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestra misión es simple: conectar a las familias con alimentos de
            la más alta calidad, respaldados por ciencia y hechos con ingredientes
            naturales. Cada fórmula que seleccionamos es cuidadosamente evaluada
            para garantizar que tus mascotas reciban lo mejor en cada etapa de
            su vida.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-carbon mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            ¡Hablemos por WhatsApp!
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
