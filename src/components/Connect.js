import React from "react";

export default function Home() {
	return (
		<div className=" items-center justify-center w-screen h-screen bg-[url('./imgs/connectbg.jpg')] bg-center bg-cover bg-fixed">
			<div className="flex items-center justify-center text-center bg-white/40 text-black w-screen pb-3">
				<div
					className="font-thin font-sans tracking-wide text-5xl sm:text-6xl mt-3"
					data-aos="zoom-in">
					Connect with me!
				</div>
			</div>
			<div className="items-center justify-center text-center bg-white/40 text-black w-screen pb-1">
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" data-aos="flip-up">
					LinkedIn
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" data-aos="flip-up">
					Facebook
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" data-aos="flip-up">
					Email
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" data-aos="flip-up">
					Instagram
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" data-aos="flip-up">
					Twitter
				</button>
				
			</div>
		</div>
	);
}
