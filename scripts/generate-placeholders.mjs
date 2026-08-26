import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = join(dirname(fileURLToPath(import.meta.url)), '../src/assets/placeholders')
mkdirSync(dir, { recursive: true })

function sneaker({ bg, mid, accent, sole, laces, shadow }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 720" role="img">
  <rect width="640" height="720" fill="${bg}"/>
  <ellipse cx="330" cy="560" rx="210" ry="28" fill="${shadow}" opacity="0.45"/>
  <path d="M118 430c18-86 92-154 214-168 86-10 168 18 214 70 22 24 48 78 36 118-8 28-36 46-78 54H168c-42-4-64-28-50-74z" fill="${mid}"/>
  <path d="M146 448c14-62 74-118 176-128 78-8 150 20 186 64 14 18 28 52 20 78-6 18-24 28-54 32H188c-32-2-50-18-42-46z" fill="#fff"/>
  <path d="M198 392c36-8 92-12 142 6 28 10 48 18 48 18" fill="none" stroke="${laces}" stroke-width="6" stroke-linecap="round"/>
  <path d="M210 418c34-6 86-8 132 8" fill="none" stroke="${laces}" stroke-width="6" stroke-linecap="round"/>
  <path d="M222 442c30-4 74-4 114 8" fill="none" stroke="${laces}" stroke-width="6" stroke-linecap="round"/>
  <path d="M168 456c58-38 126-42 198-8 42 20 86 18 118-8" fill="none" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>
  <path d="M120 458c-10 22 6 40 48 46h348c46-4 62-22 54-42-18 18-70 28-150 22-96-8-188-4-300-26z" fill="${sole}"/>
  <path d="M132 492h360c18 0 22 10 12 16H148c-18 0-24-8-16-16z" fill="#2a2a2a"/>
  <circle cx="168" cy="404" r="10" fill="${accent}"/>
</svg>`
}

const products = [
  ['product-vortex.svg', { bg: '#EFE8DC', mid: '#D9D0C2', accent: '#C45C26', sole: '#E8E2D8', laces: '#B9B0A4', shadow: '#C9BFB0' }],
  ['product-pulse.svg', { bg: '#E7EEE8', mid: '#C5D4C8', accent: '#2F6B4F', sole: '#DCE6DE', laces: '#8AA090', shadow: '#B7C4B8' }],
  ['product-aero.svg', { bg: '#E8EEF3', mid: '#C7D4E0', accent: '#3D5A80', sole: '#D7E1EA', laces: '#8A9AAB', shadow: '#B4C2CF' }],
  ['product-court.svg', { bg: '#F3E6DC', mid: '#E0C8B4', accent: '#8C3B2A', sole: '#EBD8C8', laces: '#C4A892', shadow: '#D2B8A3' }],
  ['product-drift.svg', { bg: '#EFEAE3', mid: '#D4CCC2', accent: '#1C1C1C', sole: '#E6E0D8', laces: '#A8A09A', shadow: '#C6BEB4' }],
  ['product-nova.svg', { bg: '#F1E7EF', mid: '#DCC6D6', accent: '#7A3E6A', sole: '#EADDE6', laces: '#B99AB0', shadow: '#D0B8C8' }],
  ['product-stride.svg', { bg: '#E9EFE6', mid: '#C9D7BE', accent: '#6B7A32', sole: '#DCE6D4', laces: '#96A484', shadow: '#B8C6AC' }],
  ['product-flux.svg', { bg: '#EDE8E2', mid: '#D2C4B6', accent: '#B08948', sole: '#E6DCD0', laces: '#B8A894', shadow: '#C8B8A6' }],
]

for (const [name, palette] of products) {
  writeFileSync(join(dir, name), sneaker(palette))
}

function category({ bg, shape, accent }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
  </defs>
  <rect width="960" height="720" fill="url(#g)"/>
  <circle cx="760" cy="140" r="180" fill="#fff" opacity="0.12"/>
  <circle cx="120" cy="600" r="160" fill="#1a1a1a" opacity="0.08"/>
  ${shape}
</svg>`
}

