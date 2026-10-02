"use client";
import React, { useState } from "react";

function ToggleBtn() {
  const [switchDashboard, setSwitchDashboard] = useState(false);
  return (
    <button
      onClick={() => setSwitchDashboard(!switchDashboard)}
      type="button"
      className={`w-[73px] h-[31px] border border-[#D9D9D9] rounded-full relative  transition-all duration-300 ${
        switchDashboard ? " bg-qblack" : " bg-white"
      } `}
    >
      <div
        className={`w-[23px] h-[23px]  rounded-full absolute top-[3px] transition-all duration-300 ease-in-out ${
          switchDashboard ? "left-[44px] bg-white " : "left-[4px] bg-qblack"
        }`}
      ></div>
    </button>
  );
}

export default ToggleBtn;
