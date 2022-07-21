import React from "react";

function Screendetails({ screenName, text }) {
  return (
    <div className="bg-lightGrey">
      <h1 className="flex justify-center font-lato font-black items-center text-4xl lg:text-5xl md:text-5xl  text-Flandingtext1 md:pt-10 lg:pt-10 pt-20 pb-5">
        {screenName}
      </h1>
      <p className="w-11/12 mx-auto flex font-lato font-medium justify-center items-center text-center lg:text-sm md:text-xl text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10">
        {text}
      </p>
    </div>
  );
}

export default Screendetails;
