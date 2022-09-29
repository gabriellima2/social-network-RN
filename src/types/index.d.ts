export interface AuthLoginData {
	username: string;
	password: string;
}

export type Error = string | null;

export interface AuthError {
	username: Error;
	password: Error;
}
