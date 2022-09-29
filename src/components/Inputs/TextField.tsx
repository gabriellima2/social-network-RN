import type { TextInputProps } from "react-native";
import styled from "styled-components/native";

import type { Error } from "../../types";
import { Theme } from "../../Theme";

const Container = styled.ScrollView`
	width: 100%;
	margin-bottom: ${Theme.space[4]};

	position: relative;
`;

const Input = styled.TextInput`
	padding: ${Theme.space[4]};

	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	font-size: ${Theme.fontSize[4]};

	border-bottom-width: 2px;
	border-bottom-color: ${Theme.colors.details};

	background: ${Theme.colors.contrast};
`;

export const ErrorText = styled.Text`
	text-align: center;
	color: red;
	font-weight: 400;
	font-size: ${Theme.fontSize[3]};

	margin-top: ${Theme.space[2]};
`;

interface TextFieldProps extends TextInputProps {
	errorMessage?: Error;
}

export const TextField = ({ errorMessage, ...props }: TextFieldProps) => (
	<Container>
		<Input {...props} />
		{errorMessage && <ErrorText>{errorMessage}</ErrorText>}
	</Container>
);

const defaultProps: Omit<TextFieldProps, "errorMesssage"> = {
	keyboardType: "default",
};

TextField.defaultProps = defaultProps;
