import { SmoothScrollProvider } from "@/components/smoothContext";
import Hero from "@/components/hero";
import MySelf from "@/components/myself";
export default function Home() {
    return (
        <SmoothScrollProvider options={{ smooth: true, smoothMobile: true }}>
            {/* <Hero /> */}
            <MySelf />
        </SmoothScrollProvider>
    );
}
// fade-up		 fade-down		 fade-right		 fade-left
// fade-up-right fade-up-left	 fade-down-right fade-down-left
// zoom-in-up	 zoom-in-down	 zoom-in-left	 zoom-in-right
// zoom-out-up	 zoom-out-down	 zoom-out-right	 zoom-out-left
