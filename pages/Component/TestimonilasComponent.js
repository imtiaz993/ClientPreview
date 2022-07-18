import React from "react";

const TestimonilasComponent = ({ userImg, review, userName, ratingImg,MDwidth }) => {
  return (
    <div className={`mb-12 flex flex-col items-center w-100% lg:flex lg:flex-col lg:w-2/5 ${MDwidth}`}>
      <img src={userImg} width="75px" className="rounded-full relative top-8" />
      <div className="bg-white rounded-3xl shadow-2xl text-center py-4 pt-10 px-3  md:text-base lg:text-base">
        <p>{review}</p>
        <p className="text-blue-600 my-2 font-semibold">{userName}</p>
        <div className="flex justify-center">
          <img src={ratingImg} width="14px" />
          <img src={ratingImg} width="14px" />
          <img src={ratingImg} width="14px" />
          <img src={ratingImg} width="14px" />
          <img src={ratingImg} width="14px" />
        </div>
      </div>
    </div>
  );
};

export default TestimonilasComponent;
