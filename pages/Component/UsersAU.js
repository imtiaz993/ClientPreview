import React from "react";

function UsersAU(props) {
  return (
    <div className="m-auto md:w-full">
      <div
        className={`w-64 p-4 md:w-full lg:w-full ${props.bgcolor} rounded-2xl flex flex-col justify-center items-center`}
      >
        <img src={props.imgsrc} width="100%"></img>
      </div>
      <div className="w-64 p-6 md:w-full lg:w-full bg-linearGrad rounded-2xl   flex flex-col justify-center items-center -mt-2 ">
        <p className="text-white font-lato font-black text-sm flex justify-center items-center text-center">
          Name Here
        </p>
        <p className="font-lato font-light text-gray-500 text-xs">XYZ</p>
      </div>
    </div>
  );
}

export default UsersAU;
