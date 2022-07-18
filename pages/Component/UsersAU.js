import React from "react";

function UsersAU(props) {
  return (
    <div className="m-auto md:w-full">
      <div
        className={`w-64 p-4 md:w-full lg:w-full ${props.bgcolor} rounded-lg flex flex-col justify-center items-center`}
      >
        <img src={props.imgsrc} width="100%"></img>
      </div>
      <div className="w-64 p-4 md:w-full lg:w-full bg-blue-500 rounded-lg flex flex-col justify-center items-center -mt-2 ">
        <p className="text-white text-sm flex justify-center items-center text-center">
          Name Here
        </p>
        <p className="text-gray-500 text-xs">XYZ</p>
      </div>
    </div>
  );
}

export default UsersAU;
