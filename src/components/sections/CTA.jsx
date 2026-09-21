import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, MessageCircle } from 'lucide-react'
import Button from '@ui/Button'
import IMAGES from '@data/images'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/constants/config'

export default function CTA({
  headline = 'Ellos esperan mucho de ti.',
  subheadline = 'Nosotros te ayudamos a encontrar una alimentación que esté a la altura.',
  primaryCTA = 'Ver alimentos',
  primaryHref = '/alimentos',
  secondaryCTA = 'Hablar por WhatsApp',
  secondaryHref = '#',
  image = IMAGES.experience.cta,
}) {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, '_blank')
  }

  return (
    <section className="section bg-carbon text-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-display-md md:text-display-xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {headline}
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subheadline}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to={primaryHref}>
                <Button variant="primary" size="lg" icon={ChevronRight}>
                  {primaryCTA}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                icon={MessageCircle}
                onClick={handleWhatsApp}
                className="border border-gray-700 text-cream hover:bg-gray-800"
              >
                {secondaryCTA}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image}
                alt="Perro y gato felices"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white text-carbon rounded-2xl p-6 shadow-xl max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm text-gray-500 mb-1">
                Nuestros productos son revisados por expertos en nutrición animal.
              </p>
              <p className="text-xs text-gray-400">
                Envío a todo el país. Consulta por WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
