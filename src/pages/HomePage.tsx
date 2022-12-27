import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Sale from "../images/Sale.png";
import Miniposter1 from "../images/Miniposter1.png";
import Miniposter4 from "../images/Miniposter4.png";
import Miniposter3 from "../images/Miniposter3.png";
import Miniposter2 from "../images/Miniposter2.png";
import Poster from "../images/Poster.png";

export default function HomePage() {
	return (
		<>
			<Swiper
				navigation
				modules={[Navigation, Pagination]}
				pagination
				loop
				className="my-6"
			>
				<SwiperSlide>
					<img className="w-full" src={Poster} />
				</SwiperSlide>
				<SwiperSlide>
					<img className="w-full" src={Poster} />
				</SwiperSlide>
				<SwiperSlide>
					<img className="w-full" src={Poster} />
				</SwiperSlide>
				<SwiperSlide>
					<img className="w-full" src={Poster} />
				</SwiperSlide>
			</Swiper>

			<div>
				<div className="bg-sky-100 w-auto h-96 rounded-2xl mr-10 ml-10 my-6">
					<p className="text-2xl text-end font-bold p-4 text-blue">
						تخفیف ویژه
					</p>
					<div className="text-end leading-8 mr-6">
						خرید تمامی محصولات با
						<p className="text-red inline">20</p>
						درصد تخفیف
					</div>
					<div>
						<img
							className="h-40 float float-right mr-6"
							src={Sale}
						/>
						<a className="text-blue" href="">
							مشاهده همه
						</a>
					</div>
				</div>
				<div className="grid gap-x-5 gap-y-4 grid-cols-4 mr-10 ml-10 my-6">
					<div>
						<a href="">
							<img src={Miniposter4} />
						</a>
					</div>
					<div>
						<a href="">
							<img src={Miniposter3} />
						</a>
					</div>
					<div>
						<a href="">
							<img src={Miniposter2} />
						</a>
					</div>
					<div>
						<a href="">
							<img src={Miniposter1} />
						</a>
					</div>
				</div>
				<div className="mr-10 ml-10 my-6">
					<img className="rounded-2xl" src={Poster} />
				</div>
				<div className="bg-sky-100 w-auto h-96 rounded-2xl mr-10 ml-10 my-6">
					<div>
						<p className="text-2xl text-end font-bold p-4 text-blue">
							محصولات پر فروش
						</p>
					</div>
				</div>
				<div className="bg-gray-200 h-96 mx-10 rounded-2xl overflow-hidden my-6 grid grid-cols-4 grid-rows-2 gap-3">
					<div className="col-span-1 row-span-2 bg-orange rounded-2xl "></div>
					<div className="col-span-2 row-span-1 bg-purple rounded-2xl "></div>
					<div className="col-span-1 row-span-1 bg-black rounded-2xl "></div>
					<div className="col-span-1 row-span-1 bg-blue rounded-2xl "></div>
					<div className="col-span-2 row-span-1 bg-green rounded-2xl "></div>
				</div>
				<div className="bg-sky-100 w-auto h-96 rounded-2xl mr-10 ml-10 my-6">
					<p className="text-2xl text-end font-bold p-4 text-blue">
						محصولات پر بازدید
					</p>
				</div>
			</div>
		</>
	);
}
