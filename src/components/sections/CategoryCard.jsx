import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Button from '@ui/Button.jsx'

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={category.href} className="block">
        <motion.div
          className="card h-full overflow-hidden group-hover:shadow-xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="h-40 overflow-hidden rounded-t-3xl">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-carbon mb-2">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {category.description}
            </p>
            <motion.div
              className="flex items-center gap-2 text-primary font-medium"
              whileHover={{ x: 5 }}
            >
              <span>Ver categoría</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
