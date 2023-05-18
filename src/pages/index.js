import { Inter, Merriweather } from "next/font/google";
import Toggler from "@/components/ModeToggler";
import { useEffect, useState } from "react";
export default function Home() {
    const animation = ["fade-up", "fade-down", "fade-right", "fade-left", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out-up", "zoom-out-down", "zoom-out-right", "zoom-out-left"],
        hero_text = "faiz ramadhan",
        [aos_hooks, set_aos_hooks] = useState({}),
        [text_animation, set_text_animation] = useState([]),
        [animated, setAnimated] = useState(false);
    useEffect(() => {
        if (!animated) setAnimated(true);
        set_text_animation(
            hero_text.toUpperCase().split("").map((e, x) => {
                let keyname = "text-anim-" + (e == " " ? "space" : e) + "-" + x;
                set_aos_hooks((previousState) => {
                    let res = { ...previousState };
                    res[keyname] = animation[Math.floor(Math.random() * animation.length)];
                    return res;
                });
                return (
                    <div data-aos-delay={50 * x} key={keyname} className={"block my-0 -mx-[1px] " + (e == " " ? "px-[1%]" : "p-0")} data-aos-easing="ease-out-back" data-aos={aos_hooks[keyname]}>
                        {e}
                    </div>
                );
            })
        );
        if (text_animation.length != 0) return;
    }, [animated]);
    return <div className="text-3xl sm:text-6xl flex min-h-screen flex-wrap justify-center items-center font-bold">{text_animation}</div>;
}
// fade-up		 fade-down		 fade-right		 fade-left
// fade-up-right fade-up-left	 fade-down-right fade-down-left
// zoom-in-up	 zoom-in-down	 zoom-in-left	 zoom-in-right
// zoom-out-up	 zoom-out-down	 zoom-out-right	 zoom-out-left
