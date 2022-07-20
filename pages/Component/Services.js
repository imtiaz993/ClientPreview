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
        <p className="  text-textDarkSmall font-lato font-light w-3/4 mx-auto md:w-full text-3xl lg:text-2xl lg:text-left lg:pb-4  md:text-lg md:text-left md:pb-4">
          OUR SERVICES
          <span className="bg-linearGrad rounded-full w-12 flex p-1 mt-2"> </span>
        </p>
        <p className="text-textDark font-lato font-black w-3/4 mx-auto md:w-full  text-3xl  lg:text-5xl lg:text-left lg:pb-10 md:text-4xl md:text-left md: pb-10">
          Providing Expert Services
        </p>
      </div>
      <div
        className={`w-3/4 mx-auto md:w-auto grid grid-cols-1 ${props.MdgridCol} lg:grid-cols-3 gap-10 mt-8`}
      >
        <Cards
          imgsrc="/Images/card1.png"
          cardtitle="Website Design"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card2.png"
          cardtitle="Mobile Apps"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card3.png"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card4.png"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card5.png"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          imgsrc="/Images/card6.png"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />{" "}
      </div>
    </div>
  );
}

export default Services;
