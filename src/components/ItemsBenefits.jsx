import React from "react";

export const ItemsBenefits = ({ icon, title, text }) => {
	return (
		<article className="max-w-md h-auto mt-28 mx-20 bg-transparent flex flex-col items-center">
			<img src={icon} alt="" />
			<h2 className="font-Raleway mt-8 text-white font-bold">
				{title}
			</h2>
			<p className="mt-5 px-8 text-white text-center font-OpenSans">
				{text}
			</p>
		</article>
	);
};
