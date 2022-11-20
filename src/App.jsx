import { useState } from "react";
import "./App.css";

//components
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Benefits } from "./components/Benefits";
import { StayProductive } from "./components/StayProductive";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-slate-800 w-auto h-auto overflow-x-hidden">
			<Navbar />
			<Main />
			<Benefits />
			<StayProductive />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
