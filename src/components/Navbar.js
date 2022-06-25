import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import "./navbar.css"

const delay = 7;

export default function Navbar() {
	const [opacity, setOpacity] = useState(100);
	const [hover, setHover] = useState(false);
	const [bgBlack, setBgBlack] = useState(false);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => {
			console.log(0);
			setOpacity(0);
		}, delay * 100);
		return () => {
			clearTimeout(timer);
		};
	}, [opacity]);

	function scrollTo(id) {
		const anchor = document.querySelector(id);
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	}

	function buttonClick() {
		if(isOpen) {
			setOpen(false)
			setBgBlack(false)
		} 
		else {
			setOpen(true)
			setBgBlack(true)
		}
	}

	return (
		<div>
			<div style={bgBlack?{backgroundColor: 'rgba(0, 0, 0, .7)'}: {backgroundColor:'transparent'}} className="fixed sm:hidden w-screen z-50 flex ease-linear duration-500">
				<Hamburger color="rgb(209 213 219)" className="fixed z-50 w-2/12" toggled={isOpen} toggle={buttonClick} />
				{bgBlack && <ul className="flex items-center justify-center w-10/12 text-center z-50 ease-linear duration-500">
					<li className="">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#home");
							}}>
							Home
						</button>
					</li>
					<li className="">
						<button
							className="text-gray-400 hover:text-white ml-4"
							onClick={() => {
								scrollTo("#about");
							}}>
							About
						</button>
					</li>
					<li className="">
						<button
							className="text-gray-400 hover:text-white mx-4"
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
				</ul>}
			</div>
			<div
				style={opacity === 100 || hover ? { opacity: 100 } : { opacity: 0 }}
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}
				className={`fixed invisible sm:visible mt-0 w-screen z-50 hover:opacity-100 transition ease-linear duration-500`}>
				<ul className="flex bg-black topBotomBordersOut items-center justify-center text-center h-20 z-50">
					<li className="mr-32">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#home");
							}}>
							Home
						</button>
					</li>
					<li className="mr-32">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() => {
								scrollTo("#about");
							}}>
							About
						</button>
					</li>
					<li className="mr-32">
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
