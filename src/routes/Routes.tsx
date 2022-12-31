import Footer from "components/Footer";
import Header from "components/Header";
import Dashboard from "pages/Dashboard";
import ForgotPassword from "pages/ForgotPassword";
import HomePage from "pages/HomePage";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Payment from "pages/Payment";
import ProductPage from "pages/ProductPage";
import ProductsPage from "pages/ProductsPage";
import Register from "pages/Register";
import { createBrowserRouter, Outlet } from "react-router-dom";
import TestPage from "../pages/TestPage";

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
			{
				path: "/dashboard",
				element: <Dashboard />,
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
		path: "/payment",
		element: <Payment />,
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
