import { Nunito } from "next/font/google";
import Toggler from "@/components/ModeToggler";
import { useContext, useEffect, useState } from "react";
import Compact from "@/helpers/classname";
import { gsap } from "gsap";
import { SmoothScrollProvider } from "@/components/smoothContext";
import Hero from "@/components/hero";
const nunito = Nunito({ subsets: ["latin"] });
export default function Home() {
    
    return (
        <SmoothScrollProvider options={{ smooth: true, smoothMobile:true }}>
            <Hero />
            <div data-scroll-section className="bg-[#1C2737] text-3xl sm:text-6xl flex min-h-screen flex-wrap justify-center items-center font-extrabold section-1">LOL</div>
        </SmoothScrollProvider>
    );
}
// fade-up		 fade-down		 fade-right		 fade-left
// fade-up-right fade-up-left	 fade-down-right fade-down-left
// zoom-in-up	 zoom-in-down	 zoom-in-left	 zoom-in-right
// zoom-out-up	 zoom-out-down	 zoom-out-right	 zoom-out-left
