import React from "react";

function Screendetails({screenName,text}) {
  return (
    <div className="bg-lightGrey">
      <h1 className="flex justify-center items-center text-4xl lg:text-5xl md:text-5xl font-bold text-black pt-10 pb-5">{screenName}</h1>
      <p className="w-11/12 mx-auto flex justify-center items-center text-center lg:text-sm md:text-xl text-black lg:w-1/3 md:w-3/4 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10">
        {text}
      </p>
    </div>
  );
}

export default Screendetails;
