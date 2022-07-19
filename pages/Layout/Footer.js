import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="lg:w-3/5 lg:mx-auto md:w-11/12 md:mx-auto py-4 grid grid-cols-2 lg:justify-between lg:items-center md:justify-between md:items-center ">
      <img
        className="sm:hidden lg:block md:block"
        src="/Images/logo.PNG"
        width="100px"
      />
      <div>
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
  );
};

export default Footer;
