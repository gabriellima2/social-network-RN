import { useFonts } from "expo-font";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/Routes";
import { Theme } from "./src/Theme";
import { AuthLoginContextProvider } from "./src/contexts/AuthLoginContext";

export default function App() {
	const [fontsLoaded] = useFonts({
		JostRegular: require("./assets/fonts/Jost-Regular.ttf"),
		JostMedium: require("./assets/fonts/Jost-Medium.ttf"),
		JostSemiBold: require("./assets/fonts/Jost-SemiBold.ttf"),
		JostBold: require("./assets/fonts/Jost-Bold.ttf"),
	});

	if (!fontsLoaded) return <Text>Carregando...</Text>;

	return (
		<ThemeProvider theme={Theme}>
			<AuthLoginContextProvider>
				<Routes />
			</AuthLoginContextProvider>
		</ThemeProvider>
	);
}
