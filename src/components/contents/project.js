import random from "@/helpers/random";
import portoInfo from "../../data/porto.json";
import { useEffect, useState } from "react";
export default function Project() {
    const Porto = portoInfo.portofolio;
    const [porto, setPorto] = useState([]);
    const speed2 = [0.75, -0.75]; // max min
    const delay2 = [1, 0]; // max min
    useEffect(() => {
        const ringCol = ["#ee9b00", "#38b000", "#d8f3dc", "#d8f3dc"];
        Porto.forEach((e, x) => {
            porto.push(
                !e.link ? (
                    <div key={"porto-" + e.title.replace(" ", "-")} data-scroll data-scroll-speed={random(...speed2)} data-scroll-delay={random(...delay2)} className="porto flex-wrap" type={e.type.toString()}>
                        <div className="porto-header">{e.title}</div>
                        <div className="porto-body" dangerouslySetInnerHTML={{ __html: e.body }}></div>
                    </div>
                ) : (
                    <a style={{ "--tw-ring-color": ringCol[random(ringCol.length - 1, 0, true)] }} target="_blank" href={e.link} key={"porto-" + e.title.replace(" ", "-")} data-scroll data-scroll-speed={random(...speed2)} data-scroll-delay={random(...delay2)} className="porto flex-wrap" type={e.type.toString()}>
                        <div className="porto-header">{e.title}</div>
                        <div className="porto-body" dangerouslySetInnerHTML={{ __html: e.body }}></div>
                    </a>
                )
            );
        });
    }, []);
    return (
        <div className="flex w-full mt-[30rem] justify-around flex-wrap">
            <div data-scroll data-scroll-speed={4} className="font-bold text-5xl sm:text-8xl text-gray-200 mb-[50px] w-full flex justify-center items-center">
                projects
            </div>
            <div className="grow gap-x-8 gap-y-12 flex flex-wrap text-gray-100 lg:text-xl max-w-full">{porto}</div>
        </div>
    );
}
