import random from "@/helpers/random";
import skillInfo from "../../data/skills.json";
import { useEffect, useState } from "react";
export default function Skill() {
    const Skills = skillInfo.skills;
    const [skill, setSkill] = useState([]);
    const speed = [1.5, -1.5]; // max min
    const delay = [0.5, 0]; // max min
    useEffect(() => {
        Skills.forEach((e, x) => {
            e.data.forEach((r, y) => {
                skill.push(
                    <div key={"skill-" + r.replace(" ", "-")} data-scroll data-scroll-speed={random(...speed)} data-scroll-delay={random(...delay)} className="skill" type={(x + 1).toString()}>
                        {r}
                    </div>
                );
            });
        });
    }, []);
    return (
        <div className="flex w-full mt-[30rem] justify-around flex-wrap">
            <div data-scroll data-scroll-speed={4} className="font-bold text-5xl sm:text-8xl text-gray-200 md:w-[45%] md:mb-0 mb-[50px] w-full flex justify-center items-center">
                skills
            </div>
            <div className="grow md:max-w-[45%] gap-x-4 gap-y-6 flex flex-wrap text-gray-100 lg:text-xl max-w-full">{skill}</div>
        </div>
    );
}
