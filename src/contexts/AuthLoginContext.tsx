import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

import type { AuthError, AuthLoginData } from "../types";
import validAuthMock from "../mocks/validAuth.json";
import { persistData } from "../utils/persistData";

interface AuthInformation extends Pick<AuthLoginData, "username"> {
	isAuthenticated: boolean;
	errors?: AuthError;
}

interface AuthLoginContextProperties {
	authInformation: AuthInformation;
	isLoading: boolean;
	handleInputChange: (name: string, text: string) => void;
	handleSubmit: () => void;
	handleLogout: () => void;
}

interface AuthLoginContextProviderProps {
	children: ReactNode;
}

const PASSWORD_MIN_CHAR = 8;
const USERNAME_MIN_CHAR = 12;
const STORAGE_KEY_AUTH = "isLogged";

export const AuthLoginContext = createContext({} as AuthLoginContextProperties);

export const AuthLoginContextProvider = ({
	children,
}: AuthLoginContextProviderProps) => {
	const [authInformation, setAuthInformation] = useState({} as AuthInformation);
	const [authLoginData, setAuthLoginData] = useState({} as AuthLoginData);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const clearAuthInfo = () => setAuthInformation({} as AuthInformation);

	const clearAuthData = () => setAuthLoginData({} as AuthLoginData);

	const handleInputChange = (name: string, text: string) => {
		clearAuthInfo();
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

		if (authLoginData.password.length < PASSWORD_MIN_CHAR) {
			addAuthError({
				username: null,
				password: `A senha deve ter no minímo ${PASSWORD_MIN_CHAR} caracteres`,
			});

			return false;
		}

		if (authLoginData.username.length > USERNAME_MIN_CHAR) {
			addAuthError({
				username: `O usuário deve ter no máximo ${USERNAME_MIN_CHAR} caracteres`,
				password: null,
			});

			return false;
		}

		return true;
	};

	const handleLogout = () => {
		persistData.remove(STORAGE_KEY_AUTH);

		clearAuthData();
		clearAuthInfo();
	};

	const addLoggedUser = () => {
		const auth = {
			username: authLoginData.username,
			isAuthenticated: true,
			errors: undefined,
		};

		setAuthInformation(auth);

		persistData.set(STORAGE_KEY_AUTH, auth);
	};

	const getLoggedUserStored = () => {
		persistData
			.get(STORAGE_KEY_AUTH)
			.then((response) => {
				if (!response) return setAuthInformation({} as AuthInformation);

				setAuthInformation(response);
				setIsLoading(false);
			})
			.catch((err) => setAuthInformation({} as AuthInformation));
	};

	const handleSubmit = () => {
		if (!fieldsAreValid() || !userExist()) return;

		addLoggedUser();
		clearAuthData();
	};

	useEffect(() => {
		getLoggedUserStored();

		return () => {
			clearAuthData();
			clearAuthInfo();
		};
	}, []);

	return (
		<AuthLoginContext.Provider
			value={{
				authInformation,
				isLoading,
				handleInputChange,
				handleSubmit,
				handleLogout,
			}}
		>
			{children}
		</AuthLoginContext.Provider>
	);
};

export const useAuthLoginContext = () => useContext(AuthLoginContext);
