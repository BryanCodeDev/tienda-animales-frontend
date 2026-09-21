import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/constants/config'

export default function WhatsAppButton({ productName = null }) {
  const handleClick = () => {
    const message = productName
      ? `Hola, estoy interesado en ${productName}.`
      : WHATSAPP_MESSAGE
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  )
}
