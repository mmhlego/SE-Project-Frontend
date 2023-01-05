import Button from "components/Button";
import InputField from "components/InputField";
import MellatBank from "../images/MellatBank.png";
import {
	Add,
	CloseCircle,
	DiscountShape,
	DollarSquare,
	Message,
	Shop,
	ShoppingCart,
	TruckFast,
} from "iconsax-react";
import { useState } from "react";
import Logo from "../assets/Logo";

function NumberCircle({ num }: { num: number }) {
	return (
		<div className="border-[1.5px] border-black rounded-full h-8 w-8 flex items-center justify-center">
			{num}
		</div>
	);
}

function Stage1() {
	const [changeAddress, setChangeAddress] = useState(false);
	return changeAddress ? (
		<div className="p-6 border-[1.5px] border-gray-300 rounded-3xl gird grid-cols-3 grid-rows-3">
			<p className="w-full text-right font-semibold">ثبت آدرس جدید</p>
			<hr className="bg-gray-300 h-[1.5px] col-span-2 my-5" />
			<div
				className="col-span-3 row-span-1 flex justify-between"
				dir="rtl"
			>
				<div>
					<label>استان</label>
					<select
						name="country"
						id="choose-country"
						className="border-[2px] border-gray-300 rounded-lg h-14 w-72"
					>
						<option value="ostan" disabled selected>
							لطفا استان موردنظر را پیدا کنید.
						</option>
						<option value="azarbaijan">آذربایجان شرقی</option>
						<option value="azarbaijan">آزربایجان غربی</option>
						<option value="tehran">تهران</option>
						<option value="esfahan">اصفهان</option>
						<option value="ardabil">اردبیل</option>
						<option value="zanjan">زنجان</option>
						<option value="gazvin">قزوین</option>
					</select>
				</div>

				<div className="flex flex-col">
					<label>شهر</label>
					<select
						name="country"
						className="border-[2px] border-gray-300 rounded-lg h-14 w-72"
					>
						<option value="ostan" disabled selected>
							لطفا شهر موردنظر را پیدا کنید.
						</option>
						<option value="azarbaijan">تبریز</option>
						<option value="tehran">تهران</option>
						<option value="esfahan">اصفهان</option>
						<option value="ardabil">اردبیل</option>
						<option value="zanjan">زنجان</option>
						<option value="gazvin">قزوین</option>
					</select>
				</div>
				<InputField
					name={"کد پستی"}
					placeholder={"لطفا کد پستی را وارد نمایید"}
					className="w-24"
				/>
			</div>
			<div className="col-span-3 row-span-1 mt-4">
				<InputField
					name={"آدرس"}
					placeholder={"لطفا آدرس را وارد نمایید"}
				/>
			</div>
			<div className="mt-4">
				<Button
					color="red"
					text={"افزودن ادرس"}
					onClick={function (): void {
						throw new Error("Function not implemented.");
					}}
					className="w-40 h-12"
				/>
			</div>
		</div>
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

function Stage2() {
	return (
		<>
			<div className="border-[1.5px] border-gray-300 rounded-3xl">
				<div className="flex justify-end mr-8 my-4">
					<Button
						text={"ثبت کد تخفیف"}
						onClick={function (): void {
							throw new Error("Function not implemented.");
						}}
						className="h-12 mr-7 mt-8"
						accent="blue"
					/>
					<InputField
						icon={<DiscountShape color="blue" variant="Bold" />}
						name={"ثبت کد تخفیف"}
						placeholder={"اگر کد تخفیف دارید در این قسمت وارد کنید"}
						className=""
					/>
				</div>
			</div>
			<div
				className="border-[1.5px] border-gray-300 rounded-3xl flex flex-col gap-4 p-6"
				dir="rtl"
			>
				<p className="font-semibold">انتخاب درگاه بانکی برای پرداخت</p>
				<hr className="bg-gray-300 h-[1.5px] col-span-2" />
				<div className="bg-gray-200 h-40 w-full rounded-3xl grid grid-cols-4 grid-rows-1 gap-4 p-5">
					<div className="bg-white rounded-3xl">
						<img className="flex mr-5 mt-1" src={MellatBank} />
					</div>
					<div className="bg-white rounded-3xl">
						<img className="flex mr-5 mt-1" src={MellatBank} />
					</div>
					<div className="bg-white rounded-3xl">
						<img className="flex mr-5 mt-1" src={MellatBank} />
					</div>
					<div className="bg-white rounded-3xl">
						<img className="flex mr-5 mt-1" src={MellatBank} />
					</div>
				</div>
			</div>
		</>
	);
}

function Stage3() {
	return (
		<>
			<div className="w-screen h-screen"></div>
		</>
	);
}

export default function Payment() {
	const [status, setStatus] = useState(1); // 1 2 3

	return (
		<div className="w-screen h-screen">
			<div className="bg-gradient-to-b from-blue to-white h-1/4 flex flex-col items-center gap-4">
				<Logo className="mt-7" />
				<div className="w-full flex justify-around font-semibold">
					<div className="flex gap-2 items-center">
						اتمام فرایند خرید <NumberCircle num={3} />
					</div>
					<div className="flex gap-2 items-center">
						بازبینی و پرداخت
						<NumberCircle num={2} />
					</div>
					<div className="flex gap-2 items-center">
						انتخاب آدرس و شیوه ارسال <NumberCircle num={1} />
					</div>
				</div>
				<div className="w-full h-1 bg-gray-200 flex items-center flex-row-reverse">
					<hr
						className={`h-1 bg-green ${
							status == 3
								? "w-full"
								: status == 2
								? "w-2/3"
								: "w-1/3"
						}`}
					/>
					<div className="bg-green h-5 w-5 border-white border-4 rounded-full" />
				</div>
			</div>
			<div className="h-3/4 grid grid-cols-[25%_auto] gap-5 p-8">
				<div className="flex flex-col gap-y-4 border-[1.5px] border-gray-300 rounded-3xl h-fit items-center p-4">
					<div className="w-full flex justify-between">
						<p>1</p>
						<p className="font-bold flex gap-2" dir="rtl">
							<Shop variant="Bold" color="#2388FF" />
							تعداد کالا :
						</p>
					</div>
					<hr className="bg-gray-300 h-[1.5px] w-full" />
					<div className="w-full flex justify-between">
						<p>1</p>
						<p className="font-bold flex gap-2" dir="rtl">
							<DollarSquare variant="Bold" color="#FF9A23" />
							جمع مبلغ کالاها :
						</p>
					</div>
					<hr className="bg-gray-300 h-[1.5px] w-full" />
					<div className="w-full flex justify-between">
						<p>1</p>
						<p className="font-bold flex gap-2" dir="rtl">
							<DiscountShape color="#FF9A23" /> تخفیف :
						</p>
					</div>
					<hr className="bg-gray-300 h-[1.5px] w-full" />
					<div className="w-full flex justify-between">
						<p>1</p>
						<p className="font-bold flex gap-2" dir="rtl">
							<TruckFast variant="Bold" color="#06C574" />
							هزینه ارسال سفارش :
						</p>
					</div>
					<hr className="bg-gray-300 h-[1.5px] w-full" />
					<div className="w-full flex justify-between">
						<p>1</p>
						<p className="font-bold" dir="rtl">
							جمع سبد خرید :
						</p>
					</div>
					<Button
						filled
						icon={<ShoppingCart variant="Bold" />}
						text="تکمیل فرایند خرید"
						onClick={() =>
							setStatus((prev) => Math.min(3, prev + 1))
						}
						className="w-full gap-2"
					/>
				</div>
				<div className="max-h-full flex flex-col gap-5">
					{status === 1 && <Stage1 />}
					{status === 2 && <Stage2 />}
					{status === 3 && <Stage3 />}
				</div>
			</div>
		</div>
	);
}
