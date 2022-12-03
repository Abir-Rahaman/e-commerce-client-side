import React from "react";
import PageTitle from "./../Shared/PageTitle";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const ShowReview = ({ review }) => {
    const [user] = useAuthState(auth)
  return (
    <div className="my-20">
      <PageTitle title="review"></PageTitle>
      <div class="card w-96 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 ">
        <div class="card-body">
        <div class="avatar mx-auto">
              <div class="w-12 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          <h2 class="">
            
            <div className="ml-5 text-center">
            <p className="text-xl font-bold">{review.name}</p>
            <p className="font-bold text-gray-400 "> <small> {user?.email}</small></p>
            </div>
       
          </h2>

         
          <p className="text-center font-bold text-green-500">{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
