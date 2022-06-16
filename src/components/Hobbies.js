import React from "react";

export default function Hobbies() {
	return (
		<div className="w-screen h-screen bg-[url('./imgs/hobbiesbg.jpg')] bg-center bg-cover bg-fixed justify-items-center overflow-hidden" id="hobbies">
			<div className="flex w-screen">
				<div className="m-auto">
					<div
						className="font-medium text-gray-300 tracking-tighter text-base sm:text-2xl sm:text-3xl font-sans w-full rounded-lg bg-black/70 mt-2 sm:mt-4 shadow-lg p-2 sm:p-4 mb-3 sm:mb-12"
						data-aos="zoom-in">
						In my free time, I like to..
					</div>
				</div>
			</div>
			<div className="flex w-screen mb-2 sm:mb-10">
				<div
					className="w-1/2 sm:w-1/3 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 ml-2 mr-2 sm:mr-auto sm:ml-2"
					data-aos="fade-right">
					<div className="font-bold text-gray-300 text-sm sm:text-xl mb-2">
						Solve Rubik's Cubes
					</div>
					<div className="text-white text-xs sm:text-base mb-3">
						I've been a professional speedcuber since 2015. I hold a Guinness
						World Record, am the current runner-up Asian Champion, former second
						runner up World Champion, and also make a short appearance on the
						Netflix Movie 'The Speed Cubers.'
					</div>
					<button class="text-xs sm:text-base bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2">
						My WCA profile
					</button>
				</div>
				<div
					className="relative w-1/2 sm:w-1/3 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 mr-1 sm:mr-2"
					data-aos="fade-left">
					<div className="font-bold text-gray-300 text-sm sm:text-xl mb-2">
						Code
					</div>
					<div className="text-white text-xs sm:text-base">
						I aspire to build systems for sustainability, medical advances, and
						convenience. I often work on small individual projects and would
						some day want to transition to a startup.
					</div>
					<button class="absolute bottom-3 text-xs sm:text-base bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2">
						My Github
					</button>
				</div>
			</div>
			<div className="flex w-screen">
				<div
					className="relative w-1/2 sm:w-1/3 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 ml-2 mr-2 sm:mr-auto sm:ml-2"
					data-aos="fade-right">
					<div className="font-bold text-gray-300 text-sm sm:text-xl mb-2">
						Travel and snap
					</div>
					<div className="text-white text-xs sm:text-base">
						Always planning trips in the shortest of breaks: 21 countries and
						counting! I love exploring new cultures, meeting new people,
						learning new perspectives, and occasionally capturing moments. Check
						out my photography portfolio below!
					</div>
					<button class="absolute bottom-3 sm:bottom-4 text-xs sm:text-base bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2">
						My Medium Page
					</button>
				</div>
				<div
					className="w-1/2 sm:w-1/3 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 mr-1 sm:mr-2"
					data-aos="fade-left">
					<div className="font-bold text-gray-300 text-sm sm:text-xl mb-3">
						Read & Write occasionally
					</div>
					<div className="text-white text-xs sm:text-base mb-3">
						To stimulate ideas, I devour non-fiction and educational Youtube. I
						journal daily but realized I still bear anxiety while writing
						anything that's public. To get over this fear, I started writing an
						article a month since 2022, mostly focussed on my growth and
						theories.
					</div>
					<button class="text-xs sm:text-base bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2">
						My Unsplash
					</button>
				</div>
			</div>
		</div>
	);
}
