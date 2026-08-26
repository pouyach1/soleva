import { chipCategories } from '../../data/mockData'

export function CategoryChips({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="chip-row" role="tablist" aria-label="Категории">
      {chipCategories.map((chip) => (
        <button
          key={chip.id}
          type="button"
          role="tab"
          aria-selected={selected === chip.id}
          className={`chip ${selected === chip.id ? 'is-active' : ''}`}
          onClick={() => onSelect(chip.id)}
        >
          {chip.name}
        </button>
      ))}
    </div>
  )
}
