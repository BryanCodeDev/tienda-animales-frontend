# PetBloom — Landing Page Premium de Alimentación para Mascotas

![PetBloom Banner](public/og-image.svg)

Una landing page premium y cinematográfica para una tienda de alimentación para perros y gatos, construida con React, Vite y Tailwind CSS. Diseñada como una demo profesional lista para escalar a un e-commerce completo.

---

## Stack

| Categoría | Tecnología |
|-----------|-----------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Estilos | Tailwind CSS 3 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Routing | React Router DOM 6 |
| Lenguaje | JavaScript (JSX) |

**NO incluye**: TypeScript, Next.js, Node.js, Express, MySQL, Prisma, backend, autenticación, panel administrativo o pasarela de pagos.

---

## Instalación

```bash
git clone <url-del-repositorio>
cd tienda-mascotas
npm install
npm run dev
```

La aplicación se iniciará en `http://localhost:5173`.

---

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build local
npm run lint     # Linter
```

---

## Estructura del proyecto

```
src/
├── assets/           # Recursos estáticos (placeholder images)
├── components/
│   ├── ui/           # Componentes reutilizables (Button, Badge, Rating, ...)
│   ├── layout/       # Componentes de layout (Navbar, Footer, TopBar, CartDrawer, ...)
│   └── sections/     # Secciones de página (Hero, PetSelector, ProductCard, ...)
├── data/             # Datos estáticos (products, categories, brands, blog, testimonials, images)
├── hooks/            # Hooks personalizados (useCart, useLocalStorage, useScrollAnimation)
├── pages/            # Páginas/Rutas (Home, Dogs, Cats, Blog, Product, About, Contact, ...)
├── utils/            # Utilidades (SEO, formatPrice, calculateDiscount)
├── constants/        # Configuración global (WhatsApp, redes sociales, branding)
├── App.jsx           # Punto de entrada de rutas
└── main.jsx          # Renderizado de la app
```

---

## Cómo editar productos

Todos los productos están en `src/data/products.js`:

```js
export const products = [
  {
    id: 'prod-001',
    slug: 'nombre-del-producto',
    name: 'Alimento para perro adulto',
    brand: 'Royal Canin',
    category: 'dog',       // 'dog' | 'cat'
    type: 'dry',          // 'dry' | 'wet' | 'natural' | 'snack'
    stage: 'adult',       // 'puppy' | 'adult' | 'senior'
    weight: '2 KG',
    price: 89900,
    originalPrice: 105000,
    discount: 15,
    rating: 4.8,
    reviewCount: 128,
    image: 'https://...',
    images: ['https://...'],
    badges: ['best-seller'],  // 'best-seller' | 'offer' | 'new'
    inStock: true,
    featured: true,
    description: 'Descripción del producto...',
    features: ['Característica 1', 'Característica 2'],
    specifications: { 'Peso neto': '2 KG', ... },
    relatedProducts: ['prod-002', 'prod-003'],
  },
]
```

**Productos destacados** se marcan con `featured: true`.
**Productos en oferta** se marcan con `discount > 0`.

---

## Cómo editar imágenes

Todas las imágenes están centralizadas en `src/data/images.js`. Reemplazá las URLs con las imágenes reales de tu marca. Las imágenes actuales son placeholders de Unsplash de alta calidad.

> **Importante**: No usar imágenes de productos reales de marcas sin autorización.

---

## Configuración de WhatsApp

El número de WhatsApp de contacto está en `src/constants/config.js`:

```js
export const WHATSAPP_NUMBER = '573001234567'
export const WHATSAPP_MESSAGE = 'Hola, quiero conocer las opciones de alimentación para mi mascota.'
```

El botón flotante de WhatsApp aparece en la esquina inferior derecha de todas las páginas. En la página de producto, muestra un mensaje específico del producto.

---

## SEO

La landing incluye implementación SEO completa:

- **Meta tags dinámicos**: títulos, descripciones y Open Graph por página
- **Twitter Cards**: summary_large_image
- **Canonical URLs**: enlaces canónicos en todas las páginas
- **Breadcrumbs**: schema.org BreadcrumbList con datos estructurados
- **Sitemap XML**: `public/sitemap.xml` con URLs y metadatos de imágenes
- **Robots.txt**: `public/robots.txt` con directivas de rastreo
- **Semantic HTML**: uso de `<section>`, `<nav>`, `<article>`, `<header>`
- **Alt text**: todas las imágenes tienen atributos `alt` descriptivos
- **URLs amigables**: rutas limpias y descriptivas

### Palabras clave optimizadas

- "comida para perros"
- "comida para gatos"
- "alimento para perros"
- "alimento para gatos"
- "concentrado para perros"
- "concentrado para gatos"
- "comida para mascotas Colombia"
- "alimentos para mascotas"

---

## Animaciones

Se utiliza Framer Motion para:

- Texto reveal con stagger
- Entradas escalonadas (stagger children)
- Parallax suave
- Zoom en imágenes
- Floating cards
- Marquee infinito para marcas
- Transiciones de ruta
- Microinteracciones en botones
- Animación del carrito (agregar producto)
- Preferencias `prefers-reduced-motion`

---

## Responsive

La página está optimizada para:

- 320px, 375px, 390px, 414px (móvil)
- 768px (tablet)
- 1024px, 1280px, 1440px, 1920px (desktop)

Enfoque mobile-first con Tailwind CSS.

---

## Accesibilidad

- Alt text en todas las imágenes
- aria-label en botones e iconos
- Contraste correcto (WCAG AA)
- Navegación por teclado
- Focus states visibles
- Semantic HTML
- `prefers-reduced-motion` respetado

---

## Deployment en Netlify

El proyecto incluye `netlify.toml` configurado:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

El redirect de `/*` a `/index.html` con status 200 asegura que React Router funcione correctamente en Netlify.

### Pasos de deployment:

1. Conectá tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

---

## Arquitectura para el futuro

El frontend está preparado para escalar a un e-commerce completo:

```
src/
├── data/           → Reemplazar con API calls (Node.js + Express)
├── hooks/
│   └── useCart.js  → Conectar a backend (MySQL + APIs de carrito)
├── utils/
│   └── seo.js      → Dinámizar con datos del CMS
├── constants/
│   └── config.js   → Variables de entorno (.env)
```

- **Node.js + Express**: API REST para productos, usuarios, carrito, pedidos
- **MySQL**: Base de datos para usuarios, productos, inventario
- **Mercado Pago**: Integración de pasarela de pagos
- **Panel admin**: CRUD de productos y categorías

Las estructuras de datos están diseñadas para ser fácilmente reemplazables por API responses.

---

## Paleta de colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--color-cream` | `#FFFDF8` | Fondo principal |
| `--color-carbon` | `#171717` | Texto primario |
| `--color-primary` | `#FF7A45` | CTA, botones, promociones |
| `--color-secondary` | `#F4B942` | Destacados, beneficios |
| `--color-natural` | `#6FAF5F` | Natural, bienestar, nutrición |

Los colores se pueden modificar fácilmente en `tailwind.config.js`.

---

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal (landing) |
| `/perros` | Alimentos para perros |
| `/gatos` | Alimentos para gatos |
| `/alimentos` | Catálogo completo de alimentos |
| `/promociones` | Ofertas y promociones |
| `/marcas` | Marcas disponibles |
| `/blog` | Lista de artículos |
| `/blog/:slug` | Artículo individual |
| `/producto/:slug` | Página de producto |
| `/nosotros` | Nuestra historia |
| `/contacto` | Formulario de contacto |
| `/faq` | Preguntas frecuentes |

---

## Demo Disclaimer

Este proyecto es una **demostración frontend**. Todos los datos (precios, productos, testimonios) son ficticios y están claramente marcados como "pendientes de aprobación" hasta que el cliente proporcione contenido real.
