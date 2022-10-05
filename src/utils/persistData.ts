import AsyncStorage from "@react-native-async-storage/async-storage";

class PersistedData {
	async set(key: string, value: unknown) {
		try {
			const JSONValue = JSON.stringify(value);
			await AsyncStorage.setItem(key, JSONValue);
		} catch (err) {
			console.log(err);
		}
	}

	async get<T>(key: string): Promise<T | null> {
		try {
			const value = await AsyncStorage.getItem(key);

			if (!value) throw new Error();

			return JSON.parse(value);
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	async remove(key: string) {
		try {
			await AsyncStorage.removeItem(key);
		} catch (err) {
			console.log(err);
		}
	}
}

export const persistData = new PersistedData();
