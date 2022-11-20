import React from "react";

import productiveIllustration from "../assets/images/illustration-stay-productive.png";

export const StayProductive = () => {
	return (
		<div className="w-screen h-auto px-7 bg-veryDarkBlue flex flex-col items-center">
			<img
				className="px-5"
				src={productiveIllustration}
				alt="illustration to represent the Fylo's productive"
			/>
			<h2 className="self-start text-white text-lg font-OpenSans font-bold mt-14">
				Stay productive, wherever you are
			</h2>
			<p className="text-white font-OpenSans pr-7 mb-8 ">
				Never let location be an issue when accessing your files.
				Fylo has you covered or all o your file storage needs
			</p>
			<p className="text-white font-OpenSans pr-7 mb-14">
				Securely share files and folders with friends, family and
				colleagues for live collaboration. No email attachments
				required.
			</p>
		</div>
	);
};
