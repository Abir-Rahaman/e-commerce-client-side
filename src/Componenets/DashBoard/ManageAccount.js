import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const ManageAccount = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div class="card lg:card-side bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200 shadow-xl ">
    
        <img className="w-80" src={user.photoURL} alt="Album" />
   
     
      <div class="card-body ml-24">
        <h2 class="card-title">Account Information</h2>
        <p>User Name : </p>
        <p>  <input value={user.displayName} readOnly 
                    type="text"
                    placeholder="Email : "
                    class="input input-bordered w-full max-w-xs"
                  /> </p>
        <p>User Email : </p>
        <p>  <input value={user.email} readOnly 
                    type="text"
                    placeholder="Email : "
                    class="input input-bordered w-full max-w-xs"
                  /> </p>
        
      </div>
    </div>
  );
};

export default ManageAccount;
