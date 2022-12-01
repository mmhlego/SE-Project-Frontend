import { render } from "@testing-library/react";
import PrimaryButton from "./../components/PrimaryButton";

test("Renders text inside ", () => {
	const { getByText } = render(
		<PrimaryButton text={"test"} onClick={() => {}} />
	);
	const linkElement = getByText("test");
	expect(linkElement).toBeInTheDocument();
});

export {};
