import Button from "../components/Button";
import { Login, ShoppingCart } from "iconsax-react";
import TestSection from "../components/TestSection";
import CheckBox from "components/CheckBox";
import Toggle from "components/Toggle";

export default function TestPage() {
	return (
		<div className="w-full flex min-h-screen items-center gap-4 flex-col">
			<TestSection>
				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
					color="black"
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
					filled
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
					color="red"
				/>

				<Button
					text="سبد خرید"
					onClick={() => {}}
					icon={<ShoppingCart />}
					notification={0}
					color="black"
					accent="blue"
				/>

				<Button
					text="سبد خرید"
					onClick={() => {}}
					icon={<ShoppingCart />}
					notification={1}
					filled
					color="cyan"
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
					disabled
				/>
			</TestSection>
			<TestSection>
				<CheckBox text="این یک متن تست است" />
				<CheckBox text="این یک متن تست است" initial />
				<CheckBox text="این یک متن تست است" disabled />
			</TestSection>

			<TestSection>
				<Toggle text="این یک متن تست است" />
				<Toggle text="این یک متن تست است" initial />
				<Toggle text="این یک متن تست است" disabled />
			</TestSection>
		</div>
	);
}
