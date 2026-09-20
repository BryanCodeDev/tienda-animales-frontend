import { motion } from 'framer-motion'
import { useToast } from '@components/layout/Toast.jsx'
import Hero from '@components/sections/Hero.jsx'
import PetSelector from '@components/sections/PetSelector.jsx'
import ProductGrid from '@components/sections/ProductGrid.jsx'
import PromoBanner from '@components/sections/PromoBanner.jsx'
import BrandMarquee from '@components/sections/BrandMarquee.jsx'
import NutritionSection from '@components/sections/NutritionSection.jsx'
import Benefits from '@components/sections/Benefits.jsx'
import Testimonials from '@components/sections/Testimonials.jsx'
import InstagramGrid from '@components/sections/InstagramGrid.jsx'
import CTA from '@components/sections/CTA.jsx'
import ContactForm from '@components/sections/ContactForm.jsx'
import SectionHeader from '@ui/SectionHeader.jsx'
import CategoryCard from '@components/sections/CategoryCard.jsx'
import categories from '@data/categories.js'
import { featuredProducts, saleProducts } from '@data/products.js'
import { useSEO } from '@/utils/seo.js'
import { useEffect } from 'react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Home() {
  const { addToast } = useToast()

  useSEO({
    title: 'Alimentación Premium para Perros y Gatos',
    description:
      'PetBloom es tu tienda premium de alimentación para perros y gatos. Encuentra alimentos naturales, snacks saludables y nutrición premium para cada etapa de tu mascota.',
    canonical: '/',
  })

  const handleAddToCart = (product) => {
    addToast({
      type: 'success',
      title: 'Producto agregado',
      message: `${product.name} se ha agregado al carrito.`,
    })
  }

  return (
    <>
      <Hero />

      <PetSelector />

      {/* Categories */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
              Encuentra lo que necesita.
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid
        title="Favoritos de nuestros peludos"
        subtitle="Los productos más elegidos por dueños como tú."
        products={featuredProducts}
        columns={4}
        onAddToCart={handleAddToCart}
      />

      <PromoBanner />

      <BrandMarquee />

      {/* Sale Products */}
      {saleProducts.length > 0 && (
        <ProductGrid
          title="En oferta esta semana"
          subtitle="Aprovechá estas ofertas antes que se terminen."
          products={saleProducts}
          columns={4}
          onAddToCart={handleAddToCart}
        />
      )}

      <NutritionSection />

      <Benefits />

      <Testimonials />

      <InstagramGrid />

      <CTA />

      <ContactForm />
    </>
  )
}
