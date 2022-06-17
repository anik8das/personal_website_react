import React from "react";

export default function Home() {
	function openLink(link){
		window.open(link, "_blank");
	}
	return (
		<div className=" items-center justify-center w-screen h-screen bg-[url('./imgs/connectbg.jpg')] bg-center bg-cover bg-fixed" id="social">
			<div className="flex items-center justify-center text-center bg-white/40 text-black w-screen pb-3">
				<div
					className="font-thin font-sans tracking-wide text-5xl sm:text-6xl xl:text-7xl 2xl:text-7xl mt-3"
					data-aos="zoom-in">
					Connect with me!
				</div>
			</div>
			<div className="items-center justify-center text-center bg-white/40 text-black text-medium sm:text-lg md:text-xl xl:text-2xl w-screen pb-1">
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" onClick={()=>{openLink("https://www.linkedin.com/in/anik8das/")}} data-aos="flip-up">
					LinkedIn
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" onClick={()=>{openLink("https://www.facebook.com/anik8das")}} data-aos="flip-up">
					Facebook
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" onClick={()=>{openLink("mailto:aniketdas001@gmail.com")}} data-aos="flip-up">
					Email
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3" onClick={()=>{openLink("https://www.instagram.com/anik8das/")}} data-aos="flip-up">
					Instagram
				</button>
				<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white p-2 border border-black hover:border-transparent rounded m-1 sm:m-3"  onClick={()=>{openLink("https://twitter.com/anik8das")}} data-aos="flip-up">
					Twitter
				</button>
				
			</div>
		</div>
	);
}
