import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export const Loading = () => (
	<SafeAreaView style={{ flex: 1 }}>
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Carregando...</Text>
		</View>
	</SafeAreaView>
);
