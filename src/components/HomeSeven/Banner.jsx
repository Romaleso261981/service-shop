import React from "react";
import Link from "next/link";

function Banner() {
  return (
    <div className="pb-12">
      {/* second banner  */}
      <div className="w-full sm:col-span-3 aspect-[1920/717] min-h-[300px] overflow-hidden relative flex items-center">
        <img
          src={`/assets/images/h7-hero.png`}
          alt=""
          className="w-full h-full object-cover absolute z-0"
        />
        <div className=" px-4 sm:px-8  2xl:px-[110px]">
          <p className="text-qh7-pink text-xl relative z-20 flex justify-center items-center gap-8 w-fit before:w-12 before:h-0.5 before:bg-qh7-pink pb-1">
            Mascara Products
          </p>
          <h1 className=" text-3xl sm:text-5xl sm:leading-[58px]  xl:text-[66px] xl:leading-[76px] font-semibold text-white relative z-20 mt-2 ">
            Sports Tank Top For <br /> Man Collection
          </h1>
          <p className="text-white text-xl relative z-20 mb-8 mt-3">
            Up to <span className="text-qh7-pink underline">38%</span> Off for
            sport product
          </p>
          <Link
            href="/single-product"
            className=" relative z-20 bg-white text-qblack px-5 py-3 text-sm font-semibold hover:bg-qh7-pink  transition-all duration-300 "
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
