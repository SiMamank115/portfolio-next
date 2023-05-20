import { Nunito } from "next/font/google";
import Toggler from "@/components/ModeToggler";
import { useEffect, useState } from "react";
import Compact from "@/helpers/classname";
import { gsap } from "gsap";
const nunito = Nunito({ subsets: ["latin"] });
export default function Home() {
    const animation = ["fade-up", "fade-down", "fade-right", "fade-left", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out-up", "zoom-out-down", "zoom-out-right", "zoom-out-left"],
        hero_text = "faiz ramadhan",
        [aos_hooks, set_aos_hooks] = useState({}),
        [text_animation, set_text_animation] = useState([]),
        [animated, setAnimated] = useState(false),
        [textFinished, seTextFinished] = useState(0),
        textDelay = 50,
        tl = gsap.timeline();
    function text_event() {
        seTextFinished((x) => x + 1);
    }
    useEffect(() => {
        console.log(textFinished);
        if (textFinished == hero_text.length * 2) {
            tl.to(".hero-content", {
                duration: 1,
                filter: "blur(16px)",
                scale: 0.5,
                y: "-=100px",
                opacity: 0,
                delay: 0.5,
                "transition-delay": 0,
                ease: "expo.out",
            });
        }
    }, [textFinished]);
    useEffect(() => {
        if (!animated) setAnimated(true);
        set_text_animation(
            hero_text
                .toUpperCase()
                .split("")
                .map((e, x) => {
                    let keyname = "text-anim-" + (e == " " ? "space" : e) + "-" + x;
                    set_aos_hooks((previousState) => {
                        let res = { ...previousState };
                        res[keyname] = animation[Math.floor(Math.random() * animation.length)];
                        return res;
                    });
                    return (
                        <div onTransitionEndCapture={text_event} data-aos-delay={textDelay * x} key={keyname} className={Compact("block my-0", e == " " ? "px-[1%]" : "p-0", nunito.className)} data-aos-easing="ease-out-back" data-aos={aos_hooks[keyname]}>
                            {e}
                        </div>
                    );
                })
        );
        if (text_animation.length != 0) return;
    }, [animated]);
    return (
        // <SmoothScrollProvider options={{ smooth: true }}>
            <div className="text-3xl sm:text-6xl flex min-h-screen flex-wrap justify-center items-center font-extrabold hero-content">{text_animation}</div>
        // </SmoothScrollProvider>
    );
}
// fade-up		 fade-down		 fade-right		 fade-left
// fade-up-right fade-up-left	 fade-down-right fade-down-left
// zoom-in-up	 zoom-in-down	 zoom-in-left	 zoom-in-right
// zoom-out-up	 zoom-out-down	 zoom-out-right	 zoom-out-left
