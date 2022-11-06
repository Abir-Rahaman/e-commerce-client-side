import React from "react";
import { BsGridFill } from "react-icons/bs";
import { TbColumns } from "react-icons/tb";
import { useFilterContext } from "../Conterxt/FilterContext";

const Sort = () => {
    const {sorting,setGridView,setListView,filter_Products} = useFilterContext();
  return (
    <div className="flex justify-around mt-10">
      <div className=" cursor-pointer flex gap-3 items-center justify-center " >
       <button onClick={setGridView}> <BsGridFill /></button>
       <button onClick={setListView}>  <TbColumns className="text-xl"/></button>

       
      </div>
      <div className="">
        <h1 className="text-center text  font-bold ">{filter_Products.length} Product Available </h1>
      </div>
      <div className="">
        <select onClick={sorting} name="sort" id="sort" class="select select-bordered select-sm w-full max-w-xs">
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
         
        </select>
      </div>
    </div>
  );
};

export default Sort;
