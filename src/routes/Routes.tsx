import Footer from "components/Footer";
import Header from "components/Header";
import NotFound from "pages/NotFound";
import ProductPage from "pages/ProductPage";
import ProductsPage from "pages/ProductsPage";
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
				element: <p>Home Page</p>,
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
