import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import {
	createBottomTabNavigator,
	BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import {
	HomeScreen,
	MyAccountScreen,
	SettingsScreen,
} from "../screens/Private";

import { Theme } from "../Theme";

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
	tabBarInactiveTintColor: Theme.colors.util,
	tabBarActiveTintColor: Theme.colors.fontMain,
	tabBarLabelStyle: {
		fontFamily: Theme.fonts.mainRegular,
		textTransform: "capitalize",
		fontSize: 13,
	},
	tabBarStyle: {
		backgroundColor: Theme.colors.background,
		borderTopColor: Theme.colors.util,
		paddingVertical: 4,
		height: 55,
	},
};

function setTabOptions(
	label: string,
	icon: { active: string; disable: string }
): BottomTabNavigationOptions {
	return {
		tabBarLabel: label,
		tabBarIcon: ({ focused }) => (
			<Icon
				name={focused ? icon.active : icon.disable}
				size={24}
				color={focused ? Theme.colors.fontMain : Theme.colors.util}
			/>
		),
	};
}

export const TabNavigation = () => (
	<NavigationContainer independent={true}>
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={() =>
					setTabOptions("Conversas", {
						active: "chatbubble",
						disable: "chatbubble-outline",
					})
				}
			/>
			<Tab.Screen
				name="Account"
				component={MyAccountScreen}
				options={() =>
					setTabOptions("Minha Conta", {
						active: "person",
						disable: "person-outline",
					})
				}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={() =>
					setTabOptions("Configurações", {
						active: "md-settings",
						disable: "md-settings-outline",
					})
				}
			/>
		</Tab.Navigator>
	</NavigationContainer>
);
