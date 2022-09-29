import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

import type { AuthError, AuthLoginData } from "../types";
import validAuthMock from "../mocks/validAuth.json";

interface AuthInformation extends Pick<AuthLoginData, "username"> {
	isAuthenticated: boolean;
	errors?: AuthError;
}

interface AuthLoginContextProperties {
	authInformation: AuthInformation;
	handleInputChange: (name: string, text: string) => void;
	handleSubmit: () => void;
}

interface AuthLoginContextProviderProps {
	children: ReactNode;
}

export const AuthLoginContext = createContext({} as AuthLoginContextProperties);

export const AuthLoginContextProvider = ({
	children,
}: AuthLoginContextProviderProps) => {
	const [authLoginData, setAuthLoginData] = useState({} as AuthLoginData);
	const [authInformation, setAuthInformation] = useState({} as AuthInformation);

	const clearAuthErrors = () => setAuthInformation({} as AuthInformation);

	const clearAuthData = () => setAuthLoginData({} as AuthLoginData);

	const handleInputChange = (name: string, text: string) => {
		clearAuthErrors();
		setAuthLoginData((prevState) => ({ ...prevState, [name]: text.trim() }));
	};

	const userExist = () => {
		return (
			authLoginData.username === validAuthMock.username &&
			authLoginData.password === validAuthMock.password
		);
	};

	const addAuthError = (errors: AuthError) => {
		setAuthInformation((prevState) => ({
			...prevState,
			errors,
		}));
	};

	const fieldsAreValid = () => {
		if (!authLoginData.username) {
			addAuthError({
				username: "O campo usuário é obrigatório",
				password: null,
			});

			return false;
		}

		if (!authLoginData.password) {
			addAuthError({
				username: null,
				password: "O campo senha é obrigatório",
			});

			return false;
		}

		if (authLoginData.password.length < 8) {
			addAuthError({
				username: null,
				password: "A senha deve ter no minímo 8 caracteres",
			});

			return false;
		}

		if (authLoginData.username.length > 12) {
			addAuthError({
				username: "O usuário deve ter no máximo 12 caracteres",
				password: null,
			});

			return false;
		}

		return true;
	};

	const handleSubmit = () => {
		if (!fieldsAreValid() || !userExist()) return;

		setAuthInformation({
			username: authLoginData.username,
			isAuthenticated: true,
			errors: undefined,
		});

		clearAuthData();
	};

	return (
		<AuthLoginContext.Provider
			value={{ authInformation, handleInputChange, handleSubmit }}
		>
			{children}
		</AuthLoginContext.Provider>
	);
};

export const useAuthLoginContext = () => useContext(AuthLoginContext);
