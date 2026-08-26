import type { Product } from '../../types/catalog'
import { formatPrice, formatRating } from '../../lib/format'
import { HeartIcon, StarIcon } from '../icons/Icons'
import { useShop } from '../../hooks/useShop'

export function ProductCard({ product }: { product: Product }) {
  const { wishlistIds, toggleWishlist } = useShop()
  const wished = wishlistIds.includes(product.id)
  const [from, to] = product.sizes
  const image = product.images[0]

  return (
    <article className="product-card">
      <div className="product-media">
        <a href={`/product/${product.slug}`}>
          <img src={image} alt={product.name} />
        </a>
        {product.badges?.[0] ? <span className="product-badge">{product.badges[0]}</span> : null}
        {product.discountPercent ? (
          <span className="product-discount">−{product.discountPercent}%</span>
        ) : null}
        <button
          type="button"
          className={`wishlist-btn ${wished ? 'is-active' : ''}`}
          aria-pressed={wished}
          aria-label={wished ? `Убрать ${product.name} из избранного` : `Добавить ${product.name} в избранное`}
          onClick={() => toggleWishlist(product.id)}
        >
          <HeartIcon filled={wished} />
        </button>
      </div>
      <div className="product-body">
        <h3>
          <a href={`/product/${product.slug}`}>{product.name}</a>
        </h3>
        <div className="product-price">
          <span>{formatPrice(product.price)}</span>
          {product.originalPrice ? (
            <s>{formatPrice(product.originalPrice)}</s>
          ) : null}
        </div>
        <p className="product-rating">
          <StarIcon />
          <span>{formatRating(product.rating)}</span>
          <span className="muted">({product.reviewCount})</span>
        </p>
        <p className="product-sizes">
          Размеры {from}–{to}
        </p>
      </div>
    </article>
  )
}
