import { Cities, City, Province, Provinces } from "assets/Cities";
import Button from "components/Button";
import ComboBox from "components/ComboBox";
import InputField from "components/InputField";
import { Add, Message } from "iconsax-react";
import { useState } from "react";
import { z } from "zod";

export default function Stage1() {
	const [changeAddress, setChangeAddress] = useState(false);

	return changeAddress ? (
		<ChangeAddress finish={() => setChangeAddress(false)} />
	) : (
		<>
			<div className="p-6 grid grid-cols-2 gap-5 border-[1.5px] border-gray-300 rounded-3xl">
				<a
					className="text-blue flex gap-1"
					href="#"
					onClick={() => setChangeAddress(true)}
				>
					ثبت آدرس جدید
					<Add />
				</a>
				<p className="w-full text-right font-semibold">آدرس</p>
				<hr className="bg-gray-300 h-[1.5px] col-span-2" />
			</div>

			<div
				className="border-[1.5px] border-gray-300 rounded-3xl flex flex-col gap-6 p-6"
				dir="rtl"
			>
				<p className="font-semibold">انتخاب شیوه آدرس</p>
				<hr className="bg-gray-300 h-[1.5px] w-full" />
				<div className="flex gap-4 items-center">
					<input
						checked
						onChange={() => {}}
						id="default-radio-2"
						type="radio"
						className="w-5 h-5 focus:ring-blue-500 outline-none"
					/>
					<label
						htmlFor="default-radio-2"
						className="flex items-center gap-2 w-1/5"
					>
						<Message />
						<p className="text-center">پست پیشتاز</p>
					</label>

					<hr className="bg-gray-300 w-[1.5px] h-full" />

					<div
						className="flex flex-col gap-2 text-right font-medium my-2"
						dir="rtl"
					>
						<p className="text-red">
							مشترک گرامی، بازه زمانی ارسال سفارشات به شرح زیل می
							باشد
						</p>
						<p>
							1- بازه ارسال سفارشات از طریق پست پیشتاز 3 تا 5 روز
							کاری (غیر از روزهای تعطیل رسمی) می‌باشد.
						</p>
						<p>
							2-هزینه ارسال بر اساس مسافت و وزن بسته محاسبه خواهد
							شد.
						</p>
						<p>
							3-پس از پرداخت مبلغ، سفارش شما با «کد رهگیری مرسوله»
							که پس از بسته‌بندی و تحویل به پست از طریق پیامک
							دریافت می‌کنید در سایت سامانه رهگیری مرسولات پستی
							قابل پیگیری است.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

interface AddressProps {
	finish: () => void;
}

function ChangeAddress({ finish }: AddressProps) {
	const [province, setProvince] = useState<Province>();
	const [city, setCity] = useState<City>();
	const [postAddress, setPostAddress] = useState("");

	const postAddressValidator = z.string();

	return (
		<div className="p-6 border-[1.5px] border-gray-300 rounded-3xl gird grid-cols-3 grid-rows-3">
			<p className="text-right font-semibold">ثبت آدرس جدید</p>
			<hr className="bg-gray-300 h-[1.5px] col-span-2 my-5" />
			<div className="col-span-3 row-span-1 gap-4 flex justify-between">
				<InputField
					name="کد پستی"
					placeholder="لطفا کد پستی را وارد نمایید"
					setText={setPostAddress}
					className="w-full"
				/>

				<ComboBox
					name="شهر"
					placeholder="لطفا شهر موردنظر را پیدا کنید."
					options={Cities.filter(
						(ct) => ct.province_id === province?.id
					).map((ct) => ct.name)}
					selected={city?.name}
					setSelected={(ct) =>
						setCity(
							Cities.filter(
								(c) =>
									c.name === ct &&
									c.province_id === province?.id
							)[0]
						)
					}
					disabled={province === undefined}
					className="w-full"
				/>

				<ComboBox
					name="استان"
					placeholder="لطفا استان موردنظر را پیدا کنید."
					options={Provinces.map((pr) => pr.name)}
					selected={province?.name}
					setSelected={(pr: string) => {
						setProvince(Provinces.filter((p) => p.name === pr)[0]);
						setCity(undefined);
					}}
					className="w-full"
				/>
			</div>
			<div className="col-span-3 row-span-1 mt-4">
				<InputField
					name={"آدرس"}
					placeholder={"لطفا آدرس را وارد نمایید"}
					rtl
				/>
			</div>
			<div className="mt-4">
				<Button
					color="red"
					text="افزودن ادرس"
					onClick={() => {
						finish();
					}}
					className="px-8 py-3"
					icon={<Add />}
				/>
			</div>
		</div>
	);
}
