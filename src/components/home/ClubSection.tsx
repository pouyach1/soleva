import { clubBenefits } from '../../data/mockData'
import { Button } from '../ui/Button'

export function ClubSection() {
  return (
    <section className="section" aria-labelledby="club-title">
      <div className="club-panel">
        <div className="membership-card" aria-hidden="true">
          <div className="membership-card-inner">
            <span>AERO STEP CLUB</span>
            <strong>MOVE AHEAD</strong>
            <em>MEMBER 001</em>
          </div>
        </div>
        <div className="club-copy">
          <h2 id="club-title">Присоединяйся к AERO STEP CLUB</h2>
          <p>
            Закрытые дропы, ранний доступ к новинкам и рекомендации, которые учитывают твой ритм
            города.
          </p>
          <ul className="club-benefits">
            {clubBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <Button href="/club">Вступить в клуб</Button>
        </div>
      </div>
    </section>
  )
}
