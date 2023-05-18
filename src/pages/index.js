import Image from "next/image";
import { Inter } from "next/font/google";
import Toggler from "@/components/ModeToggler";
import Loading from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
		<div>
			<img src="lifestyle-night-city.jpg" className="h-[90vh]"></img>
			<div className="text-9xl flex">
				<div className="block m-0 p-0" data-aos="fade-up">L</div>
				<div className="block m-0 p-0" data-aos="fade-up" data-aos-delay="100">O</div>
				<div className="block m-0 p-0" data-aos="fade-up" data-aos-delay="200">L</div>
			</div>
		</div>
	);
}
