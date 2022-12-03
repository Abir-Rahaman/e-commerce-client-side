import React from "react";
import PageTitle from "./../Shared/PageTitle";
import about from "../../images/about.png";

const About = () => {
  return (
    <div>
      <PageTitle title="about"></PageTitle>
      <div className="flex justify-center items-center">
        <div className="">
          <img src={about} alt="" />
        </div>
        <div className="">
          <p className="text-purple-400 font-bold mb-4">About Us </p>
          <h1 className="text-3xl text-purple-500 w-96">A Campus Leading & Popular Online Shopping Solution Provider.</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
