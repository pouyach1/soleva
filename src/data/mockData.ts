import type { Category, NavItem, Product, TechnologyFeature, TrustItem } from '../types/catalog'
import heroLifestyle from '../assets/placeholders/hero-lifestyle.svg'
import productVortex from '../assets/placeholders/product-vortex.svg'
import productPulse from '../assets/placeholders/product-pulse.svg'
import productAero from '../assets/placeholders/product-aero.svg'
import productCourt from '../assets/placeholders/product-court.svg'
import productDrift from '../assets/placeholders/product-drift.svg'
import productNova from '../assets/placeholders/product-nova.svg'
import productStride from '../assets/placeholders/product-stride.svg'
import productFlux from '../assets/placeholders/product-flux.svg'
import categoryRun from '../assets/placeholders/category-run.svg'
import categoryBasketball from '../assets/placeholders/category-basketball.svg'
import categoryTraining from '../assets/placeholders/category-training.svg'
import categoryLifestyle from '../assets/placeholders/category-lifestyle.svg'
import avatar1 from '../assets/placeholders/avatar-1.svg'
import avatar2 from '../assets/placeholders/avatar-2.svg'
import avatar3 from '../assets/placeholders/avatar-3.svg'

export const heroImage = heroLifestyle
export const socialAvatars = [avatar1, avatar2, avatar3]

export const navItems: NavItem[] = [
  { label: 'Каталог', href: '/catalog' },
  { label: 'Бренды', href: '/brands' },
  { label: 'Новинки', href: '/new' },
  { label: 'Акции', href: '/sale' },
  { label: 'Технологии', href: '#tech' },
  { label: 'О нас', href: '#about' },
  { label: 'Доставка', href: '#delivery' },
]

export const chipCategories = [
  { id: 'all', name: 'Все' },
  { id: 'running', name: 'Бег' },
  { id: 'basketball', name: 'Баскетбол' },
  { id: 'training', name: 'Тренинг' },
  { id: 'lifestyle', name: 'Лайфстайл' },
] as const

export const products: Product[] = [
  {
    id: 'vortex-3',
    name: 'AERO STEP VORTEX 3',
    slug: 'aero-step-vortex-3',
    price: 12990,
    originalPrice: 15990,
    discountPercent: 19,
    images: [productVortex],
    rating: 4.9,
    reviewCount: 214,
    sizes: ['36', '45'],
    badges: ['Хит'],
    category: 'running',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'pulse-pro',
    name: 'AERO STEP PULSE PRO',
    slug: 'aero-step-pulse-pro',
    price: 14990,
    images: [productPulse],
    rating: 4.8,
    reviewCount: 168,
    sizes: ['37', '46'],
    badges: ['Новинка'],
    category: 'running',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'aero-lift',
    name: 'AERO STEP LIFT 2',
    slug: 'aero-step-lift-2',
    price: 11990,
    originalPrice: 13990,
    discountPercent: 14,
    images: [productAero],
    rating: 4.7,
    reviewCount: 96,
    sizes: ['38', '45'],
    category: 'basketball',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'court-one',
    name: 'AERO STEP COURT ONE',
    slug: 'aero-step-court-one',
    price: 10990,
    images: [productCourt],
    rating: 4.6,
    reviewCount: 142,
    sizes: ['36', '44'],
    category: 'training',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'drift-daily',
    name: 'AERO STEP DRIFT',
    slug: 'aero-step-drift',
    price: 9990,
    images: [productDrift],
    rating: 4.8,
    reviewCount: 301,
    sizes: ['35', '45'],
    badges: ['Лайфстайл'],
    category: 'lifestyle',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'nova-x',
    name: 'AERO STEP NOVA X',
    slug: 'aero-step-nova-x',
    price: 13990,
    originalPrice: 16990,
    discountPercent: 18,
    images: [productNova],
    rating: 4.7,
    reviewCount: 88,
    sizes: ['36', '43'],
    category: 'lifestyle',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'stride-elite',
    name: 'AERO STEP STRIDE ELITE',
    slug: 'aero-step-stride-elite',
    price: 15990,
    images: [productStride],
    rating: 4.9,
    reviewCount: 76,
    sizes: ['38', '46'],
    badges: ['Новинка'],
    category: 'running',
    brand: 'AERO STEP',
    inStock: true,
  },
  {
    id: 'flux-studio',
    name: 'AERO STEP FLUX STUDIO',
    slug: 'aero-step-flux-studio',
    price: 11490,
    images: [productFlux],
    rating: 4.5,
    reviewCount: 54,
    sizes: ['36', '44'],
    category: 'training',
    brand: 'AERO STEP',
    inStock: true,
  },
]