const categories = [
  ['category-run.svg', {
    bg: '#D8C4A8',
    accent: '#B08968',
    shape: `<path d="M180 470c40-90 120-150 230-150 40 0 70 18 90 18 30-50 90-80 150-70 70 12 110 70 110 130 0 90-70 170-190 190-110 18-250-20-390-118z" fill="#f7f4ef" opacity=".88"/><ellipse cx="430" cy="560" rx="220" ry="22" fill="#1a1a1a" opacity=".12"/>`,
  }],
  ['category-basketball.svg', {
    bg: '#C9B29A',
    accent: '#8C5A3C',
    shape: `<circle cx="620" cy="320" r="150" fill="#f7f4ef" opacity=".9"/><path d="M470 320h300M620 170v300M510 210c70 50 150 50 220 0M510 430c70-50 150-50 220 0" fill="none" stroke="#c45c26" stroke-width="10"/>`,
  }],
  ['category-training.svg', {
    bg: '#C7C0B4',
    accent: '#8E877C',
    shape: `<rect x="220" y="220" width="520" height="280" rx="140" fill="#f7f4ef" opacity=".86"/><path d="M300 360h360M480 260v200" stroke="#1c1c1c" stroke-width="16" stroke-linecap="round" opacity=".55"/>`,
  }],
  ['category-lifestyle.svg', {
    bg: '#DDD0C0',
    accent: '#A89078',
    shape: `<path d="M200 500V280c0-40 32-72 72-72h416c40 0 72 32 72 72v220" fill="none" stroke="#f7f4ef" stroke-width="28" opacity=".9"/><rect x="280" y="360" width="400" height="160" rx="24" fill="#f7f4ef" opacity=".7"/>`,
  }],
]

for (const [name, cfg] of categories) {
  writeFileSync(join(dir, name), category(cfg))
}

writeFileSync(
  join(dir, 'hero-lifestyle.svg'),
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 980" role="img">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E7DCCB"/>
      <stop offset="1" stop-color="#F4EFE7"/>
    </linearGradient>
  </defs>
  <rect width="900" height="980" fill="url(#sky)"/>
  <rect x="70" y="90" width="760" height="800" rx="48" fill="#F7F4EF"/>
  <rect x="110" y="140" width="420" height="620" rx="36" fill="#E4D5C2"/>
  <rect x="470" y="220" width="280" height="540" rx="36" fill="#D9C6B0"/>
  <circle cx="720" cy="180" r="70" fill="#F3E6C8" opacity=".9"/>
  <ellipse cx="470" cy="780" rx="230" ry="28" fill="#C9B8A4" opacity=".45"/>
  <path d="M390 250c20-40 70-54 110-30 18 10 28 18 46 16 34-4 58 24 54 56l-18 170c-4 34-18 48-48 54l-8 140c-2 28-18 46-46 48-36 4-58-18-62-52l-16-136c-28-8-46-28-50-58l-18-168c-4-22 8-46 56-40z" fill="#2A2A2A"/>
  <path d="M430 250c8-28 40-40 66-22 14 10 22 12 36 10 22-2 38 16 34 38l-14 132c-20 8-46 6-70-10l-52-148z" fill="#F2EDE6"/>
  <path d="M348 720c18-22 48-28 78-16 22-30 64-34 96-10 18 14 40 16 58 4 22-14 50-8 62 16 10 20 4 44-18 56-36 20-92 18-150 8-70-12-126-8-154-18-22-8-28-24-28-40 0-8 2-16 12-22z" fill="#F7F4EF"/>
  <path d="M520 742c22-8 48-4 64 12 8 8 22 10 30 2 12-10 30-6 36 8 6 14-2 28-18 34-28 12-70 8-112-2-20-4-28-14-22-28 4-10 12-20 22-26z" fill="#fff"/>
  <path d="M368 736c16-10 40-12 58 2 10 8 24 8 32-2 12-12 32-10 40 6 6 14-2 28-18 34-30 12-78 10-122 0-18-4-22-16-14-28 6-8 14-10 24-12z" fill="#fff"/>
</svg>`,
)

function avatar(bg, hair) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <circle cx="40" cy="40" r="40" fill="${bg}"/>
  <circle cx="40" cy="36" r="14" fill="#F3E6D8"/>
  <ellipse cx="40" cy="70" rx="20" ry="16" fill="#F3E6D8"/>
  <path d="M24 34c4-14 28-16 32-2 2 8-4 12-10 10-8-10-22-8-22-8z" fill="${hair}"/>
</svg>`
}

writeFileSync(join(dir, 'avatar-1.svg'), avatar('#D9C7B0', '#3A2A22'))
writeFileSync(join(dir, 'avatar-2.svg'), avatar('#C9D2C4', '#1C1C1C'))
writeFileSync(join(dir, 'avatar-3.svg'), avatar('#D7C8C0', '#6B3A2A'))

console.log('placeholders written')
