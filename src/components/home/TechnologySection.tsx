import type { ComponentType, SVGProps } from 'react'
import { technologyFeatures } from '../../data/mockData'
import {
  BreathIcon,
  CushionIcon,
  FeatherIcon,
  GripIcon,
  LeafIcon,
  SupportIcon,
} from '../icons/Icons'
import type { TechnologyFeature } from '../../types/catalog'

const icons: Record<TechnologyFeature['icon'], ComponentType<SVGProps<SVGSVGElement>>> = {
  cushion: CushionIcon,
  light: FeatherIcon,
  grip: GripIcon,
  breath: BreathIcon,
  support: SupportIcon,
  eco: LeafIcon,
}

export function TechnologySection() {
  return (
    <section className="section" id="tech" aria-labelledby="tech-title">
      <div className="section-heading">
        <h2 id="tech-title">Технологии для твоего движения</h2>
      </div>
      <ul className="tech-grid">
        {technologyFeatures.map((feature) => {
          const Icon = icons[feature.icon]
          return (
            <li key={feature.id} className="tech-card">
              <span className="tech-icon">
                <Icon />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
