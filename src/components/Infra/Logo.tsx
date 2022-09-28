import { Image } from "react-native";
import { useTheme } from "styled-components";

export const Logo = () => {
	const theme = useTheme();

	return (
		<Image
			style={{ width: 130, height: 130 }}
			source={theme.logo}
			resizeMode="contain"
		/>
	);
};
