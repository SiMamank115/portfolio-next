import Aos from "aos";
import { useEffect, useState } from "react";
export default function Loading({ loaded }) {
    let loadedDelay = process.env.NEXT_PUBLIC_DEV ? 0 : 1000;
    if (loaded) {
        setTimeout(() => {
            document.querySelector(".loading-screen")?.remove();
            Aos.init();
        }, loadedDelay);
    }
    return (
        <div className={"loading-screen fixed top-0 left-0 right-0 bottom-0 bg-[var(--background-start-rgb)] flex justify-center items-center z-[200] " + (loaded ? "loaded" : "")}>
            <div className={"flex justify-center items-center w-full h-full " + (loaded ? "loaded-svg" : "")}>
                <svg className={"animate-[spin_1s_ease-in-out_infinite] w-1/2 max-w-[200px] fill-zinc-800 " + (loaded ? "" : "")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                </svg>
                <svg className={"animate-[spin_1s_ease-in-out_.3s_reverse_infinite] w-1/3 max-w-[125px] absolute fill-zinc-800 " + (loaded ? "" : "")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
            </div>
        </div>
    );
}
