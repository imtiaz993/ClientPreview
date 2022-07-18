import React from 'react'
import ContactComponent from './Component/ContactComponent'
import Screendetails from './Component/Screendetails'
import Services from './Component/Services'
import Layout from './Layout/Layout'

function OurServices() {
  return (
    
    <Layout bgColor="bg-white" bgColor1="bg-white" bgColor2="bg-white">
    <Screendetails
    screenName="Our Services"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua." />
    <Services />   
    <ContactComponent
        contactTitle="Dont miss any update !"
        contactDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione
      amet impedit Lorem ipsum"
        button1Text="Subscribe"
        button2Text="Contact us"
      />
  </Layout>
  )
}

export default OurServices