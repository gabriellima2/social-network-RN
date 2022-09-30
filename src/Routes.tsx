import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Loading } from "./components/Infra/Loading";

import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";

import { useAuthLoginContext } from "./contexts/AuthLoginContext";

const Stack = createNativeStackNavigator();

export const Routes = () => {
	const { authInformation, isLoading } = useAuthLoginContext();

	if (isLoading) return <Loading />;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{Object.keys(authInformation).length ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
