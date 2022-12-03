import { createBrowserRouter } from "react-router-dom";
import TestPage from "../pages/TestPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <p>Home Page</p>
	},
	{
		path: "/products",
		element: <p>Products</p>
	},
	{
		path: "/products/:id",
		element: <p>Products with id</p>
	},
	{
		path: "*",
		element: <p>404 Not found</p>
	},
	{
		path: "/test",
		element: <TestPage />
	}
]);
