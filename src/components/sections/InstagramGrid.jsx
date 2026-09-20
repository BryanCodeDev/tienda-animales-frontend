import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram, Heart } from 'lucide-react'
import IMAGES from '@data/images.js'

const instagramPosts = [
  {
    id: 1,
    image: IMAGES.instagram[1],
    likes: 1240,
  },
  {
    id: 2,
    image: IMAGES.instagram[2],
    likes: 892,
  },
  {
    id: 3,
    image: IMAGES.instagram[3],
    likes: 2103,
  },
  {
    id: 4,
    image: IMAGES.instagram[4],
    likes: 567,
  },
  {
    id: 5,
    image: IMAGES.instagram[5],
    likes: 1680,
  },
  {
    id: 6,
    image: IMAGES.instagram[6],
    likes: 423,
  },
]

export default function InstagramGrid() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md md:text-display-xl font-bold text-carbon">
            Síguenos y comparte sus mejores momentos.
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Comparte fotos de tu mascota con #PetBloom para aparecer aquí.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.8 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Link to="https://instagram.com/petbloom" className="group relative block">
                <motion.div
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={post.image}
                    alt={`PetBloom Instagram post ${post.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <div className="mt-2 text-center">
                  <span className="flex items-center justify-center gap-1 text-xs text-gray-500">
                    <Heart className="w-3 h-3 fill-secondary text-secondary" />
                    {post.likes}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://instagram.com/petbloom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            whileHover={{ x: 5 }}
          >
            @petbloom
            <Instagram className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
