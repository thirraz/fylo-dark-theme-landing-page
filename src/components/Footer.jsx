import logo from "../assets/images/logo.svg";
import email from "../assets/images/icon-email.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";

export const Footer = () => {
	return (
		<>
			<footer className="w-screen h-auto pt-80 pl-8 flex flex-wrap bg-slate-900 ">
				<div className="w-full mb-9 bg-slate-900">
					<img src={logo} alt="Fylo's icon logo" />
				</div>
				<div className=" flex flex-col lg:w-[40%] mr-20">
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
				<div className="flex mb-9 border-2 lg:w-[20%]">
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
				<div className="border-2 text-slate-300 mb-14 md:w-[10%] lg:w-[10%]">
					<p className="mb-5">About Us</p>
					<p className="mb-5">Jobs</p>
					<p className="mb-5">Press</p>
					<p className="mb-5">Blog</p>
				</div>
				<div className=" text-slate-300">
					<p className="mb-5">Contact Us</p>
					<p className="mb-5">Terms</p>
					<p className="mb-5">Privacy</p>
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
