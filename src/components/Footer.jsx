import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/images/logo.svg";
import email from "../assets/images/icon-email.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";

export const Footer = () => {
	return (
		<>
			<footer className="w-screen h-auto pt-80 pb-52 pl-8 flex flex-wrap bg-slate-900 ">
				<div className="w-full mb-9 bg-slate-900">
					<img src={logo} alt="Fylo's icon logo" />
				</div>
				<div className=" flex pr-32 lg:w-[30%] mr-20">
					<img
						className="w-4 h-4 mr-5"
						src={location}
						alt="location icon"
					/>
					<p className=" text-white mb-10">
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua
					</p>
				</div>
				<div className="flex mb-9 lg:w-[20%]">
					<ul className="text-white w-screen ">
						<li className="flex items-baseline">
							<img
								className="w-4 h-4 mr-5"
								src={phone}
								alt="phone icon"
							/>
							+1-543-123-4567
						</li>
						<li className="flex items-baseline">
							<img
								className="w-4 h-4 mr-5"
								src={email}
								alt="phone icon"
							/>
							+1-543-123-4567
						</li>
					</ul>
				</div>
				<div className="w-full  text-slate-300 mb-2 md:w-[95%] lg:w-[10%]">
					<p className="mb-5">About Us</p>
					<p className="mb-5">Jobs</p>
					<p className="mb-5">Press</p>
					<p className="mb-5">Blog</p>
				</div>
				<div className="w-full md:w-[95%] lg:w-[10%] text-slate-300">
					<p className="mb-5">Contact Us</p>
					<p className="mb-5">Terms</p>
					<p className="mb-5">Privacy</p>
				</div>

				<div className="w-full lg:w-[11%] mt-20 text-white flex justify-evenly items-center lg:justify-between lg:items-start lg:mt-0 lg:ml-5">
					<FontAwesomeIcon
						icon={faFacebook}
						className="w-4 h-4 rounded-full outline outline-offset-4 outline-1 p-2 hover:text-cyan-300 cursor-pointer"
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						className="w-4 h-4 rounded-full outline outline-offset-4 outline-1 p-2 hover:text-cyan-300 cursor-pointer"
					/>
					<FontAwesomeIcon
						icon={faInstagram}
						className="w-4 h-4 rounded-full outline outline-offset-4 outline-1 p-2 hover:text-cyan-300 cursor-pointer"
					/>
				</div>
			</footer>
		</>
	);
};
{
	/* <img src={logo} alt="Fylo's logo" />
			<div className="flex flex-wrap">
				<div className="flex w-[22%] mt-9 items-baseline">
					<img
						className="w-4 h-4 mr-5"
						src={location}
						alt="location icon"
					/>
					<p className=" text-white">
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua
					</p>
				</div>
				<div className="flex flex-wrap w-[11%] lg:ml-28 lg:mt-10 items-baseline">
					<img
						className="w-4 h-4 mr-5"
						src={phone}
						alt="phone icon"
					/>
					<p className=" text-white">+1-543-123-4567</p>
					<img
						className="w-4 h-4 mr-5"
						src={email}
						alt="phone icon"
					/>
					<p className=" text-white">+1-543-123-4567</p>
				</div>
				<div className="lg:mt-11 lg:ml-36 text-slate-300">
					<p className="mb-5">About Us</p>
					<p className="mb-5">Jobs</p>
					<p className="mb-5">Press</p>
					<p className="mb-5">Blog</p>
				</div>
				<div className="lg:mt-10 lg:ml-18 text-slate-300">
					<p className="mb-5">Contact Us</p>
					<p className="mb-5">Terms</p>
					<p className="mb-5">Privacy</p>
				</div>
			</div>
 */
}
