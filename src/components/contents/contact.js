import random from "@/helpers/random";
import contactInfo from "../../data/contact.json";
import { useEffect, useState } from "react";
export default function Contact() {
    const Contact = contactInfo.contacts;
    const [contact, setContact] = useState([]);
    const speed2 = [0.75, -0.75]; // max min
    const delay2 = [1, 0]; // max min
    useEffect(() => {
        const ringCol = ["#f72585", "#7209b7", "#bf0603", "#2a9d8f", "#ee9b00", "#38b000"];
        Contact.forEach((e, x) => {
            contact.push(
                !e.link ? (
                    <div key={"contact-" + e.name.toLowerCase().replace(" ", "-")} data-scroll data-scroll-speed={random(...speed2)} data-scroll-delay={random(...delay2)} className="contact contact-tooltip group">
                        <div className="contact-header">{e.tooltip ?? ""}</div>
                        <div className="contact-body">
                            <div data-img={e.img} className="contact-icon"></div> {e.name}
                        </div>
                    </div>
                ) : (
                    <a style={{ "--tw-ring-color": ringCol[random(ringCol.length - 1, 0, true)] }} target="_blank" href={e.link} key={"contact-" + e.name.toLowerCase().replace(" ", "-")} data-scroll data-scroll-speed={random(...speed2)} data-scroll-delay={random(...delay2)} className="contact">
                        <div className="contact-header">{e.tooltip ?? ""}</div>
                        <div className="contact-body">
                            <div data-img={e.img} className="contact-icon"></div> {e.name}
                        </div>
                    </a>
                )
            );
        });
    }, []);
    return (
        <div className="flex w-full mt-[30rem] justify-around  lg:flex-row flex-col-reverse flex-wrap">
            <div className="grow lg:max-w-[45%] gap-x-4 gap-y-6 flex flex-wrap text-gray-100 lg:text-xl max-w-full">{contact}</div>
            <div data-scroll data-scroll-speed={4} className="font-bold text-5xl sm:text-8xl text-gray-200 lg:w-[45%] lg:mb-0 mb-[50px] w-full flex justify-center items-center">
                contacts
            </div>
        </div>
    );
}
