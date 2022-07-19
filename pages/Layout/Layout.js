import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div className="Route max-w-screen-2xl mx-auto">
      <Header
        bgColor={props.bgColor}
        bgColor1={props.bgColor1}
        bgColor2={props.bgColor2}
        headerLinks={props.headerLinks}
      />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
