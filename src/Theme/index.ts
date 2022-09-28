export const darkTheme = {
	colors: {
		background: "#101010",
		contrast: "#252525",

		main: "#F6F6F6",
		util: "#5F5F5F",

		fontMain: "#F6F6F6",
		fontContrast: "#101010",
	},
	logo: require("../../assets/logo/light-logo.png"),
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

	logo: require("../../assets/logo/dark-logo.png"),
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
		11: "44px",
		12: "48px",
		13: "52px",
		14: "56px",
		15: "60px",
	},
};
