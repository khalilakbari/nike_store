import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";

const Item = ({ ifExists, id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center
           ${ifExists ? 'justify-items-start' : 'justify-items-center'} 
           rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
        <div className={`grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'} `}>
          <h2 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h2>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 blur-effect-theme px-1 rounded">
              <h3 className="text-black text-sm font-medium">${price}</h3>
            </div>
            <div className="flex items-center gap-1">
              <AiFillStar className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h3 className="md:text-sm font-medium text-slate-100">{rating}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="bg-white/90 blur-effect-theme buttom-theme p-0.5 shadow shadow-sky-200 rounded">
              <HiShoppingBag className="icon-style text-slate-900" />
            </button>
            <button type="button" 
              className="bg-white/90 blur-effect-theme buttom-theme px-2 py-1 shadow
               shadow-sky-200 rounded text-sm text-black">
                {btn}
            </button>
          </div>

        </div>
        <div className={`flex items-center ${ifExists ? 'absolute top-5 right-1' : 'justify-center'}`}>
          <img
           src={img} 
           alt={`img/item-img${id} `}
           className={`transitions-theme hover:-rotate-12
            ${ifExists ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'}`}
            />
        </div>
      </div>
    </>
  );
};

export default Item;
