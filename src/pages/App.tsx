import { RouterProvider } from "react-router-dom";
import { router } from "../routes/Routes";

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
