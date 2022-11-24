import { render } from "@testing-library/react";
import App from "../pages/App";

test("renders learn react link", () => {
	const { getByText } = render(<App />);
	const linkElement = getByText("Home Page");
	expect(linkElement).toBeInTheDocument();
});

export {};
