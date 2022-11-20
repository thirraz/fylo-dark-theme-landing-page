import logo from "../assets/images/logo.svg";

import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	const { dark, setDark } = useContext(ThemeContext);

	return (
		<>
			<header className="h-24 px-6 flex items-center justify-between border-b-2">
				<img
					className="w-24 fill-black"
					src={logo}
					alt="Fylo's logo icon"
				/>
				<nav className="">
					<ul
						className={`flex ${
							dark ? "text-white" : "text-slate-700"
						}`}
					>
						{dark ? (
							<li
								onClick={() => setDark((s) => !s)}
								className="mr-7 cursor-pointer"
							>
								<FontAwesomeIcon
									icon={faSun}
									className="text-white md:w-7 md:h-7 md:hover:scale-110"
								/>
							</li>
						) : (
							<li
								onClick={() => setDark((s) => !s)}
								className="mr-7 cursor-pointer"
							>
								<FontAwesomeIcon
									icon={faMoon}
									className="text-slate-800 md:w-7 md:h-7 md:hover:scale-110"
								/>
							</li>
						)}

						<li className="mr-5 text-sm ">Features</li>
						<li className="mr-5 text-sm">Team</li>
						<li className="mr-5 text-sm">Sign</li>
					</ul>
				</nav>
			</header>

			{console.log(dark)}
		</>
	);
};
