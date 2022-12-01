import PrimaryButton from "../components/PrimaryButton";
import { Login } from "iconsax-react";

export default function TestPage() {
	return (
		<div className="w-full flex min-h-screen items-center gap-4 flex-col">
			<PrimaryButton
				text="ورود / ثبت نام"
				onClick={() => {}}
				icon={<Login />}
			/>

			<PrimaryButton text="ورود / ثبت نام" onClick={() => {}} />
		</div>
	);
}
