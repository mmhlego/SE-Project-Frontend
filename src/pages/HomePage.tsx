import Loading from "components/Loading";
import ProductItem from "components/ProductItem";
import { useGetApi } from "hooks/useApi";
import { ArrowLeft2 } from "iconsax-react";
import Product from "model/Product";
import Products from "model/Products";
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import MiniPoster1 from "../assets/images/MiniPoster1.png";
import MiniPoster2 from "../assets/images/MiniPoster2.png";
import MiniPoster3 from "../assets/images/MiniPoster3.png";
import MiniPoster4 from "../assets/images/MiniPoster4.png";
import Poster from "../assets/images/Poster.png";
import Sale from "../assets/images/Sale.png";

export default function HomePage() {
	const p: Product = {
		id: "sample",
		name: "گوشی شیائومی نوت 11",
		category: "Digital",
		image: "https://www.technolife.ir/image/color_image_TLP-3554_a7dae8_ca79bb9c-a389-45df-a811-6fedaf224c2e.png",
		description: "Yek gooshi khoob",
		likes: 10,
		dislikes: 5,
	};

	const [highDiscountsDoe, getHighDiscounts] = useGetApi<Products>(
		"https://localhost:5000/products"
	);

	const [bestSellerDoe, getBestSellers] = useGetApi<Products>(
		"https://localhost:5000/products"
	);

	const [mostViewedDoe, getMostViewed] = useGetApi<Products>(
		"https://localhost:5000/products"
	);

	useEffect(() => {
		getBestSellers({
			productsPerPage: 8,
			page: 1,
		});
		getHighDiscounts({
			productsPerPage: 8,
			page: 1,
		});
		getMostViewed({
			productsPerPage: 8,
			page: 1,
		});
	}, []);

	return (
		<div className="flex flex-col gap-5 py-6">
			<Swiper
				navigation
				modules={[Navigation, Pagination]}
				pagination
				loop
				className="w-full"
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
			<div className="bg-sky-100 mx-10 grid grid-rows-[15%_auto] grid-cols-[80%_auto] rounded-2xl pb-5">
				<p className="col-span-2 text-2xl text-end font-bold p-4 text-blue">
					تخفیف ویژه
				</p>

				<div dir="rtl" className="h-full overflow-x-scroll pb-3">
					<div
						dir="ltr"
						className="h-full flex flex-row-reverse gap-5 w-max"
					>
						{highDiscountsDoe.loading ||
						!("data" in highDiscountsDoe) ? (
							<Loading size={20} />
						) : (
							highDiscountsDoe.data.products.map((p, _) => (
								<ProductItem key={_} product={p} />
							))
						)}
					</div>
				</div>

				<div className="flex flex-col gap-3 items-center justify-between py-5">
					<p className="mx-3 text-center px-2">
						خرید تمامی محصولات با
						<span className="text-red"> 20 </span>
						درصد تخفیف
					</p>
					<img className="w-4/5 aspect-square" src={Sale} />
					<a className="text-blue flex gap-2" href="#">
						<ArrowLeft2 />
						مشاهده همه
					</a>
				</div>
			</div>
			<div className="grid grid-cols-4 mx-10 gap-4">
				<img className="w-full" src={MiniPoster4} />
				<img className="w-full" src={MiniPoster3} />
				<img className="w-full" src={MiniPoster2} />
				<img className="w-full" src={MiniPoster1} />
			</div>
			<div className="mx-10">
				<img className="rounded-2xl w-full" src={Poster} />
			</div>
			<div className="bg-sky-100 mx-10 grid grid-rows-[15%_auto] rounded-2xl pb-2">
				<p className="text-2xl text-end font-bold p-4 text-blue">
					محصولات پرفروش
				</p>

				<div dir="rtl" className="h-full overflow-x-scroll pb-2 px-3">
					<div
						dir="ltr"
						className="h-full flex flex-row-reverse gap-5 w-max"
					>
						{bestSellerDoe.loading || !("data" in bestSellerDoe) ? (
							<Loading size={20} />
						) : (
							bestSellerDoe.data.products.map((p, _) => (
								<ProductItem key={_} product={p} />
							))
						)}
					</div>
				</div>
			</div>
			<div className="bg-gray-200 mx-10 rounded-2xl overflow-hidden grid grid-cols-4 grid-rows-2 gap-3 aspect-[3/1]">
				<div className="col-span-1 row-span-2 bg-orange rounded-2xl"></div>
				<div className="col-span-2 row-span-1 bg-purple rounded-2xl"></div>
				<div className="col-span-1 row-span-1 bg-black rounded-2xl"></div>
				<div className="col-span-1 row-span-1 bg-blue rounded-2xl"></div>
				<div className="col-span-2 row-span-1 bg-green rounded-2xl"></div>
			</div>
			<div className="bg-sky-100 mx-10 grid grid-rows-[15%_auto] rounded-2xl pb-2">
				<p className="text-2xl text-end font-bold p-4 text-blue">
					محصولات پربازدید
				</p>

				<div dir="rtl" className="h-full overflow-x-scroll pb-2 px-3">
					<div
						dir="ltr"
						className="h-full flex flex-row-reverse gap-5 w-max"
					>
						{mostViewedDoe.loading || !("data" in mostViewedDoe) ? (
							<Loading size={20} />
						) : (
							mostViewedDoe.data.products.map((p, _) => (
								<ProductItem key={_} product={p} />
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
