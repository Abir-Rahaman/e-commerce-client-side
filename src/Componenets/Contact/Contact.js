import React from 'react';
import contact from '../../images/conatct.png'
import PageTitle from './../Shared/PageTitle';
const Contact = () => {
    return (
       <>
       <PageTitle title='contact'></PageTitle>
        <h1 className="text-center text-3xl font-bold pt-24 text-purple-400">STAY CONNECTED...</h1>

        <div className='flex justify-center items-center'>
            
            <div className="w-96">
                 <img src={contact} alt="" />
            </div>
    
              <div className='' id='contact'>
            <div  class="  hero-content flex-col-reverse  lg:flex-row-reverse w-96 ">
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
                            <button type="button"  class="w-full border-double border-4   px-8 py-2 text-slate-500 font-bold input input-bordered bg-inherit">Send Message</button>
    
                            </div>
                           </form>
                        </div>
                        </div>
            </div>
            </div>
        </div>
       </>
        
        
    );
};

export default Contact;