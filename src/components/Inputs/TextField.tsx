import type { TextInputProps } from "react-native";
import styled from "styled-components/native";

import { Theme } from "../../Theme";

interface TextFieldProps extends TextInputProps {}

const Container = styled.ScrollView`
	width: 100%;
	margin-bottom: ${Theme.space[4]};
`;

const Input = styled.TextInput`
	padding: ${Theme.space[4]};

	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	font-size: ${Theme.fontSize[4]};

	border-bottom-color: ${Theme.colors.util};

	background: ${Theme.colors.contrast};
`;

export const TextField = (props: TextFieldProps) => (
	<Container>
		<Input {...props} />
	</Container>
);

const defaultProps: TextFieldProps = {
	keyboardType: "default",
};

TextField.defaultProps = defaultProps;
