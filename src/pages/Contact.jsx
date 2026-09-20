import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ContactForm from '@components/sections/ContactForm.jsx'
import { useSEO } from '@/utils/seo.js'

export default function Contact() {
  useSEO({
    title: 'Contacto',
    description:
      'Contacta con PetBloom por WhatsApp, email o Instagram. Estamos aquí para ayudarte con tu pedido de alimentación para mascotas.',
    canonical: '/contacto',
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
          <h1 className="text-display-xl md:text-display-2xl font-bold text-carbon mb-4">
            Contacto
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            ¿Tienes dudas? Estamos aquí para ayudarte. Contáctanos por
            cualquier medio y te responderemos lo antes posible.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  )
}
