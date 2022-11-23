import React from 'react';
import { useSignInWithEmailAndPassword ,useSignInWithGoogle} from "react-firebase-hooks/auth";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { GrFacebook } from "react-icons/gr";

import { useForm } from "react-hook-form";

import { Link, useNavigate, useLocation } from "react-router-dom";
import Spinner from './../Shared/Spinner';
import auth from '../../firebase.init';

const LogIn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const {register,formState: { errors },handleSubmit} = useForm();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  
  let errorMessage;

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  
  if (loading || googleLoading) {
    return <Spinner></Spinner>;
  }

  if (error || googleError) {
    errorMessage = (
      <p className="text-red-400 font-bold text-center">
        <small> {error?.message || googleError?.message} </small>
      </p>
    );
  }


const onSubmit = (data) => {
  signInWithEmailAndPassword(data.email, data.password);
};
    return (
        <div className="bg-base-200  flex-col">
        <div class="hero pt-24 pb-6">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <span className="text-6xl text-slate-800 mx-auto hidden lg:block rounded-full bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 p-6 lg:relative lg:top-[-240px] lg:right-[260px] z-10">
              <MdOutlineManageAccounts />
            </span>
            <div class="card w-96  shadow-2xl bg-base-10">
              <div class="card-body pt-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
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
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters long",
                        },
                      })}
                      type="password"
                      placeholder="Your Password"
                      class="input input-bordered w-full max-w-xs"
                    />
                    <label class="label">
                      {errors.password?.type === "required" && <span class="label-text-alt text-red-600"> {errors.password.message} </span>}
                      {errors.password?.type === "minLength" && <span class="label-text-alt text-red-600"> {errors.password.message} </span>}
                    </label>
                  </div>
                  {errorMessage}
                  <div class="form-control mt-6">
                    <input
                      className="btn border-4 px-6 py-2 bg-transparent text-black rounded-full font-bold hover:bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 duration-700"
                      type="submit"
                      value="Log In"
                    />
                  </div>
                  <p className="text-center">
                    <small>
                      {" "}
                      New ?{" "}
                      <Link className="text-green-400 font-bold" to="/signIn">
                        Create an account{" "}
                      </Link>
                    </small>
                  </p>
                  <div class="divider">OR</div>
                  <div className="flex justify-center text-4xl gap-8 mt-4">
                    <span  onClick={() => signInWithGoogle()}>
                      <FcGoogle />
                    </span>
                    <ImGithub />
                    <GrFacebook />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;