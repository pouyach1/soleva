import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  return {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    ...props,
  }
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c1.4-3 4-4.6 6.5-4.6s5.1 1.6 6.5 4.6" />
    </svg>
  )
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 7h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 7Z" />
      <path d="M8 7a4 4 0 0 1 8 0" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16.2 16.2 20 20" />
    </svg>
  )
}

export function HeartIcon({ filled = false, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg {...base(props)} fill={filled ? 'currentColor' : 'none'}>
      <path d="M12 19s-7-4.4-7-9.1C5 7 6.8 5.4 9 5.4c1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6 2.2 0 4 1.6 4 4.5C19 14.6 12 19 12 19Z" />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base({ width: 14, height: 14, ...props })} fill="currentColor" stroke="none">
      <path d="M12 2.6 14.4 8l5.6.5-4.2 3.7 1.3 5.5L12 14.9 6.9 17.7l1.3-5.5L4 8.5 9.6 8 12 2.6Z" />
    </svg>
  )
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  )
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.4 7 8.5 4.2-1.1 7-4.3 7-8.5V6l-7-3Z" />
      <path d="M9 12.2 11 14l4-4.2" />
    </svg>
  )
}

export function ReturnIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12a8 8 0 1 0 2.3-5.7" />
      <path d="M4 5v5h5" />
    </svg>
  )
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="7" rx="1.5" />
      <rect x="17" y="13" width="4" height="7" rx="1.5" />
    </svg>
  )
}

export function CushionIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 14c2-5 14-5 16 0v3H4v-3Z" />
      <path d="M6 14.5c2-2.4 10-2.4 12 0" />
    </svg>
  )
}

export function FeatherIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 4c-7 1-13 8-14 16" />
      <path d="M14 6c-2 4-6 8-11 10" />
      <path d="M12 8l6 6" />
    </svg>
  )
}

export function GripIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 16c3-6 13-6 16 0" />
      <path d="M6 19c2.4-3.5 9.6-3.5 12 0" />
      <path d="M8 13c1.2-2 6.8-2 8 0" />
    </svg>
  )
}

export function BreathIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 18c-2.4-2-3-6 .4-8.8C11 6.4 12 4 12 4s1 2.4 3.6 5.2C18.9 12 18.4 16 16 18" />
      <path d="M9.5 13.5c.8 2 4.2 2 5 0" />
    </svg>
  )
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 20V10l5-6 5 6v10" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 19C7 8 16 4 20 4c0 6-4 14-15 15" />
      <path d="M9 15c2-2 5-5 8-7" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 17h2" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M4 8l8 6 8-6" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.6" cy="7.4" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 5 3.8 11.4c-1 .4-.9 1.8.2 2.1l4.2 1.2 1.6 5c.3.8 1.4.9 1.8.1L14 16l4.6 3.4c.8.6 1.9.1 2-0.8L21 6.2c.1-.8-.7-1.4-1.5-1.2Z" />
    </svg>
  )
}

export function VkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8c6 10 7.2 8.8 9 8.8 1.2 0 1.4-1 2.5-2.2C17 13 19 16 20.5 16H22s-3.2-5.6.2-8h-2.2c-1.6 2.8-2.4 4.4-3 4.4-.8 0-1-1.4-1-2.6V8h-2.2c0 4.6-.4 6.6-1.8 6.6C10.6 14.6 8 8 8 8H4Z" />
    </svg>
  )
}
