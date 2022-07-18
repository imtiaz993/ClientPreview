import React from "react";
import TestimonilasComponent from "./TestimonilasComponent";


const Testimonilas = (props) => {
  return (
    <div className="">
    <div className="w-3/4 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto  lg:pt-20  md:pt-24 pt-5 ">
        <p className={` w-auto text-textGreish  text-4xl text-left pb-4 lg:text-lg lg:text-left lg:pb-4 ${props.MDText} md:text-left md:pb-4`}>
          OUR CLIENTS
          <div className={`pt-4 ${props.PadingT} lg:pt-0`}>
          <span className={`bg-blue-600  rounded-full w-9 lg:w-9 ${props.MDwidth1} flex p-1 relative`}>
            {" "}
          </span>
          </div>
        </p>
        <p className={`text-black font-bold text-3xl text-left lg:text-4xl lg:text-left lg:pb-10 ${props.MDText1} md:text-left md:pb-8`}>
          Testimonilas
        </p>
      </div>
    <div className={` w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto  flex justify-evenly flex-wrap ${props.ClassName} `}>
        
      <TestimonilasComponent
      MDwidth={props.MDwidth}
        userImg="/images/41.jpg"
        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        amet impedit "
        userName="Name Here"
        ratingImg="/images/rating.jpg"
      />
      <TestimonilasComponent
            MDwidth={props.MDwidth}
        userImg="/images/41.jpg"
        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        amet impedit"
        userName="Name Here"
        ratingImg="/images/rating.jpg"
      />
       <TestimonilasComponent
      MDwidth={props.MDwidth}
        userImg="/images/41.jpg"
        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        amet impedit "
        userName="Name Here"
        ratingImg="/images/rating.jpg"
      />
      <TestimonilasComponent
            MDwidth={props.MDwidth}
        userImg="/images/41.jpg"
        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        amet impedit"
        userName="Name Here"
        ratingImg="/images/rating.jpg"
      />
    </div>
    </div>
  );
};

export default Testimonilas;
