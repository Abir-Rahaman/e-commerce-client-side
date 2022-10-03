import React from "react";
import slide1 from '../../images/slide2_prev_ui.png'
import slide2 from '../../images/slide3_prev_ui (2).png'
import slide3 from '../../images/slide4_prev_ui (3).png'
import { Swiper, SwiperSlide } from "swiper/react";
import './HeroSection.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

const HeroSection = () => {
  return (
    <div  className="">
      <Swiper  navigation={true} navigationStyle='green'
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
       
      >
       <div className="">
       <SwiperSlide className="">
          <div class="hero bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 h-8"  >
            <div class="hero-content flex-col lg:flex-row-reverse ">
            <img  className="lg:mr-0 mr-44" src={slide1} alt="" />
              <div> 
                <h1 class="lg:text-4xl text-xl font-bold p-6 rounded-tr-full rounded-bl-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get Your Own Place</h1>
                <p class="py-6 text-black font-bold">
                Enjoy powerful ecommerce features—including inventory management, payment collection, and unlimited product options
                </p>
                <button type="button" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:duration-500 px-8 py-2 text-white font-bold hover:rounded-3xl">Shop Now</button>
                <button type="button" class="border-double border-4 border-sky-500 hover:duration-500 px-8 py-2 ml-8 text-slate-500 font-bold hover:rounded-3xl">All Products</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
       <SwiperSlide className="">
          <div class="hero bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 h-8"  >
            <div class="hero-content flex-col lg:flex-row-reverse ">
            <img className="lg:mr-0 mr-32" src={slide2} alt="" />
              <div> 
                <h1 class="lg:text-4xl text-sm font-bold px-12 py-4 rounded-tr-full rounded-bl-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Your Product Knock into Your Door within 45min</h1>
                <p class="py-6 text-black font-bold">
                Enjoy powerful ecommerce features—including inventory management, payment collection, and unlimited product options
                </p>
                <button type="button" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:duration-500 px-8 py-2 text-white font-bold hover:rounded-3xl">Shop Now</button>
                <button type="button" class="border-double border-4 border-sky-500 hover:duration-500 px-8 py-2 ml-8 text-slate-500 font-bold hover:rounded-3xl">All Products</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
       <SwiperSlide className="">
          <div class="hero bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 h-8"  >
            <div class="hero-content flex-col lg:flex-row-reverse ">
            <img className="lg:mr-0 mr-36" src={slide3} alt="" />
              <div> 
                <h1 class="lg:text-4xl text-sm font-bold p-6 rounded-tr-full rounded-bl-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">No Delivery Charge In Campus area</h1>
                <p class="py-6 text-black font-bold">
                Enjoy powerful ecommerce features—including inventory management, payment collection, and unlimited product options
                </p>
                <button type="button" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:duration-500 px-8 py-2 text-white font-bold hover:rounded-3xl">Shop Now</button>
                <button type="button" class="border-double border-4 border-sky-500 hover:duration-500 px-8 py-2 ml-8 text-slate-500 font-bold hover:rounded-3xl">All Products</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
       </div>
     

       
      </Swiper>
    </div>
  );
};

export default HeroSection;
