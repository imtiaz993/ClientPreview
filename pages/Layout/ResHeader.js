import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ResHeader = ({ headerLinks }) => {
  const route = useRouter();

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className=" max-w-[4000px]  ">
      <div
        className={`Nvbar fixed z-10 w-full max-w-[4000px] bg-white ${
          route.asPath == "/" ? " md:bg-lightGrey" : ""
        }`}
      >
        <div className="nav md:flex h-[55px] md:h-auto py-[6px] px-[0px]  lg:w-3/4 md:mx-auto  relative w-full  md:items-center md:py-[20px] pb-[20px] border-b shadow-sm md:shadow-none md:border-none">
          <div className="nav-header flex justify-center md:inline">
            <div className="nav-title  m-0 inline-block p-[1px] item-center md:ml-[20px] md:mr-auto logo   ">
              <Link href="/">
                <img
                  className="w-[153px] h-[36px] hover:cursor-pointer"
                  src="/Images/logo.PNG "
                ></img>
              </Link>
            </div>

            <div
              className="nav-btn inline-block absolute left-0 top-0 mt-[5px] md:hidden"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <label
                className="inline-block w-[50px] h-[50px] p-[12px]"
                htmlFor="nav-check "
              >
                <span className="block w-[25px] h-[6px] border-b-[3px] border-darkBlue "></span>
                <span className="block w-[25px] h-[6px] border-b-[3px] border-darkBlue "></span>
                <span className="block w-[25px] h-[6px] border-b-[3px] border-darkBlue "></span>
              </label>
            </div>
          </div>
          <div
            className={
              expanded
                ? `transition-height duration-200 ease-in bg-lightGrey  block w-full text-lg text-center pt-6 mt-[11px]  overflow-y-hidden top-[50px] left-0 md:inline md:float-right h-[100vh] md:text-right  md:h-auto  md:p-0 md:m-0  ${
                    route.asPath == "/" ? " md:bg-lightGrey" : "md:bg-white"
                  }`
                : `transition-height duration-200 ease-in bg-lightGrey  block  w-full  text-lg  text-center mt-[11px]  md:mt-0 overflow-y-hidden top-[50px] left-0 md:inline md:h-auto md:float-right md:text-right h-[0]  md:pt-0  ${
                    route.asPath == "/" ? " md:bg-lightGrey" : "md:bg-white"
                  }`
            }
          >
            {headerLinks &&
              headerLinks.data.map((item, index) => (
                <Link
                  key={index}
                  // href={item.attributes.link}
                  href="/"
                  className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px]"
                >
                  <a
                    className="block my-4 md:my-0  font-lato font-light text-textGreish md:inline-block text-sm md:ml-6 hover:text-darkBlue"
                    onClick={() => {
                      setExpanded(!expanded);
                    }}
                  >
                    {/* {item.attributes.name} */}
                  </a>
                </Link>
              ))}
            <Link
              href="/OurServices"
              className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px]"
            >
              <a
                className="block my-4 md:my-0  font-lato font-light text-textGreish md:inline-block text-sm md:ml-6 hover:text-darkBlue"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                Our Services
              </a>
            </Link>
            <Link
              href="About"
              className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px]"
            >
              <a
                className="block my-4 md:my-0 font-lato font-light text-textGreish  md:inline-block text-sm md:ml-6 hover:text-darkBlue"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                About Us
              </a>
            </Link>
            <Link
              href="OurClient"
              className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px]"
            >
              <a
                className="block my-4 md:my-0 font-lato font-light text-textGreish  md:inline-block text-sm md:ml-6 hover:text-darkBlue"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                Our Clients
              </a>
            </Link>
            <Link
              href="Contact"
              className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px] "
            >
              <a
                className="block my-4 md:my-0 font-lato font-light text-textGreish  md:inline-block text-sm md:ml-6 hover:text-darkBlue"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                Contact Us
              </a>
            </Link>
            <Link
              href=""
              className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px]"
            >
              <a
                className="block my-4 md:my-0   md:inline-block text-sm md:ml-6"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              ></a>
            </Link>

            <Link href="/">
              <button className=" md:bg-blue-500 md:text-white text-sm md:w-32 md:h-10 md:text-base md:py-2 md:px-4 md:rounded-[30px] md:ml-8 lg:ml-14 md:mr-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResHeader;
