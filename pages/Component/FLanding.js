import React from "react";

function FLanding(props) {
  console.log(props.colR);
  return (
    <div className="lg:w-4/5 lg:ml-6  w-11/12 mx-auto">
      <div className={`  flex ${props.colR} md:${props.rowR}`}>
        <div className="md:ml-2 lg:ml-8 flex flex-col justify-center   lg:w-2/3 md:w-1/2 ">
          <div className="">
            <p className=" text-black text-2xl  text-left  lg:text-5xl lg:text-left">
              {props.title}
            </p>
            <p className="  text-Flandingtext font-lato font-light w-3/4 mx-auto md:w-full  text-left text-3xl lg:text-left pb-2 md:text-lg md:text-left md:pb-2 mt-4 md:mt-0">
              {props.landTitle}
              <span className="bg-blue-600  rounded-full w-9 flex p-1  mt-2 mb-1"></span>
            </p>

            <p className=" text-Flandingtext1 font-lato font-black  w-3/4 mx-auto md:w-full text-3xl text-left lg:text-3xl lg:text-left lg:pb-8  md:text-2xl md:text-left pb-8 ">
              {props.landCapTitle}
            </p>
            <p className=" w-auto text-Flandingtext font-lato font-medium text-base text-left lg:text-sm lg:text-left lg:pb-5 md:text-sm md:text-left md:pb-5 ">
              {props.title3}
            </p>
            <p className=" w-auto text-Flandingtext text-base font-lato font-medium text-left lg:text-sm lg:text-left lg:pb-5 md:text-sm md:text-left md:pb-5 ">
              {props.title2}
            </p>
            <p className="text-blue-600 font-latov font-semibold border-b-2 mt-2 border-blue-600 lg:w-32 md:w-32 w-32">
              See how it works
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-2/3 md:w-1/2    ">
          <img src={props.imgsrc} width="891px" height="568px"></img>
        </div>
      </div>
    </div>
  );
}

export default FLanding;
