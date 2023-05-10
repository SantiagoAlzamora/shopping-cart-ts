import { createContext, useState } from 'react'
import { IFilter, IFilterContext } from '../types/filter.type';

export const FiltersContext = createContext<IFilterContext | null>(null);

export function FiltersProvider({ children }: { children: JSX.Element }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250
  })

  function updateFilters(newFilters: IFilter) {
    setFilters(newFilters)
  }

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}