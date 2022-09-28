import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

import validAuthMock from "../mocks/validAuth.json";

interface AuthLoginData {
	username: string;
	password: string;
}

interface AuthInformation extends Pick<AuthLoginData, "username"> {
	isAuthenticated: boolean;
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

	const handleInputChange = (name: string, text: string) => {
		setAuthLoginData((prevState) => ({ ...prevState, [name]: text.trim() }));
	};

	const credentialsDoesNotExist = () => {
		return (
			authLoginData.username !== validAuthMock.username ||
			authLoginData.password !== validAuthMock.password
		);
	};

	const credentialsIsInvalid = () => {
		return !authLoginData.username && !authLoginData.username;
	};

	const handleSubmit = () => {
		if (credentialsIsInvalid() || credentialsDoesNotExist()) return;

		setAuthInformation({
			username: authLoginData.username,
			isAuthenticated: true,
		});
		setAuthLoginData({} as AuthLoginData);
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
