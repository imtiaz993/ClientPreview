import React from "react";

function LandingAU(props) {
  return (
    <div className="w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-10">
      <div
        className={`flex flex-col-reverse lg:flex ${props.className} lg:flex-row-reverse md:flex md:${props.className} md:flex-row-reverse`}
      >
        <div className="flex flex-col justify-center  md:flex md:flex-row  lg:w-2/3 md:w-1/2  ">
          <div className=" mt-5">
            <p className=" w-auto text-black  text-base pb-5 text-center lg:text-sm lg:text-left md:text-left md:pb-5 md:text-xs">
              {props.title2}
            </p>
            <p className=" w-auto text-black pb-5  text-base text-center lg:text-sm lg:text-left lg:pb-10 md:text-left md:text-xs md:pb-5">
              {props.title3}
            </p>
            <p className=" w-auto text-black pb-5 text-base text-center lg:text-sm lg:text-left lg:pb-10 md:text-left md:text-xs md:pb-5">
              {props.title4}
            </p>
            <p className=" w-auto text-black  text-base text-center lg:text-sm lg:text-left lg:pb-10 md:text-left md:text-xs md:pb-5">
              {props.title5}
            </p>
            <div className="flex justify-center pt-5 lg:justify-start lg:pt-0 md:justify-start md:pt-0 ">
              <button className="bg-linearGrad text-white w-36 h-12 text-base py-2 px-4 rounded-[30px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-col justify-center md:flex md:flex-col lg:w-2/3 md:w-2/3    ">
          <p className="w-3/4 font-lato font-black md:w-2/3 text-Flandingtext1 text-3xl  text-left  lg:text-3xl lg:text-left md:text-left md:text-3xl pb-10 ml-16">
            {props.title}
          </p>
          <img className="ml-12" src={props.imgsrc} width="70%"></img>
        </div>
      </div>
    </div>
  );
}

export default LandingAU;
