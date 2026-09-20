import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import testimonials from '@data/testimonials.js'

export default function Testimonials() {
  const testimonialSlides = testimonials.slice(0, 5)
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonialSlides.length)
  const prev = () =>
    setActiveIndex((i) =>
      i === 0 ? testimonialSlides.length - 1 : i - 1
    )

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Historias reales de dueños y sus mascotas felices.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <TestimonialItem
                testimonial={testimonialSlides[activeIndex]}
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonialSlides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="p-2 rounded-full bg-white text-carbon hover:bg-gray-50 transition-colors"
            aria-label="Testimonio anterior"
          >
            <Star className="w-5 h-5 rotate-180" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="p-2 rounded-full bg-white text-carbon hover:bg-gray-50 transition-colors"
            aria-label="Siguiente testimonio"
          >
            <Star className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

function TestimonialItem({ testimonial }) {
  const getRatingStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'fill-secondary text-secondary'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 shadow-sm"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6">
        <img
          src={testimonial.petImage}
          alt={testimonial.petName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center gap-1 mb-4">
        {getRatingStars(testimonial.rating)}
      </div>
      <p className="text-gray-600 italic mb-4">
        {testimonial.isPending ? (
          <span className="text-gray-400 italic">
            "{testimonial.text}"
          </span>
        ) : (
          `"${testimonial.text}"`
        )}
      </p>
      <p className="font-medium text-carbon">
        {testimonial.isPending ? (
          <span className="text-gray-400">{testimonial.name}</span>
        ) : (
          testimonial.name
        )}
      </p>
      <p className="text-sm text-gray-400">
        {testimonial.isPending ? '[Pendiente]' : testimonial.petName}
      </p>
    </motion.div>
  )
}
