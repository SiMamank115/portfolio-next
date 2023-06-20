import { useEffect } from "react";
import { useState } from "react";

export default function Footer() {
    const text = "Copyright © 2023 Faiz Ramadhan. All rights reserved";
    const [spans] = useState([]);

    useEffect(() => {
        text.split("").forEach((e, x) => {
            spans.push(
                <span key={"footer-" + x} className={e == " " ? "sm:px-2 px-1" : ""} data-scroll data-scroll-speed={6} data-scroll-delay={Math.round((text.length * 1.22 - x) * 10) * 0.001}>
                    {e}
                </span>
            );
        });
    }, []);

    return (
        <div data-scroll-section className="relative z-[200] font-bold text-[#adb5bd] justify-center items-center section-2 text-3xl flex flex-wrap gap-y-3 px-4 w-full -mt-2 pb-48 bg-[#27292D]">
            {spans}
        </div>
    );
}
