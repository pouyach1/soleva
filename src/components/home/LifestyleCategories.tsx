import { lifestyleCategories } from '../../data/mockData'
import { CategoryCard } from './CategoryCard'

export function LifestyleCategories() {
  return (
    <section className="section" aria-labelledby="lifestyle-title">
      <div className="section-heading">
        <h2 id="lifestyle-title">Подборки для движения</h2>
      </div>
      <div className="lifestyle-grid">
        {lifestyleCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
