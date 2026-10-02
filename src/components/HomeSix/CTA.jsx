import React from "react";
import Link from "next/link";

function CTA() {
  return (
    <div className="w-full relative">
      <img
        src={`/assets/images/h6-cta.png`}
        alt=""
        className="w-full h-full object-cover absolute"
      />
      <div className="w-full h-full bg-black/50 absolute"></div>
      <div className="categories-section-wrapper relative w-full">
        <div className="container-x flex justify-between items-center mx-auto py-12 gap-4">
          <h1 className="text-white text-2xl sm:text-4xl font-medium flex-1 ">
            Looking for 68% Discount & Free Shipping Product ?
          </h1>
          <Link
            className=" relative z-20 bg-white text-qblack px-5 py-3 text-sm font-semibold hover:bg-qh6-orange hover:text-white transition-all duration-300 "
            href="/single-product"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTA;
