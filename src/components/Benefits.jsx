import React from "react";

import { ItemsBenefits } from "./ItemsBenefits";

import pc from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import anyFile from "../assets/images/icon-any-file.svg";

export const Benefits = () => {
	return (
		<section className="w-screen h-auto pb-10 bg-veryDarkBlue flex justify-center">
			<div className="md:w-[90%] flex justify-center items-center flex-wrap">
				<ItemsBenefits
					icon={pc}
					title="Access your files, anywhere"
					text="The ability to use a smartphone, tablet, or computer to
					access your account means your files follow you
					everywhere."
				/>
				<ItemsBenefits
					icon={security}
					title="Security you can trust"
					text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
				/>
				<ItemsBenefits
					icon={collaboration}
					title="Real-time collaboration"
					text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
				/>
				<ItemsBenefits
					icon={anyFile}
					title="Store any type of file"
					text="Wheter you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
				/>
			</div>
		</section>
	);
};
