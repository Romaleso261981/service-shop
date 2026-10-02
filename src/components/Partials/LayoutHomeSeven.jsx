"use client";
import { useState } from "react";
import HeaderSeven from "./Headers/HeaderSeven";
import FooterSeven from "./Footers/FooterSeven";
import Drawer from "../Mobile/Drawer";

export default function LayoutHomeSeven({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <HeaderSeven drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || ""}`}>
          {children && children}
        </div>
        <FooterSeven />
      </div>
    </>
  );
}
