import type { ComponentType, SVGProps } from 'react'
import { trustItems } from '../../data/mockData'
import { HeadsetIcon, ReturnIcon, ShieldIcon, TruckIcon } from '../icons/Icons'
import type { TrustItem } from '../../types/catalog'

const icons: Record<TrustItem['icon'], ComponentType<SVGProps<SVGSVGElement>>> = {
  delivery: TruckIcon,
  return: ReturnIcon,
  original: ShieldIcon,
  support: HeadsetIcon,
}

export function TrustBar() {
  return (
    <section className="section trust-section" id="delivery" aria-label="Преимущества магазина">
      <ul className="trust-grid">
        {trustItems.map((item) => {
          const Icon = icons[item.icon]
          return (
            <li key={item.id} className="trust-item">
              <Icon />
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
