import { useContext, useEffect, useState } from "react";
import { SmoothScrollContext } from "./smoothContext";
import Decoration from "./deco";
import MySelf, { MyImage } from "./contents/myself";
import Skill from "./contents/skill";
import Project from "./contents/project";
import Contact from "./contents/contact";
export default function Content() {
    const { scroll } = useContext(SmoothScrollContext);
    return (
        <div data-scroll-section className="bg-gradient-to-b from-[#1C2737] via-[#07090d] to-[#07090d] px-8 pt-32 pb-[48rem] flex min-h-[100vh] flex-wrap justify-around items-center section-1">
            <Decoration />
            {/* <MyImage />
            <MySelf /> */}
            {/* <Skill /> */}
            {/* <Project /> */}
            <Contact />
        </div>
    );
}
