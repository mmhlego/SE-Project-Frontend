import { useGetApi } from "hooks/useApi";
import Cart from "model/Cart";
import DataOrError from "model/DataOrError";
import { createContext, useEffect, useState } from "react";
import User from "./model/User";

interface Context {
	loggedIn: boolean | undefined;
	profile: DataOrError<User>;
	currentCart: DataOrError<Cart>;
	syncProfile: () => void;
	syncCart: () => void;
}

export const MainContext = createContext<Context>({
	loggedIn: undefined,
	profile: { loading: true },
	currentCart: { loading: true },
	syncProfile: () => {},
	syncCart: () => {},
});

export const ContextProvider = ({
	children,
}: {
	children: JSX.Element[] | JSX.Element;
}) => {
	const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);

	const [profile, syncProfile] = useGetApi<User>(
		"/profile/",
		() => setLoggedIn(true),
		() => setLoggedIn(false)
	);

	const [currentCart, syncCart] = useGetApi<Cart>("/profile/cart");

	useEffect(() => {}, []);

	const ctx = {
		loggedIn,
		profile,
		currentCart,
		syncProfile,
		syncCart,
	};

	return <MainContext.Provider value={ctx}>{children}</MainContext.Provider>;
};
