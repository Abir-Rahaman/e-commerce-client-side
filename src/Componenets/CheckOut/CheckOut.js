import React from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const address = {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      number: getValues("number"),
      area: getValues("area"),
      duration: getValues("duration"),

      address: getValues("address"),
      location: getValues("location"),
    };
    fetch("http://localhost:4000/buyerAddress", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(address),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted) {
          toast.success(" Your Address Successfully Saved & Go to My Order Section For Payment");
        } else {
          toast.error("Sorry ! Something went wrong");
        }
        console.log(inserted);

        reset();
      });
  };

  return (
    <div className="bg-base-200  flex-col">
      <h1 className="text-center text-3xl font-bold text-purple-400 pt-24">Add Your Delivery Address...</h1>
      <div class=" py-6 px-56">
        <div class=" flex-col lg:flex-row-reverse ">
          <div class="card w-full shadow-2xl bg-base-10">
            <div class="card-body w-full pt-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-around gap-36">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">First Name</span>
                    </label>
                    <input
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "First Name is required",
                        },
                      })}
                      type="text"
                      placeholder="Your First Name"
                      class="input input-bordered"
                    />
                    <label class="label">
                      {errors.firstName?.type === "required" && <span class="label-text-alt text-red-600"> {errors.firstName.message} </span>}
                    </label>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Last Name</span>
                    </label>
                    <input
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Last Name is required",
                        },
                      })}
                      type="text"
                      placeholder="Your Last Name"
                      class="input input-bordered w-full"
                    />
                    <label class="label">
                      {errors.lastName?.type === "required" && <span class="label-text-alt text-red-600"> {errors.lastName.message} </span>}
                    </label>
                  </div>
                </div>

                <div className="flex justify-around gap-36">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Contact Number</span>
                    </label>
                    <input
                      {...register("number", {
                        required: {
                          value: true,
                          message: "Contact Number",
                        },
                      })}
                      type="text"
                      placeholder="Your First Name"
                      class="input input-bordered"
                    />
                    <label class="label">
                      {errors.number?.type === "required" && <span class="label-text-alt text-red-600"> {errors.number.message} </span>}
                    </label>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Address</span>
                    </label>
                    <input
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is required",
                        },
                      })}
                      type="text"
                      placeholder="Your First Name"
                      class="input input-bordered w-full"
                    />
                    <label class="label">
                      {errors.address?.type === "required" && <span class="label-text-alt text-red-600"> {errors.address.message} </span>}
                    </label>
                  </div>
                </div>
                <div className="flex justify-around gap-36">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Area</span>
                    </label>
                    <input
                      {...register("area", {
                        required: {
                          value: true,
                          message: "Area is required",
                        },
                      })}
                      type="text"
                      placeholder="Area"
                      class="input input-bordered"
                    />
                    <label class="label">
                      {errors.area?.type === "required" && <span class="label-text-alt text-red-600"> {errors.area.message} </span>}
                    </label>
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Exact Location</span>
                    </label>
                    <input
                      {...register("location", {
                        required: {
                          value: true,
                          message: "Exact Location is required",
                        },
                      })}
                      type="text"
                      placeholder="Your Exact Location"
                      class="input input-bordered w-full"
                    />
                    <label class="label">
                      {errors.location?.type === "required" && <span class="label-text-alt text-red-600"> {errors.location.message} </span>}
                    </label>
                  </div>
                </div>
                <div class="form-control mt-6 w-56">
                  <input
                    className="btn border-4 px-6 py-2 bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 duration-700"
                    type="submit"
                    value="Sava and Continue"
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

export default CheckOut;
