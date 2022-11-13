const FilterReducer = (state, action) => {
  let { all_Products } = state;

  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action?.payload?.map((curElem) => curElem?.price);
      let maxPrice = Math?.max(...priceArr);


      return {
        ...state,
        all_Products: [...action.payload],
        filter_Products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      let tempFilterProduct = [...all_Products];

      const { text, category, company, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }
      if (company !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company === company;
        });
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price === price;
        });
      } else {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      return {
        ...state,
        filter_Products: tempFilterProduct,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      let { filter_Products } = state;

      let tempSortProduct = [...filter_Products];

      newSortData = tempSortProduct.sort((a, b) => {
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      });
      return {
        ...state,
        filter_Products: newSortData,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          colors: "All",
          maxPrice: "",
          minPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;
