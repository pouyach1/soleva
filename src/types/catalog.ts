export type Product = {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  discountPercent?: number
  images: string[]
  rating: number
  reviewCount: number
  sizes: string[]
  badges?: string[]
  category: string
  brand: string
  inStock: boolean
}

export type Category = {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export type TechnologyFeature = {
  id: string
  title: string
  description: string
  icon: 'cushion' | 'light' | 'grip' | 'breath' | 'support' | 'eco'
}

export type TrustItem = {
  id: string
  title: string
  description: string
  icon: 'delivery' | 'return' | 'original' | 'support'
}

export type NavItem = {
  label: string
  href: string
}
