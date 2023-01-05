import { ArrowRight, TickCircle } from "iconsax-react";

export default function Stage3() {
	return (
		<div className="border-[1.5px] col-span-2 row-span-1 border-gray-300 rounded-3xl p-5">
			<a className="text-blue flex gap-2 items-center" href="/">
				بازگشت به صفحه اصلی
				<ArrowRight size={20} />
			</a>
			<div className="flex flex-col items-center h-full justify-center pb-20">
				<TickCircle size={200} variant="Bold" color="#06C574" />
				<p dir="rtl" className="font-medium">
					پرداخت با موفقیت انجام شد !
				</p>
			</div>
		</div>
	);
}
