import { useMemo, useState, type ReactNode } from 'react'
import { ShopContext } from './shop-context'

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cartCount] = useState(2)
  const [wishlistIds, setWishlistIds] = useState<string[]>([])

  const value = useMemo(
    () => ({
      cartCount,
      wishlistIds,
      toggleWishlist: (productId: string) => {
        setWishlistIds((current) =>
          current.includes(productId)
            ? current.filter((id) => id !== productId)
            : [...current, productId],
        )
      },
    }),
    [cartCount, wishlistIds],
  )

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
