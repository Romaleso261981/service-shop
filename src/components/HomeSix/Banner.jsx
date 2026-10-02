import React from "react";
import Link from "next/link";

function Banner() {
  return (
    <div className="px-4 xl:px-8 pb-8 grid sm:grid-cols-3 gap-4 lg:gap-8">
      {/* card */}
      <div className="w-full aspect-[600/350] flex flex-col justify-center items-center relative p-4">
        <img
          src={`/assets/images/h6-b1.png`}
          alt=""
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="w-full h-full bg-black/30 absolute z-10"></div>
        <p className="text-white text-xl relative z-20">Up to 38% Off</p>
        <h1 className=" text-2xl xl:text-4xl font-semibold text-white relative z-20 mt-2 text-center">
          Clothing & Equipment
        </h1>
        <Link
          href="/single-product"
          className=" relative z-20 bg-white text-qblack px-5 py-3 text-sm font-semibold hover:bg-qh6-orange hover:text-white transition-all duration-300 mt-8"
        >
          Shop Now
        </Link>
      </div>
      {/* card */}
      <div className="w-full aspect-[600/350] flex flex-col justify-center items-center relative p-4">
        <img
          src={`/assets/images/h6-b2.png`}
          alt=""
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="w-full h-full bg-black/30 absolute z-10"></div>
        <p className="text-white text-xl relative z-20">Up to 50% Off</p>
        <h1 className="text-2xl xl:text-4xl font-semibold text-white relative z-20 mt-2 text-center">
          Dumbbells Fitness Mat
        </h1>
        <Link
          href="/single-product"
          className=" relative z-20 bg-white text-qblack px-5 py-3 text-sm font-semibold hover:bg-qh6-orange hover:text-white transition-all duration-300 mt-8"
        >
          Shop Now
        </Link>
      </div>
      {/* card */}
      <div className="w-full aspect-[600/350] flex flex-col justify-center items-center relative p-4">
        <img
          src={`/assets/images/h6-b3.png`}
          alt=""
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="w-full h-full bg-black/30 absolute z-10"></div>
        <p className="text-white text-xl relative z-20">Up to 38% Off</p>
        <h1 className="text-2xl xl:text-4xl font-semibold text-white relative z-20 mt-2 text-center">
          Dumbbells & Kettlebell
        </h1>
        <Link
          href="/single-product"
          className=" relative z-20 bg-white text-qblack px-5 py-3 text-sm font-semibold hover:bg-qh6-orange hover:text-white transition-all duration-300 mt-8"
        >
          Shop Now
        </Link>
      </div>
      {/* second banner  */}
      <div className="w-full sm:col-span-3 aspect-[1860/556] min-h-[300px] overflow-hidden relative flex items-center">
        <img
          src={`/assets/images/h6-b4.png`}
          alt=""
          className="w-full h-full object-cover absolute z-0"
        />
        <div className="w-full h-full bg-black/50 absolute z-10"></div>
        <div className=" px-4 sm:px-8  2xl:px-[110px]">
          <p className="text-white text-xl relative z-20 flex justify-center items-center gap-8 w-fit before:w-12 before:h-0.5 before:bg-white pb-1">
            Sports Tank
          </p>
          <h1 className=" text-3xl sm:text-5xl sm:leading-[58px]  xl:text-[66px] xl:leading-[76px] font-semibold text-white relative z-20 mt-2 ">
            Sports Tank Top For <br /> Man Collection
          </h1>
          <p className="text-white text-xl relative z-20 mb-8 mt-3">
            Up to 38% Off for sport product
          </p>
          <Link
            href="/single-product"
            className=" relative z-20 bg-white text-qblack px-5 py-3 text-sm font-semibold hover:bg-qh6-orange hover:text-white transition-all duration-300 "
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
