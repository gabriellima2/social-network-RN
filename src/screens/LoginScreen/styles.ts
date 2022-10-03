import styled from "styled-components/native";

import { Theme } from "../../Theme";

export const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding-top: ${Theme.space[6]};
`;

export const FormContainer = styled.View`
	width: 100%;
	align-items: center;

	padding-top: ${Theme.space[8]};
`;

export const Content = styled.View`
	align-items: center;
`;

export const Small = styled.Text`
	color: ${Theme.colors.util};
	font-family: ${Theme.fonts.mainRegular};
	margin-top: ${Theme.space[2]};
`;
