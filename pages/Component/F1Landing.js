import React from "react";

function F1Landing(props) {
  return (
    <div className="lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto" >
      <div className={`lg:flex lg:${props.className} md:flex md:${props.className} `}>
        <div className="flex flex-col justify-center   lg:w-2/3 md:w-1/2  md:pt-20 pt-20">
          <div className="">
            <p className=" text-black text-2xl   text-left  lg:text-5xl lg:text-left md:text-left md:text-4xl ">
              {props.title}
            </p>
            <p className=" w-auto text-textGreish  text-xs text-center lg:text-xl lg:text-left lg:pb-2 ">
              {props.landTitle}
            </p>
            <span className="bg-blue-600  rounded-full w-9 flex p-1 relative "></span>
            <p className=" w-auto text-textGreish font-bold text-xl text-left lg:text-3xl lg:text-left lg:pb-8 lg:p lg:t-4 md:text-2xl md:text-left md:pb-8 md:top-4">
              {props.landCapTitle}
            </p>
            <p className=" w-auto text-textGreish  text-base text-left lg:text-sm lg:text-left lg:pb-5 md:text-left md:text-sm md:pb-5"> 
              {props.title3}
            </p>
            <p className=" w-auto text-textGreish text-base  text-left pb-5 lg:text-sm lg:text-left lg:pb-5 md:text-left md:text-sm md:pb-5">
              {props.title2}
            </p>
            <button className="bg-blue-500 text-white w-36 h-12 text-base py-2 px-4 rounded-[30px] ">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-2/3 md:w-1/2 lg:pt-10 lg:pb-14   ">
          <img src={props.imgsrc} width="100%"></img>
        </div>
      </div>
    </div>
  );
}

export default F1Landing;
