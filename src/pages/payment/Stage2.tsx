import Button from "components/Button";
import InputField from "components/InputField";
import { CloseCircle, DiscountShape } from "iconsax-react";
import { useState } from "react";
import MellatBank from "../../images/MellatBank.png";

export default function Stage2() {
	const [discountToken, setDiscountToken] = useState("");

	const banks = [
		{
			name: "Mellat",
			image: MellatBank,
		},
		{
			name: "Mellat",
			image: MellatBank,
		},
		{
			name: "Mellat",
			image: MellatBank,
		},
		{
			name: "Mellat",
			image: MellatBank,
		},
	];

	return (
		<>
			<div className="border-[1.5px] border-gray-300 rounded-3xl flex justify-end px-8 py-4 gap-6">
				<CloseCircle
					className="mt-11 cursor-pointer"
					onClick={() => setDiscountToken("")}
				/>

				<Button
					text="ثبت کد تخفیف"
					onClick={() => {}}
					className="mt-7 py-2"
					accent="blue"
				/>

				<InputField
					icon={
						<DiscountShape
							color="#2388FF"
							variant="Bold"
							size={22}
						/>
					}
					name={"ثبت کد تخفیف"}
					setText={setDiscountToken}
					placeholder="اگر کد تخفیف دارید در این قسمت وارد کنید"
					className="w-1/3"
					rtl
				/>
			</div>
			<div
				className="border-[1.5px] border-gray-300 rounded-3xl flex flex-col gap-4 p-6"
				dir="rtl"
			>
				<p className="font-semibold">انتخاب درگاه بانکی برای پرداخت</p>
				<hr className="bg-gray-300 h-[1.5px] col-span-2" />
				<div className="bg-gray-200 w-full rounded-3xl flex gap-4 p-5">
					{banks.map((bank, _) => (
						<div className="bg-white rounded-3xl flex items-center p-2 pl-4 w-full h-fit">
							<input
								key={_}
								value={bank.name}
								id={bank.name}
								name="banks"
								type="radio"
								className="bg-white rounded-3xl"
							/>
							<img
								className="max-h-full mx-auto"
								src={bank.image}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
