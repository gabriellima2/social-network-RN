import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { KeyboardAvoidingWrapper } from "../../components/KeyboardAvoidingWrapper";
import { TextField } from "../../components/Inputs/TextField";
import { AuthForm } from "../../components/AuthForm";
import { Logo } from "../../components/Infra/Logo";
import { Title } from "../../components/Title";

import { useAuthLoginContext } from "../../contexts/AuthLoginContext";

import { Container, FormContainer, Content, Small } from "./styles";

export const LoginScreen = () => {
	const { handleInputChange, handleSubmit, authInformation } =
		useAuthLoginContext();

	return (
		<KeyboardAvoidingWrapper>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="light" />

				<Container>
					<Logo />

					<FormContainer>
						<Title>Faça Login</Title>

						<AuthForm variants="signIn" handleSubmit={handleSubmit}>
							<Content>
								<TextField
									placeholder="Usuário"
									maxLength={12}
									onChangeText={(text) => handleInputChange("username", text)}
									errorMessage={authInformation.errors?.username}
									underlineColorAndroid="transparent"
								/>

								<TextField
									secureTextEntry
									placeholder="Senha"
									autoCorrect={false}
									onChangeText={(text) => handleInputChange("password", text)}
									errorMessage={authInformation.errors?.password}
									underlineColorAndroid="transparent"
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
