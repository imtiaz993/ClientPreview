import React from "react";
import Screendetails from "./Component/Screendetails";
import ContactComponent from "./Component/ContactComponent";

const Contact = () => {
  return (
    <>
      <Screendetails
        screenName="Contact Us"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className="max-w-screen-2xl mx-auto ">
        <div className="w-4/5 md:w-1/2 lg:w-3/4 mx-auto mt-16  lg:mt-28 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14  items-center">
        <form className="flex flex-col shadow-2xl p-8">
          <h1 className="text-xl mt-4 mb-4 font-lato font-semibold text-Flandingtext1">
            Contact Us Any Time
          </h1>
          <input
            type="text"
            placeholder="YOUR FULL NAME"
            className="bg-lightGrey p-3 my-4 text-sm font-lato font-light text-fillColor"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="bg-lightGrey p-3 my-4 text-sm font-lato font-light text-fillColor"
          />
          <input
            type="phone"
            placeholder="PHONE NO"
            className="bg-lightGrey p-3 my-4 text-sm font-lato font-light text-fillColor"
          />
          <textarea
            placeholder="MESSAGE"
            className="bg-lightGrey p-3 my-4 text-sm resize-none font-lato font-light text-fillColor"
            rows="4"
          ></textarea>
          <input
            type="submit"
            className="bg-blue-500 text-white w-36 h-12 text-base py-2 px-4 rounded-[30px] mt-6 mx-auto font-lato font-extrabold "
          />
        </form>


          <div className="">
            <p className="  text-textGreish  mx-auto md:w-full text-3xl md:text-lg lg:text-left pb-2 mt-4 md:mt-0">
              <span className="bg-blue-600  rounded-full w-9 flex p-1  mt-2 mb-1"></span>
            </p>


          <p className="font-lato font-black text-Flandingtext1  mx-auto md:w-full  text-3xl text-left lg:text-3xl lg:text-left lg:pb-8 lg:p lg:t-4 md:text-2xl md:text-left pb-8 md:top-4">
            We Want to hear from you
          </p>
          <p className=" w-auto font-lato font-medium text-black  text-base text-left lg:text-sm lg:text-left lg:pb-5 md:text-left md:text-sm md:pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className=" w-auto font-lato font-medium text-black text-base  text-left pb-5 lg:text-sm lg:text-left lg:pb-5 md:text-left md:text-sm md:pb-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderi t in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="mt-1 md:mt-2">
            <span className="font-normal font-lato text-black">Sunday: </span>
            Closed
          </p>
          <p className="mt-1 md:mt-2">
            <span className="font-normal font-lato text-black">
              Monday - Thursday:{" "}
            </span>
            9AM - 7PM
          </p>
          <p className="mt-1 md:mt-2">
            <span className="font-normal font-lato text-black">Friday: </span>
            9AM - 5PM
          </p>
        </div>
      </div>
      <div className=" my-14  md:my-8 lg:my-20 ">
        <h1 className="font-black font-lato flex justify-center items-center text-3xl   text-Flandingtext1 pt-10 pb-5">
          Our Contact Details
        </h1>
        <p className="font-medium font-lato w-11/12 mx-auto flex justify-center items-center text-center lg:text-sm md:text-xl text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-14 text-center">
        <div>
          <div className="w-20 h-20 mx-auto bg-lightGrey rounded-full flex justify-center">
            <img src="/Images/location.png" className="object-contain p-4" />
          </div>{" "}
          <h1 className="text-xl font-semibold mt-1 mb-2">
            Our Location On Map

          </h1>
          <p className="w-11/12 mx-auto flex justify-center items-center text-center lg:text-sm md:text-xl text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <div className="w-20 h-20 mx-auto bg-lightGrey rounded-full flex justify-center">
            <img src="/Images/call.png" className="object-contain p-4" />
          </div>
          <h1 className="text-xl font-semibold mt-1 mb-2">
            Our Location On Map
          </h1>
          <p className="text-sm w-3/5 md:w-3/4 mx-auto">
            Lorem Ipsum Dummy Text for location
          </p>
        </div>
        <div>
          <div className="w-20 h-20 mx-auto bg-lightGrey rounded-full flex justify-center">
            <img src="/Images/email.png" className="object-contain p-4" />
          </div>
          <h1 className="text-xl font-semibold mt-1 mb-2">
            Our Location On Map
          </h1>
          <p className="text-sm w-3/5 md:w-3/4 mx-auto">
            Lorem Ipsum Dummy Text for location
          </p>

       
          </div>

        </div>
        <ContactComponent
          contactTitle="Dont miss any update !"
          contactDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
        amet impedit Lorem ipsum"
          button1Text="Subscribe"
          button2Text="Contact us"
          noPading="md:pt-8"
        />
      </div>
    </>
  );
};

export default Contact;
