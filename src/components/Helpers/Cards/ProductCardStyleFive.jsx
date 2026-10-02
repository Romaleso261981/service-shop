import React from "react";
import QuickViewIco from "../icons/QuickViewIco";
import ThinLove from "../icons/ThinLove";
import Compair from "../icons/Compair";

function ProductCardStyleFive({ datas }) {
  return (
    <div className="product-cart-three w-full group">
      {/* thumb */}
      <div className="w-full  bg-[#FFEFF2] flex justify-center items-center mb-6 relative overflow-hidden">
        <div className=" flex justify-center items-center w-full aspect-[270/350] p-4 relative">
          {datas?.isNew && (
            <div className="bg-qblack text-white text-sm font-medium px-3 py-1 absolute z-30 top-2.5 left-2.5">
              <span>New</span>
            </div>
          )}

          <img
            src={`/assets/images/${datas.image}`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out">
          <a href="#">
            <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
              <QuickViewIco />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
              <ThinLove />
            </span>
          </a>
          <a href="#">
            <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
              <Compair />
            </span>
          </a>
        </div>
        <div className="absolute w-full h-10 px-[30px]  left-0 -bottom-10 group-hover:bottom-5 transition-all duration-300 ease-in-out">
          <button
            type="button"
            className="black-btn !bg-white hover:!bg-qblack w-full !text-qblack hover:!text-white transition-all duration-300 text-base font-semibold h-full flex justify-center items-center"
          >
            <div className="flex items-center space-x-3">
              <span>Shop Now</span>
            </div>
          </button>
        </div>
      </div>
      <h2 className="text-xl leading-6 font-medium text-qblack mb-2">
        {datas?.title}
      </h2>
      <p className="text-base leading-6 font-medium text-qgraytwo">
        <span className=" line-through">{datas?.price} </span>{" "}
        <span className="text-qred">{datas?.offer_price}</span>{" "}
      </p>
    </div>
  );
}

export default ProductCardStyleFive;
