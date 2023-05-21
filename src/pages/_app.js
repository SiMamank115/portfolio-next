import Loading from "@/components/loading";
import LoadImage from "@/components/preload";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/loco.css";
import "aos/dist/aos.css";
import { Quicksand } from "next/font/google";
import { useEffect, useState } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
    const [load, setLoad] = useState(false);
    const [imageloaded, setLmageloaded] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            await LoadImage(["layer-1-long.webp"]);
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
