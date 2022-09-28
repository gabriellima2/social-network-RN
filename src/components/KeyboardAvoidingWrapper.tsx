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
