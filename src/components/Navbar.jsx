import logo from "../assets/images/logo.svg";

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
