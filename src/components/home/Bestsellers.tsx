import type { Product } from '../../types/catalog'
import { ProductCard } from './ProductCard'

export function Bestsellers({ products }: { products: Product[] }) {
  return (
    <section className="section" aria-labelledby="bestsellers-title">
      <div className="section-heading">
        <h2 id="bestsellers-title">Хиты продаж</h2>
        <a className="text-link" href="/catalog">
          Смотреть все →
        </a>
      </div>
      {products.length === 0 ? (
        <p className="empty-state">Ничего не нашли. Попробуйте другой запрос или категорию.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
