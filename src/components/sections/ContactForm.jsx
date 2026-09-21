import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react'
import Button from '@ui/Button'
import { useToast } from '@components/layout/Toast'

const petTypes = [
  { value: 'dog', label: 'Perro' },
  { value: 'cat', label: 'Gato' },
  { value: 'multiple', label: 'Varios' },
  { value: 'other', label: 'Otro' },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: 'dog',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const { addToast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitted(true)
    addToast({
      type: 'success',
      title: 'Mensaje enviado',
      message: 'Gracias por contactarnos. Nos pondremos en contacto pronto.',
    })
  }

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquier medio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-carbon mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-500">+57 321 2209943</p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-natural/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-natural" />
            </div>
            <h3 className="font-bold text-carbon mb-2">Email</h3>
            <p className="text-sm text-gray-500">hola@petbloom.co</p>
          </motion.div>

          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-bold text-carbon mb-2">Instagram</h3>
            <p className="text-sm text-gray-500">@petbloom</p>
          </motion.div>
        </div>

        <motion.div
          className="max-w-2xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12 bg-gray-50 rounded-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-carbon mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-500">
                Gracias por contactarnos. Te responderemos lo antes posible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-carbon mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-primary'
                    } focus:outline-none text-sm`}
                    placeholder="Tu nombre"
                    aria-label="Nombre"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-carbon mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-primary'
                    } focus:outline-none text-sm`}
                    placeholder="tu@email.com"
                    aria-label="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-carbon mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm transition-colors"
                    placeholder="+57 321 2209943"
                    aria-label="Teléfono"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-carbon mb-2">
                    Tipo de mascota
                  </label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm appearance-none pr-10"
                    aria-label="Tipo de mascota"
                  >
                    {petTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-carbon mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                    errors.message
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-gray-200 focus:border-primary'
                  } focus:outline-none text-sm`}
                  placeholder="¿En qué podemos ayudarte?"
                  aria-label="Mensaje"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                icon={Send}
                iconPosition="right"
              >
                Enviar mensaje
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Demo: el formulario no envía datos reales. Preparado para conectar
                con una API posteriormente.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
