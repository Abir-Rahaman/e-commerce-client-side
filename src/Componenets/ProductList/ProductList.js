
import { useFilterContext } from "../Conterxt/FilterContext";
import GridView from './../GridView/GridView';
import ListView from './../ListView/ListView';



const ProductList = () => {
  const {filter_Products ,grid_view} = useFilterContext();

  if(grid_view === true){
     return <GridView products={filter_Products}></GridView>
  }
  if(grid_view === false){
     return <ListView products={filter_Products}></ListView>
  }
};
export default ProductList;
