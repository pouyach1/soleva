import type { Category } from '../../types/catalog'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="category-card">
      <img src={category.image} alt="" />
      <div className="category-copy">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <a href={`/catalog?category=${category.slug}`}>Смотреть →</a>
      </div>
    </article>
  )
}
