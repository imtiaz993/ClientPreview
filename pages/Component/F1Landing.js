import React from "react";

function F1Landing(props) {
  return (
    <div className="lg:w-4/5 lg:mr-6 lg:ml-auto  w-11/12 mt-8  mx-auto">
      <div className={` flex ${props.colR}  md:${props.rowR} `}>
        <div className="md:mr-2 lg:mr-8 flex flex-col justify-center   lg:w-2/3 md:w-1/2  md:pt-20 ">
          <div className="">
            <p className=" text-black text-2xl   text-left  lg:text-5xl lg:text-left md:text-left md:text-4xl ">
              {props.title}
            </p>
            <p className="  text-textGreish w-3/4 mx-auto md:w-full text-3xl md:text-lg lg:text-left pb-2 mt-4 md:mt-0">
              {props.landTitle}
              <span className="bg-linearGrad  rounded-full w-9 flex p-1  mt-2 mb-1"></span>
            </p>

            <p className="text-Flandingtext1 font-lato font-black w-3/4 mx-auto md:w-full  text-3xl text-left lg:text-3xl lg:text-left lg:pb-8 lg:p lg:t-4 md:text-2xl md:text-left pb-8 md:top-4">
              {props.landCapTitle}
            </p>
            <p className=" w-auto text-Flandingtext font-lato font-medium text-base text-left lg:text-sm lg:text-left lg:pb-5 md:text-left md:text-sm md:pb-5">
              {props.title3}
            </p>
            <p className=" w-auto text-Flandingtext font-lato font-medium text-base  text-left pb-5 lg:text-sm lg:text-left lg:pb-5 md:text-left md:text-sm md:pb-5">
              {props.title2}
            </p>
            <button className="bg-linearGrad font-lato font-semibold text-white w-36 h-12 md:h-10 lg:h-12 text-base  rounded-[30px] mt-4 mb-6 md:mb-0">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-2/3 md:w-1/2 lg:pt-10 lg:pb-14   ">
          <img src={props.imgsrc} width="775px" height="521px"></img>
        </div>
      </div>
    </div>
  );
}

export default F1Landing;
