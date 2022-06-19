import React, { useEffect, useState } from "react";
import whiteMenu from "../imgs/black-menu.png"

export default function Navbar() {
	const [opacity, setOpacity] = useState(100);
	const [hidden, setHidden] = useState("invisible");
	const [bgButton, setBgButton] = useState("transparent")

	useEffect(() => {
		setTimeout(() => {
			setOpacity(0);
		}, 500);
	}, []);

	function scrollTo(id) {
		const anchor = document.querySelector(id);
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}

	function toggleOpacity() {
		console.log('called')
		if (hidden==="invisible") {
			setOpacity(100);
			setBgButton("black")
			setTimeout(() => {
				setHidden("visible")
			}, 500);
		} else {
			setBgButton("transparent")

			setTimeout(() => {
				setHidden("invisible")
			}, 500);
		}
	}

	return (
		<div className={`bg-black`}>
			<button
				className={`fixed w-screen z-50 sm:hidden p-2 bg-${bgButton} ease-linear duration-500`}
				onClick={() => {
					toggleOpacity();
				}}>
				<img src={whiteMenu} alt="yoyo"/>
			</button>
			<div
				className={`fixed mt-9 ${hidden} sm:visible sm:mt-0 w-screen z-50 opacity-${opacity} hover:opacity-100 transition ease-linear duration-500`}>
				<ul className="sm:flex bg-black items-center justify-center text-center sm:h-20 z-50">
					<li className="sm:mr-32">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#home");
							}}>
							Home
						</button>
					</li>
					<li className="sm:mr-32">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#about");
							}}>
							About
						</button>
					</li>
					<li className="sm:mr-32">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#hobbies");
							}}>
							Hobbies
						</button>
					</li>
					<li>
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#social");
							}}>
							Social
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
