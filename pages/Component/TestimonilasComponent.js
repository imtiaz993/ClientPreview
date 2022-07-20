import React from "react";

const TestimonilasComponent = ({
  userImg,
  review,
  userName,
  ratingImg,
  MDwidth,
  MDPading,
  lgPading,
}) => {
  return (
    <div
      className={` lg:mb-6  flex flex-col items-center w-100% lg:flex lg:flex-col lg:w-[45%] ${MDwidth} ${MDPading} ${lgPading}`}
    >
      <img src={userImg} width="75px" className="rounded-full relative top-8" />
      <div className="bg-white text-black font-lato font-medium rounded-3xl shadow-2xl text-center py-4 pt-10 px-3  md:text-base lg:text-base">
        <p>{review}</p>
        <p className="text-testimoColor my-2 font-semibold">{userName}</p>
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
