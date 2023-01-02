import Button from "components/Button";
import { ShoppingCart } from "iconsax-react";
import Logo from "../assets/Logo";
import Num1 from "../images/Num1.png";
import Num2 from "../images/Num2.png";
import Num3 from "../images/Num3.png";

export default function Payment() {
	return (
		<>
			<div className="bg-gradient-to-b from-blue to-white h-40">
				<a className="flex justify-center" href="">
					<Logo className="mt-7" />
				</a>
				<div className="flex justify-between mx-20 mt-6 font-semibold">
					<div>
						اتمام فرایند خرید <img src={Num3} />
					</div>

					<div>
						بازبینی و پرداخت
						<img src={Num2} />
					</div>

					<div>
						انتخاب آدرس و شیوه ارسال <img src={Num1} />
					</div>
				</div>
			</div>
			<div className="mx-10 overflow-hidden grid grid-cols-4 grid-rows-5 gap-3 aspect-[3/1] mt-7">
				<div
					className="flex flex-col gap-y-8 float-right text-right mr-12 font-bold mt-6 col-span-1 row-end-5 row-span-4 border-2 border-gray-300 rounded-3xl"
					dir="rtl"
				>
					<p>تعداد کالا :</p>
					<p>جمع مبلغ کالاها :</p>
					<p>تخفیف :</p>
					<p>هزینه ارسال سفارش :</p>
					<p>جمع سبد خرید :</p>
					<Button
						filled
						icon={<ShoppingCart />}
						text={"تکمیل فرایند خرید"}
						onClick={function (): void {
							throw new Error("Function not implemented.");
						}}
					/>
				</div>
				<div className="col-span-3 row-span-2 border-2 border-gray-300 rounded-3xl">
					<p className="float-right my-4 mx-5 font-semibold">آدرس</p>
					<p className="text-blue my-4 mx-5">ثبت آدرس جدید</p>
					<hr className="bg-gray-300 h-0.5 mx-6" />
				</div>
				<div className="col-span-3 row-span-3 border-2 border-gray-300 rounded-3xl">
					<p className="float-right my-4 mx-5 font-semibold">
						انتخاب شیوه آدرس
					</p>
					<hr className="bg-gray-300 h-0.5 mt-16 mx-5" />
					<div className="float-right mr-3 mt-20">
						<input
							checked
							id="default-radio-2"
							type="radio"
							value=""
							name="default-radio"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="default-radio-2"
							className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						></label>
					</div>
					<div
						className="grid grid-cols-1 gap-y-2 float-right text-right mr-36 font-bold mt-6 text-sm"
						dir="rtl"
					>
						<p className="text-red">
							مشترک گرامی، بازه زمانی ارسال سفارشات به شرح زیل می
							باشد
						</p>
						<p></p>
					</div>
				</div>
			</div>
		</>
	);
}
