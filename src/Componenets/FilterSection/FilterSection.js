import React from "react";
import { useFilterContext } from "../Conterxt/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, category },
    updateFilterValue,
    all_Products,
  } = useFilterContext();
  const getUniqueData = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  const categoryOnlyData = getUniqueData(all_Products, "category");
  const companyOnlyData = getUniqueData(all_Products, "company");
  console.log(companyOnlyData);
  return (
    <div className="my-8 ml-12">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search Products"
          class="input input-bordered input-accent w-56 h-10 max-w-xs"
        />
      </form>
      <div className="mt-16 w-56 text-center card card-compact bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl">
        <h1 className="mt-4">Categories</h1>
        <div className="flex-row">
          {categoryOnlyData?.map((curElem, index) => {
            return (
              <div className="my-6">
                <button
                  key={index}
                  name="category"
                  type="button"
                  onClick={updateFilterValue}
                  value={curElem}
                  class=" btn-sm btn btn-outline btn-success "
                >
                  {curElem}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="mt-4 w-56 text-center h-64 card card-compact bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl">
        <h1 className="mt-4">Company</h1>
        <div className="">
          <form action="#">
            <select onClick={updateFilterValue} name="company" id="company" class="select select-bordered select-sm max-w-xs">
            
                {companyOnlyData.map((curElem,index) =>{
                    return <option value={curElem} key={index} name="company" type="button">{curElem}</option>
                })}
       
            
            </select>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default FilterSection;
