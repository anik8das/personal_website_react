import React from "react";

export default function About() {
	return (
		<div className="w-screen h-screen overflow-hidden bg-[url('./imgs/aboutbg.jpg')] bg-center bg-cover bg-fixed">
			<div
				className="w-11/12 sm:w-1/2 rounded bg-white/75 ml-3 sm:ml-12 mt-3 sm:mt-10 shadow-lg p-6"
				data-aos="zoom-in">
				<div className="font-bold text-gray-500 text-xl small:text-3xl mb-2">
					A short & dramatic introduction
				</div>
				<div className="text-black text-sm  sm:text-base">
					I'm Aniket Das, a rising senior and CS major at Minerva University. I
					unravelled so many stereotypes after my first international trip to
					China for the 2016 Rubik's Cube Asian Championships that it inspired
					me to travel, gather diverse perspectives, and learn more about different
					cultures than ever before. I’ve been exploring the world since as part
					of Minerva’s global rotation and international cubing championships.
					Witnessing my exponential personal and professional growth by being
					around the selective and diverse student body at Minerva stimulated me
					to intentionally surround myself with and learn from people who help
					build a growth conducive and healthy environment around me. Realizing
					my privilege and the scary lack of it in the world motivated me to be
					purposeful about my actions and give back. Professionally, I got into
					Software Engineering because it literally gives one the power to bring
					ideas to life, here’s my CV if relevant. I aspire to leverage
					technology for sustainability, medical advances, and combating
					inequality. Welcome to my page!
				</div>
			</div>
		</div>
	);
}
