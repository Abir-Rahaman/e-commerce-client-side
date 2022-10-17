import React from 'react';
import mail from '../../images/mail.png'
import location from '../../images/location.png'
import phone from '../../images/iphone.png'
import email from '../../images/email.png'

const QureySection = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold  text-purple-400">Please Send Your Wishlist..</h1>
              <div  class="hero" id='contact'>
            <div  class=" bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 hero-content flex-col-reverse  lg:flex-row-reverse shadow-2xl w-full lg:px-64">
                <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="1000" class="card w-full rounded-2xl">
                        <div class="card-body  md:w-full">
                           <form method='POST' action="https://getform.io/f/7067b325-0165-4120-8a11-ee011c81044d">
                           <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' required class="input input-bordered bg-inherit" />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email ' class="input input-bordered bg-inherit" />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Message</span>
                            </label>
                            <textarea type="text" rows='6' placeholder="How Can I help You.." name='box' class="textarea textarea-bordered bg-inherit" />
                            </div>
                            <div class="form-control mt-6">
                            <button type="button"  class="w-full border-double border-4   px-8 py-2 text-slate-500 font-bold input input-bordered bg-inherit">Submit</button>
    
                            </div>
                           </form>
                        </div>
                        </div>
               <div data-aos="zoom-in-right ml-20" data-aos-duration="1000" data-aos-delay="2000" className="">
                <img src={email} alt="" />   
              <p className='flex gap-12 my-6'> <img className='inline ' src={mail} alt="" /><span>abirahman.cse@gmail.com </span></p>
              <p className='flex gap-12 my-6'> <img className='inline ' src={phone} alt="" /><span>+88 01701750168 </span> </p>
              <p className='flex gap-12'><img className='inline ' src={location} alt="" /><span> Tangail Dhaka </span></p> 
               
      

               </div>
            </div>
            </div>
        </div>
    );
};

export default QureySection;