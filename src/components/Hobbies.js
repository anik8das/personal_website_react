import React from "react";

export default function Hobbies() {
	function openLink(link) {
		window.open(link, "_blank");
	}
	return (
		<div
			className="h-screen bg-[url('./imgs/hobbiesbg.jpg')] bg-center bg-cover sm:bg-fixed justify-items-center overflow-hidden"
			id="hobbies">
			<div className="flex w-full">
				<div className="m-auto">
					<div
						className="font-medium text-gray-300 tracking-tighter text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl font-sans w-full rounded-lg bg-black/70 mt-2 sm:mt-4 lg:mt-6 2xl:mt-8 shadow-lg p-2 sm:p-4 mb-3 sm:mb-12"
						data-aos="zoom-in"
						data-aos-duration="700">
						In my free time, I like to..
					</div>
				</div>
			</div>
			<div className="flex w-full mb-2 sm:mb-5 lg:mb-8 xl:mb-11">
				<div
					className="w-1/2 sm:w-5/12 lg:w-1/3 2xl:w-1/4 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 ml-1 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6 mr-2 sm:mr-auto"
					data-aos="fade-down-right"
					data-aos-duration="700">
					<div className="font-bold text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-2 sm:mb-3">
						Solve Rubik's Cubes
					</div>
					<div className="text-white text-xs sm:text-sm lg:text-base 2xl:text-xl mb-5">
						I've been a professional speedcuber since 2015. I hold a
						Guinness World Record, am the current runner-up Asian
						Champion, former second runner up World Champion, and
						also make a short appearance on the Netflix Movie 'The
						Speed Cubers.'
					</div>
					<button
						className="text-xs sm:text-sm lg:text-base 2xl:text-xl bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2"
						onClick={() =>
							openLink(
								"https://www.worldcubeassociation.org/persons/2015DASA02"
							)
						}>
						My WCA profile
					</button>
				</div>
				<div
					className="relative w-1/2 sm:w-5/12 lg:w-1/3 2xl:w-1/4 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6"
					data-aos="fade-down-left"
					data-aos-duration="700">
					<div className="font-bold text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-2 sm:mb-3">
						Code
					</div>
					<div className="text-white text-xs sm:text-sm lg:text-base 2xl:text-xl">
						I aspire to build systems for sustainability, medical advances,
						general convenience, and combating inequality. I often work on small
						individual projects and love testing ideas in an agile format.
					</div>
					<button
						className="absolute bottom-3 sm:bottom-5 text-xs sm:text-sm lg:text-base 2xl:text-xl bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2"
						onClick={() => openLink("https://github.com/anik8das")}>
						My Github
					</button>
				</div>
			</div>
			<div className="flex w-full">
				<div
					className="relative w-1/2 sm:w-5/12 lg:w-1/3 2xl:w-1/4 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 ml-1 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-5 2xl:ml-6 mr-2 sm:mr-auto"
					data-aos="fade-up-right"
					data-aos-duration="700">
					<div className="font-bold text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-2 sm:mb-3">
						Travel and snap
					</div>
					<div className="text-white text-xs sm:text-sm lg:text-base 2xl:text-xl">
						You can find me planning trips in the shortest of breaks: 21
						countries and counting! I love exploring new cultures, meeting new
						people, learning new perspectives, and occasionally capturing
						moments. Check out my photography portfolio below!
					</div>
					<button
						className="absolute bottom-3 sm:bottom-5 text-xs sm:text-sm lg:text-base 2xl:text-xl bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2"
						onClick={() =>
							openLink("https://unsplash.com/@anik8das")
						}>
						My Unsplash
					</button>
				</div>
				<div
					className="w-1/2 sm:w-5/12 lg:w-1/3 2xl:w-1/4 rounded overflow-hidden bg-black/60 shadow-lg p-3 sm:p-5 mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6"
					data-aos="fade-up-left"
					data-aos-duration="700">
					<div className="font-bold text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-2 sm:mb-3">
						Read & write occasionally
					</div>
					<div className="text-white text-xs sm:text-sm lg:text-base 2xl:text-xl mb-4">
						To stimulate ideas, I devour non-fiction and educational Youtube. I
						journal daily but realized I still bear anxiety while writing
						anything that's public. To get over this fear, I started writing an
						article a month since 2022, mostly focussed on my growth and
						theories.
					</div>
					<button
						className="text-xs sm:text-sm lg:text-base 2xl:text-xl bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent rounded p-2"
						onClick={() =>
							openLink("https://medium.com/@anik8das")
						}>
						My Medium Page
					</button>
				</div>
			</div>
		</div>
	);
}
