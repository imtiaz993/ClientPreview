import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = () => {
  const route = useRouter();
  return (
    <div
      className={`w-full ${
        route.asPath == "/" ? "bg-lightGrey md:bg-white" : "md:bg-lightGrey"
      }`}
    >

 <div className={` md:hidden lg:hidden flex justify-center items-center pt-8 pb-8 ${
        route.asPath == "/" ? "bg-white " : "bg-lightGrey"
      }`}>
 <img
          src="/Images/logo.PNG"
          width="120px"
        />
 </div>

      <div className="max-w-screen-2xl mx-auto py-2">
            <div
        className={`lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-4 grid md:grid-cols-2 lg:justify-between lg:items-center  md:justify-between md:items-center `}
      >
        <img
          className="hidden lg:block md:block"
          src="/Images/logo.PNG"
          width="100px"
        />
        <div className=" flex justify-evenly px-4 md:block md:px-0">
          <Link href="/OurServices">
            <a className="text-xs md:text-sm font-lato font-medium  text-textGreish hover:text-darkBlue">Our Services</a>
          </Link>
          <Link href="/OurClient">
            <a className="text-xs md:text-sm md:ml-6 ml-2 font-lato font-medium text-textGreish hover:text-darkBlue">Our Clients</a>
          </Link>
          <Link href="/About">
            <a className="text-xs md:text-sm md:ml-6 ml-2 font-lato font-medium text-textGreish hover:text-darkBlue">About Us</a>
          </Link>
          <Link href="/Contact">
            <a className="text-xs md:text-sm md:ml-6 ml-2 font-lato font-medium text-textGreish hover:text-darkBlue">Contact Us</a>
          </Link>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
