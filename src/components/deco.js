import random from "@/helpers/random";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Decoration() {
    const [star, setStar] = useState([]),
        ratio = [15, 5],
        top = [0, 100],
        left = [0, 100],
        img = [1, 9],
        delay = [750, 1500];
    const [planet, setPlanet] = useState([]),
        img2 = [1, 6],
        speed = [-6, 6],
        opacity = [0.95, 0.35],
        colors = ["#2a9d8f", "#e9c46a", "#f4a261", "#f4a261", "#e76f51", "#f8f9fa"];
    // colors = ["#f8f9fa"];
    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            if (random(100, 0, true) > 95) {
                let ratio2 = [250, 150];
                let selectedimg = random(...img2, true);
                if (selectedimg == 3) ratio2 = [150, 100];
                if (selectedimg == 6) ratio2 = [350, 250];
                let wdhg = random(...ratio2),
                    styles = { opacity: random(...opacity), background: colors[random(colors.length - 1, 0, true)], top: random(...top) + "%", left: random(...left) + "%", width: wdhg + "px", height: wdhg + "px" };
                planet.push(<div key={"planet-" + i} data-img={selectedimg} className="planet" data-scroll data-scroll-speed={random(...speed)} data-scroll-direction={"horizontal"} data-aos-delay={random(...delay)} style={styles}></div>);
            } else {
                let wdhg = random(...ratio),
                    styles = { top: random(...top) + "%", left: random(...left) + "%", width: wdhg + "px", height: wdhg + "px" };
                star.push(<div key={"star-" + i} data-img={random(...img, true)} className="star" data-aos={"zoom-in"} data-aos-delay={random(...delay)} style={styles}></div>);
            }
        }
    }, []);
    return [...star, ...planet];
}
