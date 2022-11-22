/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{jsx,js}", "./public/index.html"],
	theme: {
		extend: {
			screens: {
				md: "768px",
				lg: "1024px",
			},

			backgroundImage: {
				curvyDesktop:
					"url('./src/assets/images/bg-curvy-desktop.svg')",
				curvyMobile:
					"url('./src/assets/images/bg-curvy-mobile.svg')",
				imageIntro:
					"url('./src/assets/images/illustration-intro.png')",
			},
			colors: {
				veryDarkBlue: "#181F2B",
				grayBlue: "#21293C",
				cta: "#1B2330",
			},
			fontFamily: {
				OpenSans: '"Open Sans", sans-serif',
				Raleway: "'Raleway', sans-serif",
			},
			width: {
				"90pc": "90%",
				"70pc": "70%",
				"30pc": "30%",
			},
			fontSize: {
				"3rem": "3rem",
			},
		},
		plugins: [],
	},
};
