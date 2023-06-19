import random from "@/helpers/random";
import { useState, useEffect } from "react";

export default function Decoration() {
    const conf = {
        star: {
            ratio: [15, 5],
            top: [95, 5],
            left: [95, 5],
            img: [9, 1],
            opacity: [0.95, 0.35],
            delay: [1500, 750],
            color: ["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#495057", "#212529"],
        },
        planet: {
            ratio: [250, 150],
            img: [6, 1],
            top: [100, 0],
            left: [100, 0],
            speed: [6, 1],
            opacity: [0.95, 0.35],
            delay: [0.75, 0.25],
            color: ["#2a9d8f", "#007200", "#e09f3e", "#9e2a2b", "#f8f9fa", "#3a7ca5", "#3c096c"],
        },
    };
    const [star, setStar] = useState([]);
    const [planet, setPlanet] = useState([]);
    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            if (random(100, 0, true) > 95 && planet.length < 5) {
                let { ratio, color, img, left, opacity, speed, top, delay } = conf.planet;
                let selectedimg = random(...img, true);
                if (selectedimg == 3) ratio = [150, 100];
                if (selectedimg == 6) ratio = [350, 250];
                let wdhg = random(...ratio),
                    speedMultiplier = random(1, 0, true) ? 1 : -1,
                    styles = { opacity: random(...opacity), background: color[random(color.length - 1, 0, true)], top: random(...top) + "%", left: random(...left) + "%", width: wdhg + "px", height: wdhg + "px" };
                planet.push(<div key={"planet-" + i} data-img={selectedimg} className="planet" data-scroll data-scroll-speed={random(...speed) * speedMultiplier} data-scroll-direction={"horizontal"} data-scroll-delay={random(...delay)} style={styles}></div>);
            } else {
                let { ratio, color, img, left, opacity, top, delay } = conf.star;
                let wdhg = random(...ratio),
                    styles = { background: color[random(color.length - 1, 0, true)], top: random(...top) + "%", left: random(...left) + "%", width: wdhg + "px", height: wdhg + "px" };
                star.push(<div key={"star-" + i} data-img={random(...img, true)} className="star" data-aos={"zoom-in"} data-aos-delay={random(...delay)} style={styles}></div>);
            }
        }
    }, []);
    return [...star, ...planet];
}
