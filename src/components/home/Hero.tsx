import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ShieldIcon, SparkIcon, TruckIcon } from '../icons/Icons'
import { heroImage, socialAvatars } from '../../data/mockData'

const floatCards = [
  { icon: TruckIcon, title: 'Бесплатная доставка', text: 'от 7 000 ₽' },
  { icon: SparkIcon, title: 'Премьера коллекции', text: 'весна 2026' },
  { icon: ShieldIcon, title: 'Оригинальная продукция', text: 'официальный магазин' },
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AERO STEP · 2026</p>
          <h1 id="hero-title">
            КРОССОВКИ ДЛЯ РИТМА,
            <br />
            КОМФОРТА И ДВИЖЕНИЯ
            <br />
            ПО ГОРОДУ
          </h1>
          <p className="hero-lead">
            Лёгкая посадка, городская амортизация и сдержанный силуэт — для тех, кто выбирает
            комфорт и стиль в одном шаге.
          </p>
          <div className="hero-actions">
            <Button href="/catalog">Смотреть каталог</Button>
            <Button href="/new" variant="secondary">
              Новинки
            </Button>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true">
              {socialAvatars.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
            <div>
              <strong>10 000+ клиентов</strong>
              <p>4,9 средняя оценка коллекции</p>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <img
            src={heroImage}
            alt="Модель в белых кроссовках AERO STEP в прыжке на фоне мягкой архитектуры"
          />
          <ul className="float-cards">
            {floatCards.map((card, index) => (
              <li key={card.title} className={`float-card float-card-${index + 1}`}>
                <card.icon />
                <div>
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
