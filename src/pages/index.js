import Image from "next/image";
import { Inter } from "next/font/google";
import Toggler from "@/components/ModeToggler";
import Loading from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
		<div>
			<p className="text-9xl">LOL</p>
			<img src="lifestyle-night-city.jpg"></img>
		</div>
	);
}
