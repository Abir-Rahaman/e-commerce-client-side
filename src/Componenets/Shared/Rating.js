import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({star,review}) => {
    const ratingStar = Array.from({ length :5} , (elem,index) =>{
        let number = index+0.5;
        return (
            <span key={index}>
                {
                  star >= index+1 ? (<AiFillStar className='text-yellow-400'/>) : star>= number ? (<FaStarHalfAlt className='text-yellow-400'/>) : (<AiOutlineStar className='text-yellow-400'/>)
                }

            </span>
        );
    })

    return(
        <>
          <p className='font-bold flex items-center my-1'> {ratingStar} <small>({review}) customer reviews.</small>  </p>
        </>
    )
    
};

export default Rating;