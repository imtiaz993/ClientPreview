import React from "react";
import Cards from "./Cards";

function Services(props) {
  return (
    <div
      className={`w-11/12 mx-auto lg:w-3/4 mb-24 lg:mx-auto ${
        props.mdWidth ? props.mdWidth : "md:w-11/12"
      } md:mx-auto`}
    >
      <div className="lg:pt-40 md:pt-14 pt-14">
        <p className="  text-textGreish w-3/4 mx-auto md:w-full text-3xl lg:text-lg lg:text-left lg:pb-4  md:text-lg md:text-left md:pb-4">
          OUR SERVICES
          <span className="bg-blue-600  rounded-full w-9 flex p-1 mt-2"> </span>
        </p>
        <p className="text-black w-3/4 mx-auto md:w-full font-bold text-3xl  lg:text-4xl lg:text-left lg:pb-10 md:text-4xl md:text-left md: pb-10">
          Providing Expert Services
        </p>
      </div>
      <div
        className={`w-3/4 mx-auto md:w-auto grid grid-cols-1 ${props.MdgridCol} gap-10 mt-8`}
      >
        <Cards
          imgsrc="/Images/card1.PNG"
          cardtitle="Website Design"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card2.PNG"
          cardtitle="Mobile Apps"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />{" "}
      </div>
    </div>
  );
}

export default Services;
