import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  children: ReactNode
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
