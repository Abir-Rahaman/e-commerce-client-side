import { useState, useEffect, useReducer } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const userEmail = user?.user?.email;
    const currentUser = { email: userEmail };
    if (userEmail) {
      fetch(`https://final-defense-project-server-side.vercel.app/user/${userEmail}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("dataaaaaaaaaaa", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
