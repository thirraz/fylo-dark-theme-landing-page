import imageIntro from "../assets/images/illustration-intro.png";
import curvy from "../assets/images/bg-curvy-desktop.svg";

export const Main = () => {
	return (
		<main className="w-screen h-auto md:h-auto cover flex justify-center items-center relative overflow-x-hidden">
			<div className="flex flex-col w-full h-auto justify-center items-center">
				<img
					className="max-w-[80%] z-20"
					src={imageIntro}
					alt="intro illustration"
				/>
				<h1 className=" font-Raleway text-2xl text-white mt-8 z-20 px-28 lg:w-[50%] font-bold text-center text-[2rem]">
					All your files in one secure location, accessible
					anywhere
				</h1>
				<p className=" w-[85%]  lg:px-[27rem] text-white text-center z-20 font-OpenSans mt-8 ">
					Fylo stores all your most important files in one secure
					location. Access them wherever you need, share and
					collaborate with friends family, and co-workers.
				</p>

				<button className="mt-20 text-white font-bold z-20 rounded-full px-20 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-cyan-300">
					Get Started
				</button>
			</div>
			<div className="w-screen h-auto absolute right-0 bottom-0 z-10">
				<img
					className="w-full bg-no-repeat bg-right-top  bg-cover"
					src={curvy}
					alt="curvy shape background"
				/>
			</div>
		</main>
	);
};
