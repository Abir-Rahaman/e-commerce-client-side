import React from "react";
import { toast } from "react-hot-toast";
import { RiDeleteBin7Fill } from "react-icons/ri";

const UserRow = ({ user, index, refetch, handleDeleteUser }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`   https://final-defense-project-server-side.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Invalid Action");
        }
        return res.json();
      })
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Congratulation You are a Admin");
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role ? (
          <span className="font-bold text-green-400 ml-4">Admin</span>
        ) : (
          <button onClick={makeAdmin} class="btn btn-xs text-white bg-red-500 border-none">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label onClick={() => handleDeleteUser(user)} for="delete-modal" class="btn btn-xs bg-red-500 text-white border-none">
          <RiDeleteBin7Fill />
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
