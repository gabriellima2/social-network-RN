import { SafeAreaView, Text } from "react-native";

import { LogoutButton } from "../../components/LogoutButton";

export const HomeScreen = () => {
	return (
		<SafeAreaView>
			<Text>Home</Text>
			<LogoutButton />
		</SafeAreaView>
	);
};
