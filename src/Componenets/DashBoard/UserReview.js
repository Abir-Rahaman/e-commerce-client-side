import React from "react";
import { useForm } from "react-hook-form";
import PageTitle from "./../Shared/PageTitle";
import { toast } from "react-hot-toast";

const UserReview = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    const review = {
      name: getValues("name"),
      review: getValues("review"),
    };
    fetch("https://final-defense-project-server-side.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted) {
          toast.success(" Product Added Successfully Done");
        } else {
          toast.error("Sorry ! Something went wrong");
        }

        reset();
        console.log(inserted);
      });
  };
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 ">
      <PageTitle title="post review"></PageTitle>
      <div class="">
        <div class="hero-content flex-col lg:flex-row ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center ">
              <div class="form-control  w-full max-w-xs mx-auto">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  class="input  input-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.name?.type === "required" && <span class="label-text-alt text-red-600"> {errors.name.message} </span>}
                </label>
              </div>
              <div class="form-control  w-full max-w-xs mx-auto">
                <textarea
                  {...register("review", {
                    required: {
                      value: true,
                      message: "Product Description is required",
                    },
                  })}
                  type="text"
                  placeholder="Your Valuable Review "
                  class="textarea textarea-bordered w-full max-w-xs"
                />
                <label class="label">
                  {errors.review?.type === "required" && <span class="label-text-alt text-red-600"> {errors.review.message} </span>}
                </label>
              </div>

              <div class="form-control mt-6 mx-64 pb-8 ">
                <input
                  className="btn btn-wide border-4 px-6 py-2 bg-transparent  text-black rounded-full font-bold hover: bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 duration-700"
                  type="submit"
                  value="Add Review"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
