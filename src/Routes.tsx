import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { TabNavigation } from "./Navigations/TabNavigation";
import { LoginScreen } from "./screens/Public/LoginScreen";
import { Loading } from "./components/Infra/Loading";

import { useAuthLoginContext } from "./contexts/AuthLoginContext";
import { Theme } from "./Theme";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: Theme.colors.background,
	},
	headerShadowVisible: false,
	headerTintColor: Theme.colors.fontMain,
	headerTitleAlign: "center",
	headerTitleStyle: {
		fontFamily: Theme.fonts.mainSemiBold,
	},
};

export const Routes = () => {
	const { authInformation, isLoading } = useAuthLoginContext();

	if (isLoading) return <Loading />;

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptions}>
				{Object.keys(authInformation).length ? (
					<Stack.Screen
						name="Home"
						component={TabNavigation}
						options={{ headerShown: false }}
					/>
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
