import Button from "components/Button";
import InputField from "components/InputField";
import {
	CallCalling,
	Sms,
	Location,
	ArrowLeft2,
	SafeHome,
	Send,
} from "iconsax-react";

export default function SupportPage() {
	return (
		<>
			<div className="flex justify-end gap-2 mr-8 mt-6">
				<p className="font-light">پشتیبانی</p>
				<ArrowLeft2 />
				<SafeHome variant="Bold" />
			</div>
			<div className="flex">
				<div className="w-1/3 p-8">
					<div className="flex flex-col gap-y-4 border-[1.5px] border-gray-300 rounded-3xl h-fit p-4">
						<p
							className="font-bold flex justify-start gap-2"
							dir="rtl"
						>
							<CallCalling variant="Bold" color="blue" />
							شماره تماس :
						</p>

						<p className="flex gap-5">041-3555555 , 0914555555</p>

						<p dir="rtl">
							هفت روز هفته، از ساعت 8 الی 14 پاسخگوی سوالات
							شماهستیم.
						</p>
						<hr className="bg-gray-300 h-[1.5px] w-full" />
						<p
							className="font-bold flex justify-start gap-2"
							dir="rtl"
						>
							<Sms variant="Outline" color="#FF9A23" />
							ایمیل :
						</p>
						<p>Sevenshop@gmail.com</p>
						<hr className="bg-gray-300 h-[1.5px] w-full" />
						<p
							className="font-bold flex justify-start gap-2"
							dir="rtl"
						>
							<Location variant="Bold" color="#FF9A23" />
							آدرس :
						</p>
						<p dir="rtl">
							اذربایجان شرقی ، تبریز ، بلوار 29 بهمن ، دانشگاه
							تبریز ، دانشکده برق و کامپیوتر ، کلاس 256
						</p>
						<p className="pt-5" dir="rtl">
							در صورتی که خارج از ساعات اداری تماس گرفتید ، می
							توانید از طریق فرم سمت راست پیغام خود را بگذارید ،
							کارشناسان ما پس از بررسی با شما تماس خواهندگرفت.
						</p>
					</div>
				</div>
				<div className="w-2/3 p-8">
					<div className="p-6 border-[1.5px] border-gray-300 rounded-3xl P-4">
						<p dir="rtl">
							پیشنهاد می‌کنیم قبل از تماس با پشتیانی صفحه
							<span className="text-blue"> پرسش های متداول </span>
							را بخوانید؛ به احتمال زیاد جوابتان آن‌جا منتظر
							شماست.
						</p>
						<div className="flex justify-end pt-4 gap-5">
							<InputField
								name="ایمیل"
								placeholder="لطفا ایمیل خود را وارد نمایید"
								className="w-1/3"
							/>
							<InputField
								name="نام شما"
								placeholder="لطفا نام خود را وارد نمایید"
								className="w-1/3"
							/>
						</div>
						<div className="flex justify-end pt-4 gap-5">
							<InputField
								name="موضوع"
								className="w-1/3"
								placeholder={""}
							/>
							<InputField
								name="شماره تماس"
								placeholder="لطفا شماره خود را وارد نمایید"
								className="w-1/3"
							/>
						</div>
						<div className="pt-4">
							<label className="flex justify-end font-semibold">
								متن پیام
							</label>
							<textarea
								name="comment"
								cols={123}
								rows={3}
								className="p-4 mt-2 resize-none border-gray-300 border-2 rounded-md hover:border-blue focus:outline-none focus:border-blue"
								dir="rtl"
							></textarea>
						</div>
						<div className="pt-4">
							<Button
								color="blue"
								filled
								text={"ارسال"}
								onClick={function (): void {
									throw new Error(
										"Function not implemented."
									);
								}}
								className="px-8 py-3 w-56 gap-12"
								icon={<Send variant="Bold" color="#F9F9F9" />}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
