import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Loading } from "./components/Infra/Loading";

import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";

import { useAuthLoginContext } from "./contexts/AuthLoginContext";
import { Theme } from "./Theme";

const Stack = createNativeStackNavigator();

export const Routes = () => {
	const { authInformation, isLoading } = useAuthLoginContext();

	if (isLoading) return <Loading />;

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: Theme.colors.background,
					},
					headerShadowVisible: false,
					headerTintColor: Theme.colors.fontMain,
					headerTitleAlign: "center",
					headerTitleStyle: {
						fontFamily: Theme.fonts.mainSemiBold,
					},
				}}
			>
				{Object.keys(authInformation).length ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{
							title: "Faça Login",
						}}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
