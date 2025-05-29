import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="w-[300px] h-[350px] bg-white py-3 px-6 flex items-center justify-center flex-col rounded-2xl hover:scale-103 transition-transform duration-300 shadow-lg shadow-blue-500/50">
                <img className="object-contain bg-none h-[150px] w-[150px]" src={props.src} alt="image item" />
                <h1 className="font-bold text-[22px]">{props.name}</h1>
                <p className="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic.</p>
                 <h4 className="font-bold text-[20px]">{props.price}$</h4>   
                <button className="bg-yellow-400 py-2 px-6 text-1xl uppercase font-medium rounded-3xl w-max border-0 hover:scale-106 transition-transform duration-400 ">order now</button>
      </div>
    </>
  );
};

export default Card;
