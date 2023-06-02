import Loading from "@/components/loading";
import LoadImage from "@/components/preload";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/loco.css";
import "aos/dist/aos.css";
import { Head } from "next/document";
import { Quicksand } from "next/font/google";
import { useEffect, useState } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
    const [load, setLoad] = useState(false);
    const [imageloaded, setLmageloaded] = useState(false);
    useEffect(() => {
        async function fetchData() {
            await LoadImage(["layer-1.webp", "layer-2.webp", "layer-3.webp", "layer-4.webp", "me.webp"]);
            setLmageloaded(true);
        }
        if (imageloaded) {
            setLoad(true);
        } else {
            fetchData();
        }
    }, [imageloaded]);
    return (
        <main data-scroll-container className={quicksand.className}>
            <Component {...pageProps} />
            <Loading loaded={load} />
        </main>
    );
}
