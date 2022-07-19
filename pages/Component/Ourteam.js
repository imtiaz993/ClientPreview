import React from "react";
import UsersAU from "./UsersAU";

function Ourteam() {
  return (
    <div className="w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-10 pt-4 pb-16 md:pb-10 md:pt-16">
      <h1 className="flex justify-center text-Flandingtext1 text-3xl  items-center text-center md:text-4xl lg:text-2xl font-bold pb-4 md:pb-12 lg:pb-5">
        Our Team
      </h1>
      <p className="flex justify-center items-center text-base text-black pb-16 md:pb-20">
        We could not do with out them
      </p>
      <div className="grid  gap-y-10   lg:grid lg:grid-rows-2 lg:gap-7  md:grid md:grid-rows-3 md:gap-7  md:grid-flow-col ">
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
        <UsersAU bgcolor="bg-lightGrey" imgsrc="/Images/userlogo.PNG" />
      </div>
    </div>
  );
}

export default Ourteam;
