module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				green: "#DFF2BF",  //bg-green
				darkGreen: "#4F8A10", //text green
				red: "#D32728",  //error messages
				darkRed: "#D8000C", //text red
				lightBlue: '#61dafb',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
