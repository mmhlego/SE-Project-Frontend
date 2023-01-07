import axios from "axios";
import { MainContext } from "MainContext";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/Routes";

function App() {
	const ctx = useContext(MainContext);

	useEffect(() => {
		axios.defaults.baseURL = "https://localhost:5000/";

		// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
		// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
		// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
		// axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

		ctx.syncProfile();

		setInterval(() => {
			ctx.syncProfile();
			// TODO Check page and redirect if needed
		}, 10 * 1000);
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
