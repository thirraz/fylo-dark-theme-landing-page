import { useRef, useState } from "react";

export const Cta = () => {
	const [form, setForm] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form === "") {
			setError(true);
		} else if (form.match(/^\S+@\S+\.\S+$/)) {
			setError(false);
			console.log("valid email");
		}

		setForm("");
	};

	console.log(form);

	return (
		<div className="w-90pc lg:w-70pc h-96 absolute -bottom-48 rounded-2xl px-10 bg-cta flex flex-col items-center justify-around lg:justify-evenly lg:px-14 shadow-2xl">
			<h2 className=" text-white text-xl lg:text-4xl font-bold font-Raleway">
				Get early access today
			</h2>
			<p className=" text-white text-center font-OpenSans lg:px-48">
				It only takes a minute to sign up and our free starter tier
				if extremely generous. If you have any questions, our
				support team would be happy to help you
			</p>
			<div className="w-full h-48 lg:h-auto flex flex-wrap ">
				<form className="flex flex-col w-full  lg:w-[66%]">
					<input
						className="w-full h-16 rounded-full text-sm px-10 outline-none border-none font-OpenSans"
						type="text"
						name="email"
						placeholder="email@example.com"
						onChange={(e) => setForm(e.target.value)}
					/>
					{error && (
						<p className="pl-10 mt-2 text-sm text-rose-600 font-bold">
							Please use a valid e-mail
						</p>
					)}
				</form>
				<button
					onClick={handleSubmit}
					className="w-full h-16 lg:w-[27%] lg:ml-10 rounded-full text-sm font-OpenSans font-bold text-white px-10 lg:px-4 outline-none border-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-cyan-300"
				>
					Get Started For Free
				</button>
			</div>
		</div>
	);
};
