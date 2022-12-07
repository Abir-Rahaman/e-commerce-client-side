import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddProductDetails = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgKey = "69fb380d3c03cfe1603dcae97afcc89a";

  const onSubmit = async (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.success) {
          const image = result.data.url;

          const product = {
            name: data.name,
            price: data.price,
            company: data.company,
            image: image,
            description: data.description,
            category: data.category,
            stars: data.stars,
            stock: data.stock,
            reviews: data.reviews,
          };

          const ClientUrl = "https://final-defense-project-server-side-abir-rahaman-abir-rahaman.vercel.app/productsDetails";

          fetch(ClientUrl, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Movie Added Successfully for User");
              console.log(result);
            });

          fetch("https://final-defense-project-server-side-abir-rahaman-abir-rahaman.vercel.app/productDetails", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                toast.success(" Product Added Successfully Done");
              } else {
                toast.error("Sorry ! Something went wrong");
              }
            });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 pt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto">
          <div class="form-control  w-full max-w-xs mx-auto">
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
          <div class="form-control  w-full max-w-xs mx-auto">
            <input
              {...register("price", {
                required: {
                  value: true,
                  message: "Product Price is required",
                },
              })}
              type="text"
              placeholder="Product Price"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.price?.type === "required" && <span class="label-text-alt text-red-600"> {errors.price.message} </span>}
            </label>
          </div>
          <div class="form-control  w-full max-w-xs mx-auto">
            <input
              {...register("company", {
                required: {
                  value: true,
                  message: "Product Company is required",
                },
              })}
              type="text"
              placeholder="Product Company"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.company?.type === "required" && <span class="label-text-alt text-red-600"> {errors.company.message} </span>}
            </label>
          </div>
          <div class="form-control  w-full max-w-xs mx-auto">
            <input
              {...register("category", {
                required: {
                  value: true,
                  message: "category Name is required",
                },
              })}
              type="text"
              placeholder="category Name"
              class="input  input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.category?.type === "required" && <span class="label-text-alt text-red-600"> {errors.category.message} </span>}
            </label>

            <div class="form-control  w-full max-w-xs mx-auto">
              <input
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
                type="text"
                placeholder="Description"
                class="input  input-bordered w-full max-w-xs mx-auto"
              />
              <label class="label">
                {errors.description?.type === "required" && <span class="label-text-alt text-red-600"> {errors.description.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs mx-auto">
              <input
                {...register("stock", {
                  required: {
                    value: true,
                    message: "Stock is required",
                  },
                })}
                type="text"
                placeholder="Stock amount"
                class="input  input-bordered w-full max-w-xs mx-auto"
              />
              <label class="label">
                {errors.stock?.type === "required" && <span class="label-text-alt text-red-600"> {errors.stock.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs mx-auto">
              <input
                {...register("reviews", {
                  required: {
                    value: true,
                    message: "Reviews is required",
                  },
                })}
                type="text"
                placeholder="Reviews amount"
                class="input  input-bordered w-full max-w-xs mx-auto"
              />
              <label class="label">
                {errors.reviews?.type === "required" && <span class="label-text-alt text-red-600"> {errors.reviews.message} </span>}
              </label>
            </div>
            <div class="form-control  w-full max-w-xs mx-auto">
              <input
                {...register("stars", {
                  required: {
                    value: true,
                    message: "Reviews is required",
                  },
                })}
                type="text"
                placeholder="Getting Stars"
                class="input  input-bordered w-full max-w-xs mx-auto"
              />
              <label class="label">
                {errors.stars?.type === "required" && <span class="label-text-alt text-red-600"> {errors.stars.message} </span>}
              </label>
            </div>
          </div>

          <div class="form-control  w-full max-w-xs mx-auto">
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Product image is required",
                },
              })}
              type="file"
              placeholder="Movie Poster"
              class="input  input-bordered w-full max-w-xs pt-2"
            />
            <label class="label">
              {errors.image?.type === "required" && <span class="label-text-alt text-red-600"> {errors.image.message} </span>}
            </label>
          </div>
        </div>

        <div class="form-control mt-6 mx-64 pb-8">
          <input
            className="btn border-4 px-6 py-2 bg-transparent  text-black rounded-full font-bold hover:bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 duration-700"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductDetails;
