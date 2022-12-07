import React, { useEffect, useState } from "react";
import ShowReview from "./ShowReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://final-defense-project-server-side-abir-rahaman-abir-rahaman.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="">
      <p className="text-purple-400 font-bold mb-4 text-4xl text-center pt-24">Customer Review... </p>
      <div className="grid grid-cols-3 pl-24 ">
        {reviews.map((review) => (
          <ShowReview review={review}> </ShowReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
