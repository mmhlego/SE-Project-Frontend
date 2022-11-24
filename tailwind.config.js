/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				//TODO Add the colors
			},
		},
	},
	plugins: [],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
