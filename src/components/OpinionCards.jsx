import { Card } from "./Card";
import p1 from "../assets/images/profile-1.jpg";
import p2 from "../assets/images/profile-2.jpg";
import p3 from "../assets/images/profile-3.jpg";

import bgQuote from "../assets/images/bg-quotes.png";
import { Cta } from "./Cta";

export const OpinionCards = () => {
	return (
		<div className="relative w-screen px-4 flex flex-wrap justify-center items-center gap-x-9 gap-y-10 pt-20 pb-80 bg-veryDarkBlue">
			<img
				className="w-10 absolute top-14 left-52 lg:w-14 lg:top-10 lg:left-44"
				src={bgQuote}
				alt="quotation icon"
			/>
			<Card
				text="Fylo has improved our team productivity by an order of
					magnitude. Since makin the switch our team has become a
					well-oiled collaboration machine."
				img={p1}
				name="Satish Patel"
				role="Founder & CEO, Huddle"
			/>
			<Card
				text="Fylo has improved our team productivity by an order of
					magnitude. Since makin the switch our team has become a
					well-oiled collaboration machine."
				img={p2}
				name="Satish Patel"
				role="Founder & CEO, Huddle"
			/>
			<Card
				text="Fylo has improved our team productivity by an order of
					magnitude. Since makin the switch our team has become a
					well-oiled collaboration machine."
				img={p3}
				name="Satish Patel"
				role="Founder & CEO, Huddle"
			/>

			<Cta />
		</div>
	);
};
