import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useProfile } from "../store/profile";

interface AuthContextData {
	isAuthenticated: boolean;
	loading: boolean;
	login: (token: string) => void;
	logout: () => void;
}

const AuthContext = createContext({} as AuthContextData);

const verifyTokenValidation = async (token: string) => {
	try {
		const response = await axios.get(
			`${import.meta.env.VITE_API_URL}/users/profile`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return response.data;
	} catch (e: any) {
		localStorage.removeItem("token");
		throw e;
	}
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const profile = useProfile();
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			setLoading(false);
			setIsAuthenticated(false);
			return;
		}

		verifyTokenValidation(token)
			.then((response) => {
				profile.setStore(response.userName, response.email);
				setIsAuthenticated(true);
			})
			.catch(() => {
				setIsAuthenticated(false);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	function login(token: string) {
		localStorage.setItem("token", token);
		setIsAuthenticated(true);
	}

	function logout() {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				loading,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
