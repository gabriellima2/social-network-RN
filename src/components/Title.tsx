import { ReactNode } from "react";
import styled from "styled-components/native";

import { Theme } from "../Theme";

interface TitleProps {
	children: ReactNode;
}

const TitleText = styled.Text`
	font-size: ${Theme.fontSize[7]};
	font-family: ${Theme.fonts.mainBold};
	font-weight: 600;
	color: ${Theme.colors.fontMain};

	margin-bottom: ${Theme.space[2]};
`;

export const Title = ({ children, ...props }: TitleProps) => (
	<TitleText>{children}</TitleText>
);
