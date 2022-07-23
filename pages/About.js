import React from "react";
import ContactComponent from "./Component/ContactComponent";
import LandingAU from "./Component/LandingAU";
import Ourteam from "./Component/Ourteam";
import Screendetails from "./Component/Screendetails";
import Testimonilas from "./Component/Testimonilas";
import delve from "dlv";
function About({ AboutPage, Company, Team, Testimonial }) {
  return (
    <>
      <Screendetails
        screenName="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="max-w-screen-2xl mx-auto ">
        <LandingAU
          className="flex-row-reverse"
          title2="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title3=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi t in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          title4="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title5=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi t in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          title="IT Factory is all About Perfection"
          imgsrc="/Images/landingau.PNG"
        />
        <Ourteam />
        <Testimonilas
          ClassName="md:flex md:flex-wrap md:flex-col md:justify-center md:items-center lg:flex-row lg:justify-evenly"
          MDwidth="md:w-4/6 md:flex"
          MDwidth1="md:w-14"
          MDText="md:text-2xl"
          MDText1="md:text-5xl"
          PadingT="md:pt-4"
          MDPading="md:pb-20"
          lgPading="lg:pb-0"
        />
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
}

export default About;
export async function getServerSideProps() {
  const res = await fetch(
    delve(
      {
        data: `http://localhost:1337/api/about-pages?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const AboutPage = await res.json();
  const res1 = await fetch(
    delve(
      {
        data: `http://localhost:1337/api/company-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Company = await res1.json();
  const res2 = await fetch(
    delve(
      {
        data: `http://localhost:1337/api/team-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Team = await res2.json();
  const res3 = await fetch(
    delve(
      {
        data: `http://localhost:1337/api/api/testimonial-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Testimonial = await res3.json();
  const res4 = await fetch(
    delve(
      {
        data: `http://localhost:1337/api/api/subscribe-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Subscribe = await res4.json();
  return { props: { AboutPage, Company, Team, Testimonial } };
}
