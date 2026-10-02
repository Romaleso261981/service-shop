"use client";
import { useState } from "react";
import DiscountBanner from "../HomeTwo/DiscountBanner";
import Footer from "./Footers/FooterTwo";
import HeaderTwo from "./Headers/HeaderTwo";
import Drawer from "../Mobile/Drawer";

export default function LayoutHomeTwo({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <HeaderTwo drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
        <DiscountBanner />
        <Footer />
      </div>
    </>
  );
}
