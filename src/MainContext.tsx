import { createContext, useEffect, useState } from "react";
import axios from "axios";
import User from "./model/User";
import Cart from "model/Cart";

interface Context {
	loggedIn: boolean | undefined;
	profile: User | undefined;
	currentCart: Cart | undefined;
	syncProfile: () => void;
}

export const MainContext = createContext<Context>({
	loggedIn: undefined,
	profile: undefined,
	currentCart: undefined,
	syncProfile: () => {},
});

export const ContextProvider = ({
	children,
}: {
	children: JSX.Element[] | JSX.Element;
}) => {
	const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);
	const [profile, setProfile] = useState<User | undefined>(undefined);
	const [currentCart, setCurrentCart] = useState<Cart | undefined>(undefined);

	const syncProfile = async () => {
		try {
			await axios
				.get("/profile/", {
					withCredentials: true,
				})
				.then((res) => {
					console.log(res.data);
					setProfile(res.data as User);
					setLoggedIn(true);
				})
				.catch((err) => {
					console.log(err.response.status);
					setLoggedIn(false);
				});
		} catch (error) {
			setLoggedIn(false);
		}
	};

	useEffect(() => {}, []);

	const ctx = {
		loggedIn,
		profile,
		currentCart,
		syncProfile,
	};

	return <MainContext.Provider value={ctx}>{children}</MainContext.Provider>;
};
