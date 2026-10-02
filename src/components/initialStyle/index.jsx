"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import { usePathname } from 'next/navigation';

function InitialStyle() {
    useEffect(() => {
        AOS.init();
      }, []);
        const location = usePathname();
        useEffect(() => {
            if (location.pathname === "/home-two") {
                document.body.classList.add("home-two");
            } else if (location.pathname === "/home-four") {
                document.body.classList.add("home-four");
            } else if (location.pathname === "/") {
                document.body.classList.remove("home-two");
                document.body.classList.add("home-one");
            }
            document.body.classList.add("home-one");
            return () => {
                document.body.classList.remove("home-two");
                document.body.classList.remove("home-four");
                document.body.classList.add("home-one");
            };
        }, [location.pathname]);
}

export default InitialStyle