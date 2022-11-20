import logo from "../assets/images/logo.svg";
import email from "../assets/images/icon-email.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";

export const Footer = () => {
	return (
		<footer className="h-auto flex flex-col bg-slate-900 px-7">
			<img className="w-36 mt-48" src={logo} alt="fylo's logo icon" />
			<ul className="flex flex-col h-auto text-white">
				<li className="flex mt-5">
					<img
						className="w-5 h-5 mr-6"
						src={location}
						alt="icon location"
					/>
					Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua
				</li>
				<li className="flex items-center mt-5">
					<img
						className="w-5 h-5 mr-6 text-red"
						src={phone}
						alt="icon phone"
					/>
					+1-543-123-4567
				</li>
				<li className="flex items-center mt-5">
					<img
						className="w-5 h-4 mr-6"
						src={email}
						alt="icon email"
					/>
					example@fylo.com
				</li>
			</ul>

			<div className="mt-24 text-slate-400">
				<p className="mb-5">About Us</p>
				<p className="mb-5">Jobs</p>
				<p className="mb-5">Press</p>
				<p className="mb-5">Blog</p>
			</div>
		</footer>
	);
};
