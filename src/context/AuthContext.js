import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuthContext() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState("");
	const [loading, setLoading] = useState(true);

	const value = {
		user,
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			console.log(user);
			setUser(user);
			setLoading(false);
		});
		return () => {
			unsubscribed();
		};
	}, []);
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
