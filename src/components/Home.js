import React from "react";

export default function Home() {
	return (
		<div className="relative w-screen h-screen bg-[url('./imgs/homebg.jpg')] bg-center bg-cover bg-fixed" id="home">
			<div className="flex items-center justify-center text-center bg-black/50 text-white w-screen h-1/3 absolute top-1/3">
				<div
					className="font-thin font-sans tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl px-1"
					data-aos="zoom-in">
					Hi, my name's Aniket
				</div>
			</div>
		</div>
	);
}
