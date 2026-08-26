export function formatPrice(value: number): string {
  return `${value.toLocaleString('ru-RU')} ₽`
}

export function formatRating(value: number): string {
  return value.toFixed(1).replace('.', ',')
}
