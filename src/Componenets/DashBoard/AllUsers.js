import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import UserRow from "./UserRow";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://final-defense-project-server-side.vercel.app/user", {
      headers: {
        authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const handleDeleteUser = (user) => {
    fetch(`https://final-defense-project-server-side.vercel.app/user/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Deleted");
        refetch();
      });
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h1 className="text-xl text-green-300 font-bold"> Total Visitor {users.length}</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow user={user} refetch={refetch} handleDeleteUser={handleDeleteUser} index={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      {/* {deleteAdmin && <DeleteMovie deleteAdmin={deleteAdmin}></DeleteMovie>} */}
    </div>
  );
};

export default AllUsers;
