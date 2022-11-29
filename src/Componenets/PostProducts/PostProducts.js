import React from "react";
import pic from "../../images/product.jpg";
import { useForm } from "react-hook-form";

const PostProducts = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200  pt-24 ">
      <h1 class="text-3xl font-bold text-center">You can easily sell your used products here or purchase product that you want.</h1>
      <div class="flex justify-center py-24">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-20 justify-center">
                  <div className="">
                    <div class="form-control  w-full max-w-xs">
                      <input
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Product Name is required",
                          },
                        })}
                        type="text"
                        placeholder="Product Name"
                        class="input input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        {errors.name?.type === "required" && <span class="label-text-alt text-red-600"> {errors.name.message} </span>}
                      </label>
                    </div>
                    <div class="form-control  w-full max-w-xs">
                      <input
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Product Price is required",
                          },
                        })}
                        type="text"
                        placeholder="Product Price"
                        class="input  input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        {errors.price?.type === "required" && <span class="label-text-alt text-red-600"> {errors.price.message} </span>}
                      </label>
                    </div>
                    <div className="mb-4">
                      <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          Product Condition
                        </option>
                        <option>Almost New</option>
                        <option>Old</option>
                        <option>Very Old</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          Product Used Duration
                        </option>
                        <option>1-3 month</option>
                        <option>3-6 month</option>
                        <option>6-12 month</option>
                        <option>1-1.5 years</option>
                        <option>2 years month</option>
                        <option>3 years month</option>
                        <option>4 years month</option>
                        <option>More Than 4 years</option>
                      </select>
                    </div>
                    <div class="form-control  w-full max-w-xs">
                      <input
                        {...register("number", {
                          required: {
                            value: true,
                            message: "Contact number is required",
                          },
                        })}
                        type="text"
                        placeholder="Your contact number"
                        class="input  input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        {errors.number?.type === "required" && <span class="label-text-alt text-red-600"> {errors.number.message} </span>}
                      </label>
                    </div>
                    
                  </div>

                  <div className="">
                  <div class="form-control w-full max-w-xs">
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                          pattern: {
                            value: /([a-z0-9]+@[a-z]+\.[a-z]{2,3})/,
                            message: "Think twice and try again",
                          },
                        })}
                        type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                      />
                      <label class="label">
                        {errors.email?.type === "required" && <span class="label-text-alt text-red-600"> {errors.email.message} </span>}
                        {errors.email?.type === "pattern" && <span class="label-text-alt text-red-600"> {errors.email.message} </span>}
                      </label>
                    </div>
                    <div class="form-control  w-full max-w-xs mb-6">
                      <input
                        {...register("room", {
                          required: {
                            value: true,
                            message: "Language is required",
                          },
                        })}
                        type="text"
                        placeholder="Your Room No (*if you have)"
                        class="input  input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div class="form-control">
                      <textarea  {...register("description", {
                          required: {
                            value: true,
                            message: "Product Description is required",
                            
                          },
                        })} class="textarea textarea-bordered h-24" placeholder="Selling reason or product details"></textarea>
                        
                      <label class="label">
                        {errors.description?.type === "required" && <span class="label-text-alt text-red-600"> {errors.description.message} </span>}
                      
                      </label>
                    </div>

                    <div class="form-control  w-full max-w-xs">
                      <input
                        {...register("image", {
                          required: {
                            value: true,
                            message: "Movie Poster is required",
                          },
                        })}
                        type="file"
                        placeholder="Movie Poster"
                        class="input  input-bordered w-full max-w-xs pt-2"
                      />
                      <label class="label">
                        {errors.picture?.type === "required" && <span class="label-text-alt text-red-600"> {errors.picture.message} </span>}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-control mt-6 mx-64 pb-8">
                  <input
                    className="btn btn-wide border-4 px-6 py-2 bg-transparent  text-black rounded-full font-bold hover: bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 duration-700"
                    type="submit"
                    value="Post"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProducts;
