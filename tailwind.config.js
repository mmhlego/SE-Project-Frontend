/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		fontFamily: {
			sans: ["Noto Sans Arabic", "Inter", "sans-serif"],
		},
		extend: {
			colors: {
				blue: "#2388ff",
				orange: "#ff9a23",
				black: "#070707",
				white: "#ffffff",
				green: "#06c574",
				purple: "#ad30c2",
				yellow: "#ffee02",
				red: "#ef3b50",
				cyan: "#1ebcc5",
				gray1: "#f9f9f9",
				gray2: "#ededed",
				gray3: "#cbcbcb",
				gray4: "#757575",
				gray5: "#3a4254",
			},
		},
	},
	plugins: [],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
