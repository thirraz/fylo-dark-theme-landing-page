import { useState, useContext } from "react";
import "./App.css";

//context
import { ThemeContext } from "./contexts/ThemeContext";

//components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);
	const { dark, setDark } = useContext(ThemeContext);

	return (
		<div
			className={`${
				dark ? "bg-slate-800" : "bg-blue-300"
			} w-screen h-screen`}
		>
			<Navbar />
			<Footer />
		</div>
	);
}

export default App;
