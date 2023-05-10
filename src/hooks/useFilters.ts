import { useContext } from 'react'
import { IProduct } from '../types/product.type'
import { FiltersContext } from '../context/filtersContext'
import { IFilterContext } from '../types/filter.type'

export function useFilters() {

  const{filters,updateFilters} = useContext(FiltersContext) as IFilterContext

  const filterProducts = (products: IProduct[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          product.category === filters.category
        ))

    })
  }

  return{ filters,filterProducts,updateFilters}

}
