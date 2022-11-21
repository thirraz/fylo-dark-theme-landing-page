import logo from "../assets/images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	return (
		<>
			<header className="font-Raleway h-24 px-28 flex items-center justify-between">
				<img
					className="w-24 fill-black"
					src={logo}
					alt="Fylo's logo icon"
				/>
				<nav className="">
					<ul className="flex text-white">
						<li className="mr-5">Features</li>
						<li className="mr-5">Team</li>
						<li className="mr-5">Sign</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
