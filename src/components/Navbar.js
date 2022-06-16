import React, { useEffect, useState } from "react";

export default function Navbar() {
	const [opacity, setOpacity] = useState(100);
	const [transition, setTransition] = useState(500);
	useEffect(() => {
		setTimeout(() => {
			setOpacity(0);
		}, 500);
		setTimeout(() => {
			setTransition(300);
		}, 1000);
	});

	function scrollTo(id) {
		const anchor = document.querySelector(id);
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}

	return (
		<div
			className={`fixed w-screen z-50 opacity-${opacity} hover:opacity-100 ease-linear duration-${transition}`}>
			<ul className="flex bg-black items-center justify-center text-center h-20 z-50">
				<li className="mr-32">
					<button className="text-gray-400 hover:text-white" onClick={()=>{scrollTo('#home')}}>Home</button>
				</li>
				<li className="mr-32">
					<button className="text-gray-400 hover:text-white" onClick={()=>{scrollTo('#about')}}>About</button>
				</li>
				<li className="mr-32">
					<button className="text-gray-400 hover:text-white" onClick={()=>{scrollTo('#hobbies')}}>Hobbies</button>
				</li>
				<li>
					<button className="text-gray-400 hover:text-white" onClick={()=>{scrollTo('#social')}}>Social</button>
				</li>
			</ul>
		</div>
	);
}
