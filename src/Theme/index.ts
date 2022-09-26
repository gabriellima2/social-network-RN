export const darkTheme = {
	colors: {
		background: "#101010",
		contrast: "#252525",

		main: "#F6F6F6",
		util: "#5F5F5F",

		fontMain: "#F6F6F6",
		fontContrast: "#101010",
	},
	logo: require("../../assets/logo/dark-logo.jpg"),
};

export const lightTheme = {
	colors: {
		background: "#F6F6F6",
		contrast: "#E9E9E9",

		main: "#101010",
		util: "#898989",

		fontMain: "#101010",
		fontContrast: "#F6F6F6",
	},

	logo: require("../../assets/logo/light-logo.jpg"),
};

export const Theme = {
	colors: { ...lightTheme.colors },
	logo: lightTheme.logo,
	space: {
		1: "4px",
		2: "8px",
		3: "12px",
		4: "16px",
		5: "20px",
		6: "24px",
		7: "28px",
		8: "32px",
		9: "36px",
		10: "40px",
	},
	fonts: {
		mainRegular: "JostRegular",
		mainMedium: "JostMedium",
		mainSemiBold: "JostSemiBold",
		mainBold: "JostBold",
	},
	fontSize: {
		1: "1rem",
		2: "1.2rem",
		3: "1.4rem",
		4: "1.6rem",
		5: "1.8rem",
		6: "2rem",
		7: "2.2rem",
		8: "2.4rem",
		9: "2.6rem",
		10: "2.8rem",
	},
};
