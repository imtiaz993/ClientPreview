import React from 'react'

function Cards(props) {
  return (
    
    <div className={` py-8 px-4 max-w-sm mx-auto ${props.bgcolor} rounded-lg border border-gray-200 flex flex-col justify-center items-center`}>
    <img src={props.imgsrc} width="20%" ></img>
    <h5 className={`mb-2  lg:text-xl md:text-xl text-3xl font-bold tracking-tight ${props.cardTitleColor}`  }>{props.cardtitle}</h5>
    <p className={`mb-3 font-normal text-base lg:text-xs md:text-xs text-center  ${props.cardmsgColor}   `}>{props.cardmsg}</p>
    
</div>

  )
}

export default Cards