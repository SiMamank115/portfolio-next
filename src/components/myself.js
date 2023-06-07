import { useContext, useEffect, useState } from "react";
import skillInfo from "../data/skills.json";
import portoInfo from "../data/porto.json";
import { SmoothScrollContext } from "./smoothContext";
import random from "@/helpers/random";
import Stars from "./stars";
export default function MySelf() {
    const { scroll } = useContext(SmoothScrollContext);
    const Skills = skillInfo.skills;
    const [skill, setSkill] = useState([]);
    const speed = [1.5, -1.5]; // max min
    const delay = [0.5, 0]; // max min
    useEffect(() => {
        Skills.forEach((e, x) => {
            e.data.forEach((r, y) => {
                skill.push(
                    <div key={"skill-" + r.replace(" ", "-")} data-scroll data-scroll-speed={random(...speed)} data-scroll-delay={random(...delay)} className="card" type={(x + 1).toString()}>
                        {r}
                    </div>
                );
            });
        });
    }, []);
    const Porto = portoInfo.portofolio;
    const [porto, setPorto] = useState([]);
    const speed2 = [.75, -.75]; // max min
    const delay2 = [0.25, 0]; // max min
    useEffect(() => {
        Porto.forEach((e, x) => {
            porto.push(
                !e.link ? (
                    <div key={"porto-" + e.title.replace(" ", "-")} data-scroll data-scroll-speed={random(...speed2)} data-scroll-delay={random(...delay2)} className="porto flex-wrap" type={e.type.toString()}>
                        <div className="porto-header">{e.title}</div>
                        <div className="porto-body" dangerouslySetInnerHTML={{ __html: e.body }}></div>
                    </div>
                ) : (
                    <a target="_blank" href={e.link} key={"porto-" + e.title.replace(" ", "-")} data-scroll data-scroll-speed={random(...speed2)} data-scroll-delay={random(...delay2)} className="porto flex-wrap" type={e.type.toString()}>
                        <div className="porto-header">{e.title}</div>
                        <div className="porto-body" dangerouslySetInnerHTML={{ __html: e.body }}></div>
                    </a>
                )
            );
        });
    }, []);
    useEffect(() => {
        setTimeout(() => {
            scroll?.init();
        }, 100);
    }, [scroll]);
    return (
        <div data-scroll-section className="bg-gradient-to-b from-[#1C2737] via-[#07090d] to-[#07090d] px-8 py-32 flex min-h-[100vh] flex-wrap justify-around items-center section-1">
            <Stars />
            <div data-scroll data-scroll-speed={4} className="parallax-introduce sm:max-w-[45%] max-w-[80%] mb-[-200px] sm:mb-0">
                <div>
                    <div data-scroll data-scroll-speed={-1.5} className="parallax-introduce-image">
                        <img src={"/me.webp"}></img>
                    </div>
                </div>
            </div>
            <div className="grow sm:max-w-[45%] text-gray-100 lg:text-xl max-w-full">
                <p className="indent-5">
                    Nama saya <strong>Faiz Ramadhan</strong>, yang akrab dipanggil dengan <strong>Faiz</strong>. Lulus dari <strong>SMKN 5 Malang</strong> di tahun 2023. Lahir dan dibesarkan dikota bunga, Kota <strong>Malang</strong>.{" "}
                </p>
                <p className="mt-5 indent-5">
                    Memiliki pengalaman dalam bidang <strong>IT</strong> selama kurang lebih <strong>4</strong> tahun. Saya mengenal <strong>HTML</strong> pada saat masa awal - awal pandemi <strong>Covid-19</strong>, yang mana telah saya <strong>kembangkan sendiri</strong> selama <strong>4</strong> tahun secara <strong>otodidak</strong>.
                </p>
                <p className="mt-5 indent-5">
                    <strong>Menyukai</strong> hal - hal yang <strong>berelasi</strong> dengan kata <strong>digital</strong>. Termasuk diantara nya adalah <strong>Game</strong> dan <strong>Film</strong>. Bermimpi untuk bisa <strong>kuliah</strong> di <strong>luar negri</strong> dan bekerja di mega <strong>company</strong> / <strong>start up</strong>.
                </p>
            </div>
            <div className="flex w-full mt-[30rem] justify-around flex-wrap">
                <div data-scroll data-scroll-speed={4} className="skill-text font-bold text-8xl text-gray-200 md:w-[45%] md:mb-0 mb-[50px] w-full flex justify-center items-center">
                    skills
                </div>
                <div className="grow md:max-w-[45%] gap-x-4 gap-y-6 flex flex-wrap text-gray-100 lg:text-xl max-w-full">{skill}</div>
            </div>
            <div className="flex w-full mt-[30rem] justify-around flex-wrap">
                <div data-scroll data-scroll-speed={4} className="skill-text font-bold text-8xl text-gray-200 mb-[50px] w-full flex justify-center items-center">
                    projects
                </div>
                <div className="grow gap-x-4 gap-y-6 flex flex-wrap text-gray-100 lg:text-xl max-w-full">{porto}</div>
            </div>
        </div>
    );
}
// "color": "#",
// "title": "",
// "body": "",
// "button": false,
// "button_link": "/",
// "button_text": ""
