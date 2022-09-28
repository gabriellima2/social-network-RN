import { ReactNode } from "react";
import styled from "styled-components/native";

import { Button } from "./Button";

import { Theme } from "../Theme";

interface AuthFormProps {
	variants: "signIn" | "signUp";
	children: ReactNode;
}

const Container = styled.View`
	width: 100%;

	padding: ${Theme.space[4]};
`;

export const AuthForm = ({ variants, children, ...props }: AuthFormProps) => {
	return (
		<Container>
			{children}

			<Button isAccent={true}>
				{variants === "signIn" ? "Entrar" : "Criar Conta"}
			</Button>
			<Button isAccent={false}>
				{variants === "signIn" ? "Não tenho uma conta" : "Já tenho uma conta"}
			</Button>
		</Container>
	);
};
