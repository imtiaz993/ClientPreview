import React from "react";

function Landing(props) {
  return (
    <div className="w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto">
      <div
        className={` lg:flex ${props.className} md:flex md:${props.className}`}
      >
        <div className="flex flex-col justify-center  md:flex md:flex-row  lg:w-2/3 md:w-1/2 pb-16 md:pb-0 ">
          <div className=" mt-20">
            <p className="w-auto font-lato font-light text-textDark text-5xl md:text-left pb-5 lg:pb-0 md:pb-0 text-center  lg:text-[72px]  lg:text-left md:text-[72px]">
              {props.title}
            </p>

            <p className=" w-auto font-lato font-black  text-darkBlue text-5xl pb-10 text-center lg:text-[72px] lg:text-left md:text-left md:pb-5 md:text-[72px]">
              {props.title2}
            </p>
            <p className=" w-auto font-lato font-normal text-textDarkSmall  text-xl text-center lg:text-lg lg:text-left lg:pb-10 md:text-left md:text-base md:pb-5">
              {props.title3}
            </p>
            <div className="flex justify-center pt-5 lg:justify-start lg:pt-0 md:justify-start md:pt-0 ">
              <button className="bg-blue-500 text-white w-36 h-12 text-lg py-2 px-4 rounded-[30px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:flex lg:flex-col justify-center md:flex-row lg:w-2/3 md:w-1/2 pt-10 pb-14   ">
          <img src={props.imgsrc} width="100%"></img>
        </div>
      </div>
    </div>
  );
}

export default Landing;
