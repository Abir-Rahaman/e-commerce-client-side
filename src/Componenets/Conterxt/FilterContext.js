import { createContext, useReducer } from 'react';
import { useContext } from 'react';
import { useProductContext } from './ProductContext';
import { useEffect } from 'react';
import reducer from "../Reducer/FilterReducer"

const FilterContext = createContext();
const initialState = {
      filter_Products:[],
      all_products:[],
      grid_view:false,
      sorting_value:"lowest",
      

}
export const FilterContextProvider =({children}) =>{

    const {products} = useProductContext();
    const [state,dispatch] = useReducer(reducer,initialState);
    const setGridView = () =>{
        return dispatch({type:"SET_GRID_VIEW",})
    }
    const setListView = () =>{
        return dispatch({type:"SET_LIST_VIEW",})
    }
    const sorting = () =>{
          dispatch({type:"GET_SORT_VALUE"});
    }
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS" , payload:products})
    },[products,state.sorting_value])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS" , payload:products})
    },[products])
    return(
        <FilterContext.Provider value={{...state ,setGridView,sorting,setListView}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{ 
    return useContext(FilterContext)
}

