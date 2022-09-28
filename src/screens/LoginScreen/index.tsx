import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Logo } from "../../components/Infra/Logo";
import { Title } from "../../components/Title";
import { AuthForm } from "../../components/AuthForm";
import { TextField } from "../../components/Inputs/TextField";

import { Container, FormContainer, Content, Small } from "./styles";
import { Theme } from "../../Theme";
import { KeyboardAvoidingWrapper } from "../../components/KeyboardAvoidingWrapper";

interface LoginCredentials {
	username: string;
	password: string;
}

export const LoginScreen = () => {
	const [loginCredentials, setLoginCredentials] = useState(
		{} as LoginCredentials
	);

	const handleChange = (name: string, text: string) => {
		setLoginCredentials((prevState) => ({ ...prevState, [name]: text }));
	};

	return (
		<KeyboardAvoidingWrapper>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="light" />

				<Container>
					<Logo />

					<FormContainer>
						<Title>Faça Login</Title>

						<AuthForm variants="signIn">
							<Content>
								<TextField
									placeholder="Usuário"
									onChangeText={(text) => handleChange("username", text)}
								/>
								<TextField
									placeholder="Senha"
									onChangeText={(text) => handleChange("password", text)}
								/>
								<Small>Esqueceu a senha?</Small>
							</Content>
						</AuthForm>
					</FormContainer>
				</Container>
			</SafeAreaView>
		</KeyboardAvoidingWrapper>
	);
};
