import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SOCIAL_LINKS, SITE_NAME } from '@/constants/config.js'
import Button from '@ui/Button.jsx'

const footerColumns = [
  {
    title: 'Tienda',
    links: [
      { name: 'Perros', path: '/perros' },
      { name: 'Gatos', path: '/gatos' },
      { name: 'Alimentos', path: '/alimentos' },
      { name: 'Promociones', path: '/promociones' },
      { name: 'Marcas', path: '/marcas' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { name: 'Preguntas frecuentes', path: '/faq' },
      { name: 'Contacto', path: '/contacto' },
      { name: 'Envíos', path: '/envios' },
      { name: 'Cambios y devoluciones', path: '/devoluciones' },
    ],
  },
  {
    title: 'Nosotros',
    links: [
      { name: 'Nuestra historia', path: '/nosotros' },
      { name: 'Contacto', path: '/contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Política de privacidad', path: '/privacidad' },
      { name: 'Términos y condiciones', path: '/terminos' },
      { name: 'Tratamiento de datos', path: '/datos' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-carbon text-cream pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center text-2xl font-bold text-cream mb-4">
              PetBloom
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Alimentación premium para perros y gatos.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.56.01 8.07.04 7.5 3.78 7.5 3.78 7.5 7.5V10H4.5V14H7.5V21H12V24H16.5V21H19.5V14H22.5V10H19.5V7.5C19.5 3.78 19.5 3.78 18.93.04 18.44.01 18.26 0 15 0C15 0 15 0 12 0Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.596 0 0 .594 0 1.333v21.334C0 23.4.596 24 1.325 24h11.494v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.34 0 2.48.99 2.48 2.48v3.817h-2.484v2.702h4.723l-.613 4.916c1.92.645 3.23 2.472 3.23 4.738v-.021c0 .637-.516 1.156-1.156 1.156h-3.847V11.01h-2.083v2.666h-2.483v9.324H12.31V11.01H9.692V8.413c0-3.1 1.894-4.788 4.66-4.788 1.34 0 2.48.99 2.48 2.48v3.817h-2.484v2.702h4.723l-.613 4.916c1.92.645 3.23 2.472 3.23 4.738v-.021c0 .637-.516 1.156-1.156 1.156h-3.847V11.01H9.692z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.649 10.684L24 21.75h-6.014l-5.366-6.744-7.342 8.794H0L7.806 11.34 0 2.25H5.642l6.744 8.228L18.244 2.25Zm-1.84 17.46h1.69L6.43 3.49H5.097Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-gray-200 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter + Contact */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Recibe promociones y consejos para tu mascota.
              </p>
              {subscribed ? (
                <div className="p-4 bg-gray-800 rounded-2xl">
                  <p className="text-green-400 text-sm">
                    ¡Gracias por suscribirte! Te has unido a PetBloom.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2.5 rounded-full bg-gray-800 border border-gray-700 text-cream placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm"
                    aria-label="Email para newsletter"
                    required
                  />
                  <Button type="submit" variant="primary" size="md">
                    Suscribirme
                  </Button>
                </form>
              )}
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contáctanos</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    +57 321 2209943
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    hola@petbloom.co
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    Bogotá, Colombia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PetBloom. Todos los derechos reservados. | 
            Contenido demo: datos pendientes de aprobación del cliente.
          </p>
        </div>
      </div>
    </footer>
  )
}
