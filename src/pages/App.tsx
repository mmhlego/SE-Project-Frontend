import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./TestPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <p>Home Page</p>,
	},
	{
		path: "*",
		element: <p>404 Not found</p>,
	},
	{
		path: "/test",
		element: <TestPage />,
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
