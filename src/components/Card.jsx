import React from "react";

export const Card = ({ text, img, name, role }) => {
	return (
		<div className="relative w-96 h-56 flex flex-col justify-between rounded-md text-slate-200 bg-grayBlue py-6 px-8">
			<p>{text}</p>

			<div className="w-full flex">
				<img
					className="rounded-full w-7 h-7 mt-2"
					src={img}
					alt="profile pic icon"
				/>
				<div className="flex flex-col ml-3">
					<h2 className="text-sm font-bold font-OpenSans  tracking-wider">
						{name}
					</h2>
					<p className=" text-[.7rem] text-slate-400 mt-[.08rem]">
						{role}
					</p>
				</div>
			</div>
		</div>
	);
};
