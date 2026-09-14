import { create } from "zustand";

interface Profile {
	name: string;
	email: string;
	setStore: (name: string, email: string) => void;
}

export const useProfile = create<Profile>((set) => ({
	name: "",
	email: "",

	setStore: (name, email) =>
		set({
			name,
			email,
		}),
}));
