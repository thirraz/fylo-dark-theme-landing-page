//components
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Benefits } from "./components/Benefits";
import { StayProductive } from "./components/StayProductive";
import { OpinionCards } from "./components/OpinionCards";

function App() {
	return (
		<div className="bg-bgColor w-auto h-auto overflow-x-hidden">
			<Navbar />
			<Main />
			<Benefits />
			<StayProductive />
			<OpinionCards />
			<Footer />
		</div>
	);
}

export default App;
