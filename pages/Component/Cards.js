import React from "react";

function Cards(props) {
  return (
    <div
      className={` py-8 px-4 max-w-sm mx-auto ${props.imgColor}  rounded-lg shadow-lg flex flex-col justify-center items-center `}
    >
      <img src={props.imgsrc} width="20%"></img>
      <h5
        className={`mb-2 ${props.cardtitlecolor} text-center lg:text-xl md:text-xl text-3xl font-lato font-bold tracking-tight  `}
      >
        {props.cardtitle}
      </h5>
      <p
        className={`mb-3 font-normal font-lato  ${props.cardmsgcolor} text-base lg:text-base md:text-base text-center   `}
      >
        {props.cardmsg}
      </p>
    </div>
  );
}

export default Cards;
