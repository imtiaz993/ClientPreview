import React from "react";
import ContactComponent from "./Component/ContactComponent";
import Screendetails from "./Component/Screendetails";
import Services from "./Component/Services";
function OurServices() {
  return (
    <>
      <Screendetails
        screenName="Our Services"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua."
      />
      <Services MdgridCol="md:grid-cols-2" mdWidth="md:w-4/5" />
      <ContactComponent
        contactTitle="Dont miss any update !"
        contactDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
      amet impedit Lorem ipsum"
        button1Text="Subscribe"
        button2Text="Contact us"
      />
    </>
  );
}

export default OurServices;
