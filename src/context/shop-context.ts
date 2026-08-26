import { createContext } from 'react'

export type ShopContextValue = {
  cartCount: number
  wishlistIds: string[]
  toggleWishlist: (productId: string) => void
}

export const ShopContext = createContext<ShopContextValue | null>(null)
