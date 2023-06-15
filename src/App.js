import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DocumentMeta from "react-document-meta";
import About from "./components/About";
import Connect from "./components/Connect";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const meta = {
	title: "Aniket Das",
	description:
		"I'm Aniket Das, a rising senior and CS major at Minerva University. I unravelled so many stereotypes after my first international trip to China for the 2016 Rubik's Cube Asian Championships that it inspired me to travel, gather diverse perspectives, and learn more about different cultures than ever before. I’ve been exploring the world since as part of Minerva’s global rotation and international cubing championships. Witnessing my exponential personal and professional growth by being around the selective and diverse student body at Minerva stimulated me to intentionally surround myself with and learn from people who help build a growth conducive and healthy environment around me. Realizing my privilege and the scary lack of it in the world motivated me to be purposeful about my actions and give back. I got into Software Engineering professionally because it literally gives one the power to bring ideas to life; here’s my CV if you're interested in my professional qualifications and experience. I aspire to leverage technology for sustainability, medical advances, and combating inequality. Welcome to my page!",
	canonical: "https://aniketdas.com/",
	meta: {
		charset: "utf-8",
		name: {
			keywords: "aniket,das,cubing,minerva,swe",
		},
	},
};

function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<DocumentMeta {...meta}>
			<div className="snap-y snap-mandatory">
				<Navbar />
				<Home className="snap-always snap-center" />
				<About className="snap-always snap-center" />
				<Hobbies className="snap-always snap-center" />
				<Connect className="snap-always snap-center" />
			</div>
		</DocumentMeta>
	);
}

export default App;
