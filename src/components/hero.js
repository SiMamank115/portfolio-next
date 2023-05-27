import { SmoothScrollContext } from "./smoothContext";
import { Nunito } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import Compact from "@/helpers/classname";
import { gsap } from "gsap";
const nunito = Nunito({ subsets: ["latin"] });
export default function Hero() {
    const { scroll } = useContext(SmoothScrollContext);
    const animation = ["fade-up", "fade-down", "fade-right", "fade-left", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out-up", "zoom-out-down", "zoom-out-right", "zoom-out-left"],
        hero_text = "faiz ramadhan",
        [aos_hooks, set_aos_hooks] = useState({}),
        [text_animation, set_text_animation] = useState([]),
        [animated, setAnimated] = useState(false),
        [textFinished, seTextFinished] = useState(0),
        textDelay = process.env.NEXT_PUBLIC_DEV ? 0 : 50,
        tl = gsap.timeline();
    function text_event() {
        seTextFinished((x) => x + 1);
    }
    useEffect(() => {
        if (textFinished == hero_text.length * 2) {
            tl.to(".hero-content", {
                duration: 0.5,
                filter: "blur(16px)",
                scale: 0.5,
                y: "-=100px",
                opacity: 0,
                delay: process.env.NEXT_PUBLIC_DEV ? 0 : 0.5,
                ease: "ease.out",
                onComplete: () => {
                    document.querySelectorAll(".hero-content > .hero-text-animation").forEach((e) => {
                        e.remove();
                    });
                    document.querySelector(".hero-content").removeAttribute("style");
                    document.querySelector(".section-0").classList.add("bg-parallax");
                },
            })
                .to(".parallax-layer-1", {
                    duration: process.env.NEXT_PUBLIC_DEV ? 0.1 : 0.4,
                    onStart: () => document.querySelector(".parallax-layer-1").classList.add("init", "transition-[transform]", "duration-1000"),
                    onComplete: () =>
                        setTimeout(() => {
                            document.querySelector(".parallax-layer-1").classList.remove("transition-[transform]", "duration-1000");
                        }, process.env.NEXT_PUBLIC_DEV?0 : 600),
                })
                .to(".parallax-layer-2", {
                    duration: process.env.NEXT_PUBLIC_DEV ? 0.1 : 0.4,
                    onStart: () => document.querySelector(".parallax-layer-2").classList.add("init", "transition-[transform]", "duration-1000"),
                    onComplete: () =>
                        setTimeout(() => {
                            document.querySelector(".parallax-layer-2").classList.remove("transition-[transform]", "duration-1000");
                        }, process.env.NEXT_PUBLIC_DEV?0 : 600),
                })
                .to(".parallax-layer-3", {
                    duration: process.env.NEXT_PUBLIC_DEV ? 0.1 : 0.4,
                    onStart: () => document.querySelector(".parallax-layer-3").classList.add("init", "transition-[transform]", "duration-1000"),
                    onComplete: () =>
                        setTimeout(() => {
                            document.querySelector(".parallax-layer-3").classList.remove("transition-[transform]", "duration-1000");
                        }, process.env.NEXT_PUBLIC_DEV?0 : 600),
                })
                .to(".parallax-layer-4", {
                    duration: process.env.NEXT_PUBLIC_DEV ? 0.1 : 0.4,
                    onStart: () => document.querySelector(".parallax-layer-4").classList.add("init", "transition-[transform]", "duration-1000"),
                    onComplete: () =>
                        setTimeout(() => {
                            document.querySelector(".parallax-layer-4").classList.remove("transition-[transform]", "duration-1000");
                        }, process.env.NEXT_PUBLIC_DEV?0 : 600),
                })
                .call(() => {
                    setTimeout(() => {
                        scroll.start();
                    }, process.env.NEXT_PUBLIC_DEV? 0 : 1000);
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
                        <div onTransitionEndCapture={text_event} data-aos-delay={textDelay * x} key={keyname} className={Compact("block my-0 hero-text-animation", e == " " ? "px-[1%]" : "p-0", nunito.className)} data-aos-easing="ease-out-back" data-aos={aos_hooks[keyname]}>
                            {e}
                        </div>
                    );
                })
        );
        if (text_animation.length != 0) return;
    }, [animated]);
    // console.log(scroll?.init);
    return (
        <div data-scroll-section className="section-0">
            <div className="text-3xl sm:text-6xl flex min-h-screen flex-wrap justify-center items-center font-extrabold hero-content">{text_animation}</div>
            <button className="fixed top-0" onClick={() => scroll?.destroy?.() || scroll?.init?.()}>
                Refresh scroll
            </button>
            <button
                className="fixed top-6"
                onClick={() => {
                    gsap.to(".parallax-layer-1", {
                        duration: 1,
                        onStartParams: document.querySelector(".parallax-layer-1"),
                        onStart: (target) => console.log(1),
                        onComplete: () => console.log(2),
                    });
                }}
            >
                Debug
            </button>
            <div data-scroll-speed={5} data-scroll key={"parallax-layer-1"} id={"parallax-layer-1"} className={(process.env.NEXT_PUBLIC_DEV?"hidden " : "") + "parallax-layer-1 parallax-layer"}></div>
            <div data-scroll-speed={5} data-scroll key={"parallax-layer-1-extender"} id={"parallax-layer-1-extender"} className={(process.env.NEXT_PUBLIC_DEV?"hidden " : "") + "parallax-layer-1-extender parallax-layer"}></div>
            <div data-scroll-speed={3.5} data-scroll key={"parallax-layer-2"} id={"parallax-layer-2"} className={(process.env.NEXT_PUBLIC_DEV?"hidden " : "") + "parallax-layer-2 parallax-layer"}></div>
            <div data-scroll-speed={1} data-scroll key={"parallax-layer-3"} id={"parallax-layer-3"} className={(process.env.NEXT_PUBLIC_DEV?"hidden " : "") + "parallax-layer-3 parallax-layer"}></div>
            <div data-scroll-speed={-1} data-scroll key={"parallax-layer-4"} id={"parallax-layer-4"} className={(process.env.NEXT_PUBLIC_DEV?"hidden " : "") + "parallax-layer-4 parallax-layer"}></div>
        </div>
    );
}
