import { useEffect, useId, useState } from 'react'
import { Container } from '../ui/Container'
import { CartIcon, CloseIcon, MenuIcon, UserIcon } from '../icons/Icons'
import { navItems } from '../../data/mockData'
import { useShop } from '../../hooks/useShop'

export function Header() {
  const { cartCount } = useShop()
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <Container className="header-inner">
        <a className="logo" href="/">
          <span className="logo-mark">AERO STEP</span>
          <span className="logo-tag">MOVE AHEAD</span>
        </a>

        <nav className="header-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-account" href="/account">
            <UserIcon />
            <span>Войти</span>
          </a>
          <a className="header-cart" href="/cart" aria-label={`Корзина, ${cartCount} товара`}>
            <CartIcon />
            <span>Корзина {cartCount}</span>
            <span className="cart-badge">{cartCount}</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <div
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        id={menuId}
        hidden={!open}
      >
        <nav aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/account" onClick={() => setOpen(false)}>
            Войти в аккаунт
          </a>
        </nav>
      </div>
    </header>
  )
}
