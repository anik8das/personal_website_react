import React from "react";

export default function About() {
	const aStyle = "font-light hover:underline";
	return (
		<div
			className="h-screen overflow-hidden bg-[url('./imgs/aboutbg.jpg')] bg-center bg-cover sm:bg-fixed"
			id="about">
			<div
				className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-1/2 rounded bg-white/80 ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 mt-3 sm:mt-4 md:mt-5 lg:mt-7 xl:mt-10 shadow-lg p-5 sm:p-6 lg:p-7 xl:p-8 2xl:p-12"
				data-aos="zoom-in"
				data-aos-duration="700">
				<div className="font-bold text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 sm:mb-2">
					A short & dramatic introduction
				</div>
				<div className="font-sans font-extralight text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
					I'm Aniket Das, a{" "}
					<a
						href="https://www.minerva.edu/"
						target="_blank"
						rel="noreferrer"
						className={aStyle}>
						Minerva
					</a>{" "}
					alum working as a Software Engineer at{" "}
					<a
						href="https://reflexion.com/our-company"
						target="_blank"
						rel="noreferrer"
						className={aStyle}>
						RefleXion Medical
					</a>
					. I unravelled many stereotypes after my first international
					trip to China for the 2016 Rubik's Cube Asian Championships,
					which inspired me to travel, gather diverse perspectives,
					and learn more about different cultures than ever before.
					I’ve since been exploring the world, heavily supported by
					Minerva’s{" "}
					<a
						href="https://www.minerva.edu/undergraduate-program/global-experience/"
						target="_blank"
						rel="noreferrer"
						className={aStyle}>
						global rotation
					</a>{" "}
					and international cubing championships. Witnessing my
					exponential personal and professional growth by being around
					the selective and diverse student body at Minerva stimulated
					me to intentionally surround myself with and learn from
					people who help build a growth conducive and healthy
					environment around me. Realizing my privilege and the scary
					lack of it in the world motivated me to be purposeful about
					my actions and give back. I got into Software Engineering
					professionally because it literally gives one the power to
					bring ideas to life; here’s my{" "}
					<a
						href="https://drive.google.com/file/d/12YEYe71nFEvgGzgUx7LWP7RK1A1h4vuk/view"
						target="_blank"
						rel="noreferrer"
						className={aStyle}>
						CV
					</a>{" "}
					if you're interested. I'm currently building systems to
					fight cancer and aspire to continue leveraging technology
					for sustainability, medical advances, and combating
					inequality. Welcome!
				</div>
			</div>
		</div>
	);
}
