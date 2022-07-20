import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ResHeader = ({ headerLinks }) => {
  const route = useRouter();

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div
        className={`Nvbar fixed z-10 w-full max-w-screen-2xl bg-white ${
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
              headerLinks.data.map((link, index) => (
                <Link
                  href={link.attributes.link}
                  className="w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px]"
                  key={index}
                >
                  <a
                    className="block my-4 md:my-0   md:inline-block text-sm md:ml-6"
                    onClick={() => {
                      setExpanded(!expanded);
                    }}
                  >
                    {link.attributes.name}
                  </a>
                </Link>
              ))}

            <button className=" md:bg-blue-500 md:text-white text-sm md:w-32 md:h-10 md:text-base md:py-2 md:px-4 md:rounded-[30px] md:ml-8 lg:ml-14 md:mr-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResHeader;
