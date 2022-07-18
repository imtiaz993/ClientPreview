import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const  Layout=(props) =>{
  return (
    <div className="Route">
      <Header bgColor={props.bgColor}
      bgColor1={props.bgColor1}
      bgColor2={props.bgColor2}/>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;