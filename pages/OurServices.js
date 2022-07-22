import React from "react";
import ContactComponent from "./Component/ContactComponent";
import Screendetails from "./Component/Screendetails";
import Services from "./Component/Services";
import delve from "dlv";
function OurServices({Service}) {
  return (
    <>
      <Screendetails
        screenName="Our Services"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="max-w-screen-2xl mx-auto ">
             <Services MdgridCol="md:grid-cols-2" mdWidth="md:w-4/5" />
      <div className=" my-14  md:my-8 lg:my-20">
        <h1 className="flex justify-center items-center text-3xl font-lato font-black text-Flandingtext1 pt-10 pb-10">
          Choose your plan
        </h1>
        <p className="w-11/12 mx-auto flex justify-center items-center font-lato font-light text-center lg:text-sm md:text-xl text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10">
          There are some images with the best package we have done so far. There
          will be many more coming in the near future.
        </p>
      </div>
      <div className="w-3/5 md:w-11/12 lg:w-4/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
        <div className="shadow-xl py-8 px-12 rounded-[30px] bg-white">
          <h1 className="text-center text-2xl font-lato font-black  mb-4 text-Flandingtext1">
            Basic
          </h1>
          <p className="text-center mb-4 font-lato font-light text-black">Lorem Ipsum Dummy Text Here</p>
          <ul className="list-disc">
            <li className=" marker:text-blue-600 font-lato font-light text-PriceFillColor">Lorem Ipsum Dummy</li>
            <li className=" marker:text-blue-600 font-lato font-light text-PriceFillColor">Lorem Ipsum Dummy</li>
            <li className=" marker:text-blue-600 font-lato font-light text-PriceFillColor">Lorem Ipsum Dummy</li>
          </ul>
          <h1 className="text-center text-3xl font-lato font-black  my-4 text-Flandingtext1">
            $999
          </h1>
          <div className="flex justify-center mt-8 mb-2">
            <button className="bg-blue-500 text-white mx-auto w-28 h-8 text-base  px-4 rounded-[30px] font-lato font-extrabold">
              Choose
            </button> 
          </div>
        </div>
        <div className="shadow-xl py-8 px-12 rounded-[30px] bg-BackgroundAUcolor">
          <h1 className="text-center text-2xl   mb-4 font-lato font-black  text-Flandingtext1">
            Standard
          </h1>
          <p className="text-center mb-4 font-lato font-light text-white">Lorem Ipsum Dummy Text Here</p>
          <ul className="list-disc">
            <li className=" marker:text-blue-600 font-lato font-light text-white">Lorem Ipsum Dummy</li>
            <li className=" marker:text-blue-600 font-lato font-light text-white">Lorem Ipsum Dummy</li>
            <li className=" marker:text-blue-600 font-lato font-light text-white">Lorem Ipsum Dummy</li>
          </ul>
          <h1 className="text-center text-3xl font-lato font-black  my-4 text-Flandingtext1">
            $1999
          </h1>
          <div className="flex justify-center mt-8 mb-2">
            <button className="bg-white text-black mx-auto w-28 h-8 text-base  px-4 rounded-[30px] font-lato font-extrabold  ">
              Choose
            </button>
          </div>
        </div>
        <div className="shadow-xl py-8 px-12 rounded-[30px] bg-white">
          <h1 className="text-center text-2xl mb-4 font-lato font-black  text-Flandingtext1">
            Premium
          </h1>
          <p className="text-center mb-4 font-lato font-light text-black">Lorem Ipsum Dummy Text Here</p>
          <ul className="list-disc">
            <li className=" marker:text-blue-600 font-lato font-light text-PriceFillColor">Lorem Ipsum Dummy</li>
            <li className=" marker:text-blue-600 font-lato font-light text-PriceFillColor">Lorem Ipsum Dummy</li>
            <li className=" marker:text-blue-600 font-lato font-light text-PriceFillColor">Lorem Ipsum Dummy</li>
          </ul>
          <h1 className="text-center text-3xl font-lato font-black  my-4 text-Flandingtext1">
            $2999
          </h1>
          <div className="flex justify-center mt-8 mb-2">
            <button className="bg-blue-500 text-white mx-auto w-28 h-8 text-base  px-4 rounded-[30px] font-lato font-extrabold">
              Choose
            </button>
            </div>

          </div>
        </div>
        <ContactComponent
          contactTitle="Dont miss any update !"
          contactDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
      amet impedit Lorem ipsum"
          button1Text="Subscribe"
          button2Text="Contact us"
        />
      </div>
    </>
  );
}

export default OurServices;
export async function getServerSideProps() {
  const res = await fetch(delve({data: `http://localhost:1337/api/sevices?populate=*&authorization=Barear ${process.env.token}`}, "data"));
  const Service = await res.json();
  return { props: { Service } };
}