import { createContext, useReducer } from 'react';
import { useContext } from 'react';
import { useProductContext } from './ProductContext';
import { useEffect } from 'react';
import reducer from "../Reducer/FilterReducer"

const FilterContext = createContext();
const initialState = {
      filter_Products:[],
      all_products:[],
      grid_view:true,
      sorting_value:"lowest",
      filters:{
        text:"",
        category:"All",
        company:"All",
      }

      

}

export const FilterContextProvider =({children}) =>{

    const {products} = useProductContext();
    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS" , payload:products})
    },[products])
 
    const [state,dispatch] = useReducer(reducer,initialState);
    const setGridView = () =>{
        return dispatch({type:"SET_GRID_VIEW",})
    }
    const setListView = () =>{
        return dispatch({type:"SET_LIST_VIEW",})
    }
    const sorting = (event) =>{
        let userValue = event.target.value;
          dispatch({type:"GET_SORT_VALUE",payload:userValue});
    }
    const updateFilterValue = (event) =>{
        let name =event.target.name;
        let value = event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE" , payload:{name,value}});
    }
    useEffect(()=>{
         dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    },[products,state.sorting_value,state.filters])

  
    return(
        <FilterContext.Provider value={{...state ,setGridView,sorting,setListView,updateFilterValue}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{ 
    return useContext(FilterContext)
}

