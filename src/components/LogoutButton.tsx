import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useAuthLoginContext } from "../contexts/AuthLoginContext";

import { Theme } from "../Theme";

export const LogoutButton = () => {
	const { handleLogout } = useAuthLoginContext();

	return (
		<TouchableOpacity onPress={handleLogout}>
			<Icon name="logout" size={24} color={Theme.colors.fontMain} />
		</TouchableOpacity>
	);
};
