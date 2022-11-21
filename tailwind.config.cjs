/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{jsx,js}", "./public/index.html"],
	theme: {
		extend: {
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
			},
			fontFamily: {
				OpenSans: '"Open Sans", sans-serif',
				Raleway: "'Raleway', sans-serif",
			},
			width: {
				"90pc": "90%",
				"60pc": "80%",
			},
			fontSize: {
				"3rem": "3rem",
			},
		},
		plugins: [],
	},
};
