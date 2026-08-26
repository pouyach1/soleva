import { Container } from '../ui/Container'
import { InstagramIcon, MailIcon, PhoneIcon, TelegramIcon, VkIcon } from '../icons/Icons'

const catalogLinks = [
  { label: 'Кроссовки', href: '/catalog' },
  { label: 'Бег', href: '/catalog?category=running' },
  { label: 'Баскетбол', href: '/catalog?category=basketball' },
  { label: 'Тренинг', href: '/catalog?category=training' },
  { label: 'Лайфстайл', href: '/catalog?category=lifestyle' },
]

const customerLinks = [
  { label: 'Доставка', href: '#delivery' },
  { label: 'Возврат', href: '/returns' },
  { label: 'Оплата', href: '/payment' },
  { label: 'Размеры', href: '/sizes' },
]

const companyLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Технологии', href: '#tech' },
  { label: 'Контакты', href: '#contacts' },
]

export function Footer() {
  return (
    <footer className="site-footer" id="about">
      <Container className="footer-grid">
        <div className="footer-brand">
          <p className="logo-mark">AERO STEP</p>
          <p>
            Кроссовки для ритма города: комфорт, технология и чистый силуэт на каждый день.
          </p>
        </div>

        <div>
          <h2>Каталог</h2>
          <ul>
            {catalogLinks.map((link) => (
              <li key={link.href + link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Покупателю</h2>
          <ul>
            {customerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Компания</h2>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div id="contacts">
          <h2>Контакты</h2>
          <a className="footer-contact" href="tel:+74951234567">
            <PhoneIcon />
            +7 495 123-45-67
          </a>
          <a className="footer-contact" href="mailto:hello@aerostep.ru">
            <MailIcon />
            hello@aerostep.ru
          </a>
          <div className="footer-social">
            <a href="https://t.me" aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://vk.com" aria-label="VK">
              <VkIcon />
            </a>
          </div>
        </div>
      </Container>
      <Container className="footer-bottom">
        <p>© {new Date().getFullYear()} AERO STEP. Все права защищены.</p>
      </Container>
    </footer>
  )
}
