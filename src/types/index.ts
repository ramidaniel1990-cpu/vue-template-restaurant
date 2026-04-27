// Tipos e interfaces para el template de restaurante La Mesa Grande

export interface NavLink {
  label: string
  href: string
}

export interface MenuItem {
  emoji: string
  name: string
  description: string
  price: number
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export interface CarouselImage {
  url: string
  alt: string
}

export interface ContactInfo {
  icon: string
  title: string
  value: string
  href: string
}

export interface SocialButton {
  name: string
  href: string
  // 'whatsapp' | 'instagram' | 'facebook' | 'maps' determina el SVG a renderizar
  icon: 'whatsapp' | 'instagram' | 'facebook' | 'maps'
  bgStyle: string
  // Handle opcional para mostrar en el footer como texto (@usuario)
  handle?: string
}

export interface RestaurantInfo {
  name: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  bannerText: string
  aboutTitle: string
  aboutText: string
  aboutImage: string
  whatsappNumber: string
  reservationHref: string
  menuHref: string
  copyright: string
}
