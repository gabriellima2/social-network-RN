import { ReactNode } from "react";
import styled from "styled-components/native";

import { Theme } from "../Theme";

interface StylesProps {
	isAccent: boolean;
}

interface ButtonProps extends StylesProps {
	children: ReactNode;
}

const Container = styled.TouchableOpacity<StylesProps>`
	align-items: center;

	border-radius: 8px;
	border: ${({ isAccent }) => !isAccent && `2px solid ${Theme.colors.main}`};

	padding: ${Theme.space[4]};
	margin-top: ${Theme.space[4]};

	background: ${({ isAccent }) =>
		isAccent ? Theme.colors.main : "transparent"};
`;

const Text = styled.Text<StylesProps>`
	font-size: ${Theme.fontSize[5]};
	font-family: ${Theme.fonts.mainSemiBold};
	color: ${({ isAccent }) =>
		isAccent ? Theme.colors.contrast : Theme.colors.fontMain};
`;

export const Button = ({ children, ...props }: ButtonProps) => (
	<Container isAccent={props.isAccent}>
		<Text isAccent={props.isAccent}>{children}</Text>
	</Container>
);
