// Todos los textos, datos e imágenes del restaurante — edita aquí para personalizar

// Imágenes locales — Vite las procesa y genera URLs hasheadas para producción
import heroImg from '@/assets/images/hero.jpg'
import localImg from '@/assets/images/local.jpg'
import mariscosImg from '@/assets/images/mariscos-gratinados.jpg'
import cevicheImg from '@/assets/images/ceviche.jpg'
import hamburguesaImg from '@/assets/images/hamburguesa.jpg'

import type {
  RestaurantInfo,
  NavLink,
  MenuCategory,
  CarouselImage,
  ContactInfo,
  SocialButton,
} from '@/types'
// MenuItem se usa implícitamente dentro de MenuCategory

export const restaurant: RestaurantInfo = {
  name: 'La Mesa Grande',
  tagline: 'Sabores que te llevan a casa',
  heroTitle: 'La Mesa Grande',
  heroSubtitle: 'Cocina tradicional latinoamericana con el sabor de siempre',
  heroImage: heroImg,
  bannerText: '🌿 Ingredientes frescos · Recetas de abuela · Amor en cada plato 🌿',
  aboutTitle: 'Nuestra Historia',
  aboutText:
    'Desde 1985, La Mesa Grande es el lugar donde las familias colombianas se reúnen para compartir momentos inolvidables. Nuestra cocina nace de recetas heredadas de generación en generación, preparadas con los ingredientes más frescos de la región. Cada plato es un viaje al sabor auténtico de nuestra tierra.',
  aboutImage: localImg,
  whatsappNumber: '+573001234567',
  whatsappHref:
    'https://wa.me/573001234567?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20La%20Mesa%20Grande%20%F0%9F%8D%BD%EF%B8%8F',
  // Reemplaza con el embed de Google Maps de tu ubicación exacta
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127271.08296636907!2d-74.13394205488281!3d4.648619999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco',
  reservationHref: '#contacto',
  menuHref: '#menu',
  copyright: '© 2025 La Mesa Grande. Todos los derechos reservados.',
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const menuCategories: MenuCategory[] = [
  {
    id: 'platos-fuertes',
    label: 'Platos Fuertes',
    items: [
      {
        emoji: '🍖',
        name: 'Bandeja Paisa',
        description: 'Frijoles rojos, arroz, chicharrón, huevo frito, chorizo, morcilla y aguacate.',
        price: 32000,
      },
      {
        emoji: '🍲',
        name: 'Ajiaco Santafereño',
        description: 'Pollo desmenuzado, tres variedades de papa, guascas aromáticas y crema de leche.',
        price: 28000,
      },
      {
        emoji: '🥩',
        name: 'Churrasco a la Brasa',
        description: 'Corte de 300g al carbón con chimichurri casero, papas criollas y ensalada.',
        price: 45000,
      },
      {
        emoji: '🍗',
        name: 'Pollo al Ajillo',
        description: 'Muslos de pollo dorados en mantequilla de ajo, tomillo y limón. Con arroz y tajadas.',
        price: 27000,
      },
      {
        emoji: '🐟',
        name: 'Trucha a la Plancha',
        description: 'Trucha arcoíris del río con mantequilla de hierbas, patacones y ensalada verde.',
        price: 35000,
      },
      {
        emoji: '🫕',
        name: 'Cazuela de Mariscos',
        description: 'Camarones, calamares y mejillones en salsa criolla con coco y arroz blanco.',
        price: 42000,
      },
    ],
  },
  {
    id: 'entradas',
    label: 'Entradas',
    items: [
      {
        emoji: '🥗',
        name: 'Ensalada de la Casa',
        description: 'Mezcla de lechugas, tomate cherry, aguacate, maíz y aderezo de limón y cilantro.',
        price: 12000,
      },
      {
        emoji: '🧆',
        name: 'Empanadas (x3)',
        description: 'Empanadas de pipián, de pollo y de carne. Crujientes y servidas con ají.',
        price: 15000,
      },
      {
        emoji: '🍤',
        name: 'Ceviche de Camarón',
        description: 'Camarones marinados en limón, cebolla morada, cilantro, tomate y aguacate.',
        price: 22000,
      },
      {
        emoji: '🫔',
        name: 'Arepa con Hogao',
        description: 'Arepa de chócolo artesanal con hogao casero de tomate, cebolla y queso costeño.',
        price: 8000,
      },
      {
        emoji: '🍜',
        name: 'Sopa del Día',
        description: 'Preparada cada mañana con ingredientes de temporada. Pregunta al mesero por la del día.',
        price: 14000,
      },
      {
        emoji: '🥚',
        name: 'Huevos Pericos',
        description: 'Huevos revueltos con tomate, cebolla, pimentón y cilantro. Con arepa y jugo.',
        price: 10000,
      },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    items: [
      {
        emoji: '🍮',
        name: 'Arroz con Leche',
        description: 'Receta tradicional con canela, leche entera y panela. Servido tibio o frío.',
        price: 8000,
      },
      {
        emoji: '🎂',
        name: 'Torta de Tres Leches',
        description: 'Bizcocho esponjoso empapado en tres leches, cubierto con crema chantilly.',
        price: 12000,
      },
      {
        emoji: '🍧',
        name: 'Helado Artesanal',
        description: 'Dos bolas de helado artesanal. Sabores: lulo, guanábana, maracuyá o vainilla.',
        price: 9000,
      },
      {
        emoji: '🍫',
        name: 'Brownie con Helado',
        description: 'Brownie de chocolate negro tibio con una bola de helado de vainilla y nueces.',
        price: 14000,
      },
      {
        emoji: '🍰',
        name: 'Cheesecake de Mora',
        description: 'Base de galleta, crema de queso suave y coulis de mora silvestre colombiana.',
        price: 13000,
      },
      {
        emoji: '🫙',
        name: 'Manjar Blanco',
        description: 'Dulce tradicional vallecaucano de leche, azúcar y canela. Servido con obleas.',
        price: 7000,
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    items: [
      {
        emoji: '🧃',
        name: 'Jugo Natural',
        description: 'En agua o leche: lulo, maracuyá, mora, guanábana, tomate de árbol o mango.',
        price: 6000,
      },
      {
        emoji: '☕',
        name: 'Tinto Colombiano',
        description: 'Café de origen colombiano preparado en greca tradicional. Negro o con leche.',
        price: 3000,
      },
      {
        emoji: '🍹',
        name: 'Limonada de Coco',
        description: 'Limonada natural batida con leche de coco, hielo y un toque de menta fresca.',
        price: 8000,
      },
      {
        emoji: '🫖',
        name: 'Agua Panela con Limón',
        description: 'Bebida tradicional colombiana de panela disuelta, servida fría con limón.',
        price: 4000,
      },
      {
        emoji: '🥤',
        name: 'Malteada de Fresa',
        description: 'Batido cremoso de fresa fresca, leche entera y helado artesanal de vainilla.',
        price: 10000,
      },
      {
        emoji: '🍺',
        name: 'Cerveza Artesanal',
        description: 'Selección rotativa de cervezas artesanales colombianas. Pregunta por el estilo del día.',
        price: 9000,
      },
    ],
  },
]

export const carouselImages: CarouselImage[] = [
  { url: mariscosImg, alt: 'Mariscos gratinados' },
  { url: cevicheImg, alt: 'Cazuela de mariscos' },
  { url: hamburguesaImg, alt: 'Hamburguesa con papas' },
]

export const contactInfo: ContactInfo[] = [
  {
    icon: '📞',
    title: 'Teléfono',
    value: '+57 300 123 4567',
    href: 'tel:+573001234567',
  },
  {
    icon: '✉️',
    title: 'Email',
    value: 'info@lamesagrande.co',
    href: 'mailto:info@lamesagrande.co',
  },
  {
    icon: '📍',
    title: 'Dirección',
    value: 'Calle 85 #15-23, Bogotá D.C.',
    href: 'https://maps.google.com/?q=Calle+85+15-23+Bogota',
  },
]

export const socialButtons: SocialButton[] = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/573001234567?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20La%20Mesa%20Grande%20%F0%9F%8D%BD%EF%B8%8F',
    icon: 'whatsapp',
    bgStyle: 'background-color: #25D366',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/lamesagrande',
    icon: 'instagram',
    bgStyle: 'background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    handle: '@lamesagrande',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/lamesagrande',
    icon: 'facebook',
    bgStyle: 'background-color: #1877F2',
    handle: '@LaMesaGrande',
  },
  {
    name: 'Google Maps',
    href: 'https://maps.google.com/?q=Calle+85+15-23+Bogota',
    icon: 'maps',
    bgStyle: 'background-color: #EA4335',
  },
]

// Formatea precio en pesos colombianos: 32000 → "$ 32.000"
export const formatPrice = (price: number): string =>
  `$ ${price.toLocaleString('es-CO')}`
