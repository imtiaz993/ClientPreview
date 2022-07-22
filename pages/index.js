import ContactComponent from "./Component/ContactComponent";
import F1Landing from "./Component/F1Landing";
import FLanding from "./Component/FLanding";
import Landing from "./Component/Landing";
import Services from "./Component/Services";
import Sponsership from "./Component/Sponsership";
import Testimonilas from "./Component/Testimonilas";
import delve from "dlv";
export default function Index({Home}) {
  return (
    <div className="bg-lightGrey">
      <div className="max-w-screen-2xl mx-auto">
        <Landing
          heading=" A Living App That Reflects The Users Actions And Habits"
          title=" IT FACTORY A"
          title2="Digital Agency"
          title3="Our industry consultants help address your must challenging issues by providing strategies, financial, operantional, human capital and IT services."
          imgsrc="/Images/landing.PNG"
        />
        <Sponsership />
        <Services MdgridCol="md:grid-cols-3" />


      <FLanding
        rowR="flex-row-reverse"
        colR="flex-col-reverse"
        landTitle="ABOUT US"
        landCapTitle="Lorem ipsum dolor sit amet consectetur"
        title3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."
        title2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh"
        imgsrc="/Images/landing1.PNG"
      />
      <F1Landing
        rowR="flex-row"
        colR="flex-col-reverse"
        heading=" A Living App That Reflects The Users Actions And Habits"
        landCapTitle="Lorem ipsum dolor sit amet consectetur"
        title3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua."
        title2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh"
        imgsrc="/Images/landing2.PNG"
      />
      <Testimonilas
        MDwidth="md:w-2/5 md:flex"
        MDwidth1="md:w-9"
        MDText="md:text-lg"
        MDText1="md=text-3xl"
        PadingT="md:pt-0"
      />
      <ContactComponent
        contactTitle="Dont miss any update !"
        contactDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione

    amet impedit Lorem ipsum"
          button1Text="Subscribe"
          button2Text="Contact us"
        />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(delve({data: `http://localhost:1337/api/homes?populate=*&authorization=Barear ${process.env.token}`}, "data"));
  const Home = await res.json();
  return { props: { Home } };
}
