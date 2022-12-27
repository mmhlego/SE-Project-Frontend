import Footer from "components/Footer";
import Header from "components/Header";
import ForgotPassword from "pages/ForgotPassword";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import ProductPage from "pages/ProductPage";
import ProductsPage from "pages/ProductsPage";
import Register from "pages/Register";
import { createBrowserRouter, Outlet } from "react-router-dom";
import TestPage from "../pages/TestPage";
import HomePage from "pages/HomePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/products",
				element: <ProductsPage />,
			},
			{
				path: "/products/:id",
				element: <ProductPage />,
			},
		],
	},
	{
		path: "/auth/login",
		element: <Login />,
	},
	{
		path: "/auth/register",
		element: <Register />,
	},
	{
		path: "/auth/forgot",
		element: <ForgotPassword />,
	},
	{
		path: "*",
		element: (
			<>
				<Header />
				<NotFound />
				<Footer />
			</>
		),
	},
	{
		path: "/test",
		element: <TestPage />,
		children: [
			{
				path: "products",
			},
		],
	},
]);
