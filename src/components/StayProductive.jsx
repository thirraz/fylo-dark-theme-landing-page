import React from "react";

import productiveIllustration from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";

export const StayProductive = () => {
	return (
		<div className="w-screen h-auto bg-veryDarkBlue pl-12 flex flex-wrap lg:flex-nowrap items-center justify-center pb-20">
			<img
				className="lg:w-[43rem] ml-2"
				src={productiveIllustration}
				alt="illustration to represent the Fylo's productive"
			/>
			<div className="flex flex-col w-[50%] ml-20">
				<h2 className=" text-white sm:text-[1.4rem] md:text-4xl lg:text-5xl lg:w-[60%] mt-10 font-bold font-Raleway">
					Stay productive, wherever you are
				</h2>
				<p className=" text-white font-OpenSans my-8 lg:w-[60%]">
					Never let location be an issue when accessing your
					files. Fylo has you covered or all o your file storage
					needs
				</p>
				<p className=" text-white font-OpenSans  mb-7 lg:w-[60%]">
					Securely share files and folders with friends, family
					and colleagues for live collaboration. No email
					attachments required.
				</p>

				<a
					className=" w-[10.3rem] text-cyan-300 flex items-center border-b-2 border-cyan-300 pb-2"
					href="https://github.com/thirraz"
				>
					See hor Fylo works
					<img
						className="w-5 h-5 ml-3"
						src={arrow}
						alt="arrow icon"
					/>
				</a>
			</div>
		</div>
	);
};