export const lifestyleCategories: Category[] = [
  {
    id: 'running',
    name: 'Бег',
    slug: 'running',
    image: categoryRun,
    description: 'Лёгкий ход и мягкая амортизация для городских дистанций.',
  },
  {
    id: 'basketball',
    name: 'Баскетбол',
    slug: 'basketball',
    image: categoryBasketball,
    description: 'Стабильность на площадке и уверенный отрыв в прыжке.',
  },
  {
    id: 'training',
    name: 'Тренинг',
    slug: 'training',
    image: categoryTraining,
    description: 'Универсальная посадка для зала, улицы и смешанных тренировок.',
  },
  {
    id: 'lifestyle',
    name: 'Лайфстайл',
    slug: 'lifestyle',
    image: categoryLifestyle,
    description: 'Сдержанный силуэт, который работает с любым ритмом дня.',
  },
]

export const technologyFeatures: TechnologyFeature[] = [
  {
    id: 'cushion',
    title: 'Амортизация',
    description: 'Мягкий отклик на каждом шаге без потери контроля.',
    icon: 'cushion',
  },
  {
    id: 'light',
    title: 'Лёгкость',
    description: 'Облегчённый верх, который почти не чувствуется на ноге.',
    icon: 'light',
  },
  {
    id: 'grip',
    title: 'Сцепление',
    description: 'Надёжный контакт с асфальтом, залом и городским рельефом.',
    icon: 'grip',
  },
  {
    id: 'breath',
    title: 'Дышащие материалы',
    description: 'Свободная циркуляция воздуха в течение всего дня.',
    icon: 'breath',
  },
  {
    id: 'support',
    title: 'Поддержка стопы',
    description: 'Стабильная посадка, которая держит стопу в движении.',
    icon: 'support',
  },
  {
    id: 'eco',
    title: 'Экологичные материалы',
    description: 'Переработанные компоненты без компромисса в комфорте.',
    icon: 'eco',
  },
]

export const clubBenefits = [
  'Специальные предложения для участников',
  'Ранний доступ к новинкам сезона',
  'Персональные рекомендации по посадке',
  'Бонусы за покупки и приглашения друзей',
]

export const trustItems: TrustItem[] = [
  {
    id: 'delivery',
    title: 'Бесплатная доставка',
    description: 'От 7 000 ₽ по всей стране',
    icon: 'delivery',
  },
  {
    id: 'return',
    title: '14 дней на возврат',
    description: 'Если пара не подошла',
    icon: 'return',
  },
  {
    id: 'original',
    title: 'Оригинальная продукция',
    description: 'Прямые поставки AERO STEP',
    icon: 'original',
  },
  {
    id: 'support',
    title: 'Поддержка 24/7',
    description: 'Помощь с размером и заказом',
    icon: 'support',
  },
]

export function filterProducts(
  items: Product[],
  query: string,
  categoryId: string,
): Product[] {
  const normalized = query.trim().toLowerCase()
  return items.filter((product) => {
    const matchesCategory = categoryId === 'all' || product.category === categoryId
    const matchesQuery =
      normalized.length === 0 ||
      product.name.toLowerCase().includes(normalized) ||
      product.brand.toLowerCase().includes(normalized)
    return matchesCategory && matchesQuery
  })
}
