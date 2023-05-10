import { useContext, useId } from 'react'
import { FiltersContext } from '../context/filtersContext'
import { IFilterContext } from '../types/filter.type'
import "./filters.css"

export default function Filters() {
  const { filters, updateFilters } = useContext(FiltersContext) as IFilterContext
  const inputRangeId = useId()
  const selectCategoryId = useId()

  function handleChangeMinPrice(event: React.ChangeEvent<HTMLInputElement>) {
    updateFilters({
      ...filters,
      minPrice: Number(event.target.value)
    })
  }

  function handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    updateFilters({
      ...filters,
      category: event.target.value
    })
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={inputRangeId}>Precio minimo</label>
        <input type="range" min={0} max={1000} value={filters.minPrice} onChange={handleChangeMinPrice} id={inputRangeId} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={selectCategoryId}>Categoria</label>
        <select id={selectCategoryId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
