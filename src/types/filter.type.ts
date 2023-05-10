export interface IFilter{
  category:string,
  minPrice:number
}

export interface IFilterContext{
  filters:IFilter,
  updateFilters:(filters : IFilter)=>(void)
}