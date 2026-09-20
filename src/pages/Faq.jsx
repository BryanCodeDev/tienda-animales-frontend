import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, HelpCircle } from 'lucide-react'
import { useSEO } from '@/utils/seo.js'

const faqs = [
  {
    id: 1,
    question: '¿Envían a domicilio?',
    answer:
      'Sí, enviamos a domicilio a toda Colombia. Los plazos y costos dependen de tu ubicación.',
  },
  {
    id: 2,
    question: '¿Puedo devolver un producto?',
    answer:
      'Aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar en su empaque original.',
  },
  {
    id: 3,
    question: '¿Cuáles son los medios de pago?',
    answer:
      'Actualmente trabajamos con efectivo, transferencia bancaria y pagos móviles. El checkout se conectará posteriormente.',
  },
  {
    id: 4,
    question: '¿Cómo saber qué alimento es adecuado para mi mascota?',
    answer:
      'Nuestra sección de nutrición y categorías te guía según la etapa, raza y necesidades de tu mascota.',
  },
  {
    id: 5,
    question: '¿Las marcas son oficiales?',
    answer:
      'Trabajamos con distribuidores autorizados para garantizar la autenticidad de todos los productos.',
  },
]

export default function Faq() {
  const [openId, setOpenId] = useState(null)

  useSEO({
    title: 'Preguntas frecuentes',
    description:
      'Encuentra respuestas a las preguntas más frecuentes sobre envíos, devoluciones, pagos y alimentación para tu mascota.',
    canonical: '/faq',
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
            Preguntas frecuentes
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left font-medium text-carbon hover:bg-gray-50 transition-colors"
                aria-expanded={openId === faq.id}
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
