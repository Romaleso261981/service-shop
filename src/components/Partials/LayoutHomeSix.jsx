"use client";
import { useState } from "react";
import HeaderSix from "./Headers/HeaderSix";
import FooterSix from "./Footers/FooterSix";
import Drawer from "../Mobile/Drawer";

export default function LayoutHomeSix({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <HeaderSix drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pt-[30px] "}`}>
          {children && children}
        </div>
        <FooterSix />
      </div>
    </>
  );
}
