import React, { useState } from "react";

const SingleProductImg = ({ imgs = [{ url: "" }] }) => {
    const [img,setImage] = useState(imgs[0]);

  return (
    <>
    <div className="flex">
        <div class=" flex w-32 bg-base-100 ">
      <figure>
      {
                imgs.map((img,index) => {
                    return(
                        <p className="my-5 cursor-pointer">
                            <img 
                            src={img.url} 
                            alt={img.filename} 
                            key={index}
                            onClick={()=>setImage(img)}/>
                            
                        </p>
                    )
                })
            }
      </figure>
      </div>
      <div className="grid items-center">
        <img className="w-72 ml-8" src={img.url} alt="" />

      </div>
      
   
    </div>
   
    </>
  );
};

export default SingleProductImg;
