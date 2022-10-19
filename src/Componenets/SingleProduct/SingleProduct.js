import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductContext } from '../Conterxt/ProductContext';
import PageNavigation from '../Shared/PageNavigation';
import Spinner from './../Shared/Spinner';
import SingleProductImg from '../SingleProductImg/SingleProductImg';
import FormatPrice from './../Helpers/FormatPrice';
import { BsBicycle } from 'react-icons/bs';
import { BiRecycle } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FcApproval } from 'react-icons/fc';



const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const{getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
    const {id} = useParams();
    const {id:abir, name,company,price,description,catagory,stock,stars, reviews } = singleProduct;
    useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`)
    },[])

    if(isSingleLoading){
          return <Spinner></Spinner>
    }
    return (
        <div>
            <PageNavigation title={name}></PageNavigation>
            <div className="flex justify-around">
                <div className="">
                 <SingleProductImg></SingleProductImg>
                </div>
                <div className="">
                    <h1 className='text-2xl '>{name}</h1>
                    <p className='my-1'>{stars}</p>
                    <p>{reviews}</p>
                    
                    <small>
                    <del>
                    {<FormatPrice price={price+250000}></FormatPrice>}
                    </del>
                    </small>
                    <p className='font-bold text-purple-700 mb-4'>Deal of the day: {<FormatPrice price={price}></FormatPrice>}</p>
                    <p className='w-96'><small>{description}</small></p>
                    <div className="flex gap-8 my-4">
                       <div className="">
                       <p className='text-4xl flex justify-center text-slate-500'><BsBicycle/></p>
                       <h1 className='font-bold'><small>Free Delivery</small></h1>
                       </div>
                       <div className="">
                       <p className='text-4xl flex justify-center text-slate-500'>  <BiRecycle/></p>
                       <h1 className='font-bold'><small>1d Replacement</small></h1>
                       </div>
                       <div className="">
                       <p className='text-4xl flex justify-center text-slate-500'> < AiOutlineFundProjectionScreen/></p>
                       <h1 className='font-bold'><small>Unlimited Review</small></h1>
                       </div>
                       <div className="">
                       <p className='text-4xl flex justify-center'> <FcApproval/></p>
                       <h1 className='font-bold'><small>2 yeas Warranty</small></h1>
                       </div>
                    </div>
                    <div class="divider"></div> 
                    <p><small className='font-bold'> available : { stock > 0 ?"in stock" : "Not Available"   } </small></p>
                    <p><small  className='font-bold'>Brand : {company}</small></p>
                    <div class="divider"></div> 


                 
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;