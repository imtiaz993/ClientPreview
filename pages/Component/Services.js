import React from "react";
import Cards from "./Cards";

function Services() {
  return (
    <div className="w-11/2 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto">
      <div className="lg:pt-40 md:pt-20 pt-20">
        <p className=" w-auto text-textGreish  text-3xl text-center lg:text-lg lg:text-left lg:pb-4  md:text-lg md:text-left md:pb-4">
          OUR SERVICES
          <div className="ml-24 lg:ml-0 md:ml-0">
            <span className="bg-blue-600  rounded-full w-9 flex p-1 relative">
              {" "}
            </span>
          </div>
        </p>
        <p className="text-black font-bold text-3xl text-center lg:text-4xl lg:text-left lg:pb-10 md:text-4xl md:text-left md: pb-10">
          Providing Expert Services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Cards
          bgcolor="bg-white"
          cardTitleColor="text-textGreish"
          cardmsgColor="text-textGreish"
          imgsrc="/Images/card1.PNG"
          cardtitle="Website Design"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          bgcolor="bg-darkBlue"
          cardTitleColor="text-white"
          cardmsgColor="text-white"
          imgsrc="/Images/card2.PNG"
          cardtitle="Mobile Apps"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          bgcolor="bg-white"
          cardTitleColor="text-textGreish"
          cardmsgColor="text-textGreish"
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          bgcolor="bg-white"
          cardTitleColor="text-textGreish"
          cardmsgColor="text-textGreish"
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          bgcolor="bg-white"
          cardTitleColor="text-textGreish"
          cardmsgColor="text-textGreish"
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />
        <Cards
          bgcolor="bg-white"
          cardTitleColor="text-textGreish"
          cardmsgColor="text-textGreish"
          imgsrc="/Images/card3.PNG"
          cardtitle="Online Stores"
          cardmsg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
        />{" "}
      </div>
    </div>
  );
}

export default Services;
