import Loading from "@/components/loading";
import LoadImage from "@/components/preload";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
    const [load, setLoad] = useState(false);
    const [imageloaded, setLmageloaded] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
            await LoadImage(["https://i.imgur.com/nal1uUk.jpg", "lifestyle-night-city.jpg"]);
            setLmageloaded(true);
        }
        if (imageloaded) {
            setLoad(true);
        } else {
            fetchData();
        }
    }, [imageloaded]);
    return (
        <>
            <Component {...pageProps} />
            <Loading loaded={load} />
        </>
    );
}
