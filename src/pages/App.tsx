import { MainContext } from "MainContext";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/Routes";

function App() {
	const ctx = useContext(MainContext);

	useEffect(() => {
		ctx.syncProfile();

		setInterval(() => {
			ctx.syncProfile();
			// TODO Check page and redirect if needed
		}, 20 * 1000);
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
