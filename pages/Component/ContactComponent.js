import React from "react";

const ContactComponent = ({ contactTitle, contactDesc, button1Text, button2Text }) => {
  return (
    <div className="text-center pt-36 pb-20">
      <h1 className="text-3xl font-bold">{contactTitle}</h1>
      <p className="lg:w-1/3 mx-auto my-8 md:w-1/2 w-11/12 text-sm">{contactDesc}</p>
      <div className="flex justify-center">
        {/*Yahan tum button wala component lga dena main screen py jo lgaya hy */}
        <div className="lg:px-5 md:px-4 px-4">
        <button className="bg-blue-500 text-white w-36 h-12 text-base py-2 px-4 rounded-[30px] ">
              {button1Text}
            </button>
            </div>
            <div className="">
            <button className=" text-textGreish border-2  border-blue-500 w-36 h-12 text-base py-2 px-4 rounded-[30px] lg:mr-4">
              {button2Text}
            </button>
            </div>
      </div>
    </div>
  );
};

export default ContactComponent;