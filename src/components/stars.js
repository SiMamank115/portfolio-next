import random from "@/helpers/random";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Stars() {
    const [star, setStar] = useState([]),
        opacity = [0.95, 0.25], // max,min
        ratio = [15, 5],
        top = [0, 100],
        left = [0, 100],
        img = [1, 9];
    useEffect(() => {
        for (let i = 0; i < 50; i++) {
            let wdhg = random(...ratio),
                styles = {top: random(...top) + "%", left: random(...left) + "%", width: wdhg + "px", height: wdhg + "px" };
            star.push(<div key={"star-" + i} data-img={random(...img, true)} className="star" data-aos={"zoom-in"} data-aos-delay={1000} style={styles}></div>);
        }
    }, []);
    return star;
}
