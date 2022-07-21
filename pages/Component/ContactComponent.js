import Link from "next/link";
import React from "react";

const ContactComponent = ({
  contactTitle,
  contactDesc,
  button1Text,
  button2Text,
  noPading,
}) => {
  
  return (
    <div
      className={`text-center pt-16 pb-12  ${
        noPading ? noPading : "md:pt-28"
      } lg:pt-36 md:pb-24 lg:pb-20`}
    >
      <h1 className="text-3xl  text-Flandingtext1 font-lato font-black">
        {contactTitle}
      </h1>
      <p className="lg:w-1/3 text-black mx-auto my-8 md:w-1/2 w-11/12 text-sm font-lato font-medium ">
        {contactDesc}
      </p>
      <div className="flex justify-center">
        {/*Yahan tum button wala component lga dena main screen py jo lgaya hy */}
        <div className="lg:px-5 md:px-4 px-4">
          <button className="bg-linearGrad text-white w-36 h-12 text-base py-2 px-4 rounded-[30px] font-lato font-medium">
            {button1Text}
          </button>
        </div>
        <div className="">
          <Link href='/Contact'>
          <button className=" text-textGreish border-2  border-linearGrad w-36 h-12 text-base py-2 px-4 rounded-[30px] font-lato font-medium lg:mr-4">
            {button2Text}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
