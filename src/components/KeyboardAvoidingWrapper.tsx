import type { ReactNode } from "react";

import {
	KeyboardAvoidingView,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

interface KeyboardAvoidingWrapperProps {
	children: ReactNode;
}

/*
Teclado não sobrepor o elemento, habilitamos scroll para view e
quando clicar fora do teclado fecha ele.
*/
export const KeyboardAvoidingWrapper = ({
	children,
	...props
}: KeyboardAvoidingWrapperProps) => (
	<KeyboardAvoidingView style={{ flex: 1 }}>
		<ScrollView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				{children}
			</TouchableWithoutFeedback>
		</ScrollView>
	</KeyboardAvoidingView>
);
