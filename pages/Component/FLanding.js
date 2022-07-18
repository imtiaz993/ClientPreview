import React from "react";

function FLanding(props) {
  return (
    <div className="lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto">
      <div className={`  lg:flex ${props.className} md:flex md:${props.className}`}>
        <div className="flex flex-col justify-center   lg:w-2/3 md:w-1/2 md:pt-20 pt-20">
          <div className="">
            <p className=" text-black text-2xl   text-left  lg:text-5xl lg:text-left">
              {props.title}
            </p>
            <p className=" w-auto text-textGreish  text-3xl text-left lg:text-xl lg:text-left lg:pb-2 md:text-base md:text-left md:pb-2">
              {props.landTitle}
            </p>
            <span className="bg-blue-600  rounded-full w-9 flex p-1 relative "></span>
            <p className=" w-auto text-textGreish font-bold text-xl text-left lg:text-3xl lg:text-left lg:pb-8 lg:pt-4 md:text-2xl md:text-left md:pb-8  lg:w-2/3">
              {props.landCapTitle}
            </p>
            <p className=" w-auto text-textGreish  text-base text-left lg:text-sm lg:text-left lg:pb-5 md:text-sm md:text-left md:pb-5 ">
              {props.title3}
            </p>
            <p className=" w-auto text-textGreish text-base  text-left lg:text-sm lg:text-left lg:pb-5 md:text-sm md:text-left md:pb-5 ">
              {props.title2}
            </p>
            <p className="text-blue-600 border-b-2 border-blue-600 lg:w-32 md:w-32 w-32">
              See how it works
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-2/3 md:w-1/2 lg:pt-10 md:pt-20 lg:pb-14   ">
          <img src={props.imgsrc} width="100%" ></img>
        </div>
      </div>
    </div>
  );
}

export default FLanding;
