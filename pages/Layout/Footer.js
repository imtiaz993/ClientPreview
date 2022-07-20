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
      <div className="max-w-screen-2xl mx-auto ">
        <div
          className={`lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-4 grid md:grid-cols-2 lg:justify-between lg:items-center  md:justify-between md:items-center `}
        >
          <img
            className="hidden lg:block md:block"
            src="/Images/logo.PNG"
            width="100px"
          />
          <div className=" flex justify-evenly px-4 md:block md:px-0">
            <Link href="Our-services">
              <a className="text-sm">Our Services</a>
            </Link>
            <Link href="Our-services">
              <a className="text-sm ml-6">Our Clients</a>
            </Link>
            <Link href="Our-services">
              <a className="text-sm ml-6">About Us</a>
            </Link>
            <Link href="Our-services">
              <a className="text-sm ml-6">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
