import { SearchIcon } from '../icons/Icons'

export function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="search-bar">
      <SearchIcon />
      <span className="sr-only">Поиск по каталогу</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Найти модель, например Flow"
        autoComplete="off"
      />
    </label>
  )
}
