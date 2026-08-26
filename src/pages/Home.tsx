import { useMemo, useState } from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/home/Hero'
import { SearchBar } from '../components/home/SearchBar'
import { CategoryChips } from '../components/home/CategoryChips'
import { Bestsellers } from '../components/home/Bestsellers'
import { LifestyleCategories } from '../components/home/LifestyleCategories'
import { TechnologySection } from '../components/home/TechnologySection'
import { ClubSection } from '../components/home/ClubSection'
import { TrustBar } from '../components/home/TrustBar'
import { Container } from '../components/ui/Container'
import { filterProducts, products } from '../data/mockData'

export function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const visibleProducts = useMemo(() => {
    const filtered = filterProducts(products, query, category)
    const isDefaultView = query.trim() === '' && category === 'all'
    return isDefaultView ? filtered.slice(0, 5) : filtered
  }, [query, category])

  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Container>
          <section className="search-section" aria-label="Поиск моделей">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryChips selected={category} onSelect={setCategory} />
          </section>
          <Bestsellers products={visibleProducts} />
          <LifestyleCategories />
          <TechnologySection />
          <ClubSection />
          <TrustBar />
        </Container>
      </main>
      <Footer />
    </>
  )
}
