import Button from "components/Button";
import CommentItem from "components/CommentItem";
import Loading from "components/Loading";
import ProductItem from "components/ProductItem";
import Tag from "components/Tag";
import { useGetApi } from "hooks/useApi";
import {
	ArrowLeft2,
	Book,
	Book1,
	CloseCircle,
	DollarSquare,
	Shop,
	ShoppingCart,
	TickCircle,
} from "iconsax-react";
import Comment from "model/Comment";
import { DataOrError } from "model/DataOrError";
import Pagination from "model/Pagination";
import Product from "model/Product";
import ProductPrice from "model/ProductPrice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getDiscountedPrice } from "utils";

interface PriceSectionProps {
	selectedPrice: DataOrError<ProductPrice>;
}
function PriceSection({ selectedPrice }: PriceSectionProps) {
	if (selectedPrice.loading) {
		return <Loading size={8} />;
	}

	if ("error" in selectedPrice) {
		return <p className="text-center font-medium">قیمتی یافت نشد</p>;
	}

	return (
		<>
			{getDiscountedPrice(selectedPrice.data).hasDiscount && (
				<>
					<div
						className="flex gap-3 items-center justify-center"
						dir="ltr"
					>
						<Tag
							text={getDiscountedPrice(selectedPrice.data).text}
							color="red"
						/>
						<p
							className="text-center line-through text-xs flex"
							dir="rtl"
						>
							{selectedPrice.data.price} تومان
						</p>
					</div>

					<span />
				</>
			)}

			{!selectedPrice.loading && "data" in selectedPrice ? (
				<p className="text-center font-medium">
					{getDiscountedPrice(selectedPrice.data).afterPrice} تومان
				</p>
			) : (
				<Loading size={4} />
			)}
		</>
	);
}

interface SellerSelectProps {
	price: ProductPrice;
	selectPrice: (p: DataOrError<ProductPrice>) => void;
}
function SellerSelect({ price, selectPrice }: SellerSelectProps) {
	return (
		<div
			dir="rtl"
			className="w-full flex flex-col gap-2 p-3 rounded-lg bg-white"
		>
			<div className="flex gap-2">
				<Shop color="#2388FF" variant="Bold" />
				<p className="font-bold">فروشنده:</p>
				{price.seller.name}
			</div>

			<hr className="w-full bg-gray-200" />

			<p className="flex gap-2">
				{price.amount > 0 ? (
					<>
						<TickCircle color="#06C574" variant="Bold" />
						موجود در انبار (آماده ارسال)
					</>
				) : (
					<>
						<CloseCircle color="#EF3B50" variant="Bold" />
						ناموجود
					</>
				)}
			</p>

			<hr className="w-full bg-gray-300" />

			<div className="flex flex-col gap-1 justify-between">
				<p className="font-bold flex gap-2">
					<DollarSquare color="#FF9A23" variant="Bold" />
					قیمت فروشنده:
				</p>
				<div className="flex gap-2 justify-end">
					{<Tag text={getDiscountedPrice(price).text} color="red" />}
					<p>{price.price} تومان</p>
				</div>
			</div>

			<Button
				text="انتخاب فروشنده"
				onClick={() => {
					selectPrice({
						loading: false,
						data: price,
					});
				}}
				color="orange"
				icon={<ShoppingCart variant="Bold" />}
				className="w-full flex-row-reverse gap-3"
			/>
		</div>
	);
}

interface CommentSectionProps {
	commentsDoe: DataOrError<Pagination<Comment>>;
}
function CommentsSection({ commentsDoe }: CommentSectionProps) {
	if (commentsDoe.loading) {
		return <Loading />;
	}

	if ("error" in commentsDoe) {
		return <p>اروری رخ داده است</p>;
	}

	console.log(commentsDoe.data.data);

	return (
		<div className="py-10" id="comments" dir="rtl">
			<p className="font-medium text-lg border-b-4 border-orange py-2 w-48 mb-10">
				دیدگاه مشتریان
			</p>

			<div className="px-16 flex flex-col">
				{commentsDoe.data.data.map((cmt, _) => (
					<CommentItem key={_} comment={cmt} />
				))}
			</div>
		</div>
	);
}

export default function ProductPage() {
	const productId = useLocation().pathname.split("/")[2];

	const [selectedPrice, setSelectedPrice] = useState<
		DataOrError<ProductPrice>
	>({
		loading: true,
	});

	const [productDoe, getProduct] = useGetApi<Product>(
		`https://localhost:5000/products/${productId}`,
		() => {
			getPrices({ productId: productId });
			getComments({ productId: productId });
		}
	);

	const [pricesDoe, getPrices] = useGetApi<Pagination<ProductPrice>>(
		"https://localhost:5000/prices",
		(res) => {
			console.log("Prices", res);

			if (res.data.length > 0)
				setSelectedPrice({
					loading: false,
					data: res.data[0],
				});
			else
				setSelectedPrice({
					loading: false,
					error: new Error("No Sellers"),
				});
		},
		() =>
			setSelectedPrice({
				loading: false,
				error: new Error("No Sellers"),
			})
	);

	const [commentsDoe, getComments] = useGetApi<Pagination<Comment>>(
		`https://localhost:5000/comments`
	);

	const [similarProductsDoe, getSimilarProducts] = useGetApi<
		Pagination<Product>
	>("https://localhost:5000/products");

	useEffect(() => {
		getProduct();
		getSimilarProducts({
			page: 1,
			productsPerPage: 10,
		});
	}, []);

	if (productDoe.loading) {
		return <Loading size={32} className="my-12" />;
	}

	if ("error" in productDoe) {
		return <Loading size={32} />;
	}

	return (
		<div className="flex flex-col gap-5 items-center">
			<div className="grid grid-cols-[65%_auto] grid-rows-[2.5rem_auto] gap-3 w-full p-5">
				<p
					className="border-gray-300 border-b-2 font-bold text-lg"
					dir="rtl"
				>
					{productDoe.data.name}
				</p>
				<div className="col-span-1 row-span-2 w-full h-fit border-2 border-gray-200 rounded-xl flex flex-col items-center py-3 gap-2">
					<img
						className="w-5/6 aspect-square"
						src={productDoe.data.image}
					/>

					<hr className="w-full bg-gray-200" />

					<div dir="rtl" className="w-full flex flex-col gap-2 px-3">
						<div className="flex gap-2">
							<Shop color="#2388FF" variant="Bold" />
							<p className="font-bold">فروشنده:</p>
							{selectedPrice.loading ? (
								<Loading className="mr-8" size={2} />
							) : "data" in selectedPrice ? (
								selectedPrice.data.seller.name
							) : (
								"فروشنده ای یافت نشد"
							)}
						</div>

						<hr className="w-full bg-gray-200" />

						<p className="flex gap-2">
							{!selectedPrice.loading &&
							"data" in selectedPrice ? (
								<>
									<TickCircle
										color="#06C574"
										variant="Bold"
									/>
									موجود در انبار
								</>
							) : (
								<>
									<CloseCircle
										color="#EF3B50"
										variant="Bold"
									/>
									ناموجود
								</>
							)}
						</p>

						<hr className="w-full bg-gray-200" />

						<div className="grid grid-cols-2 gap-1 w-full">
							<p className="font-bold flex gap-2">
								<DollarSquare color="#FF9A23" variant="Bold" />
								قیمت فروشنده:
							</p>

							<PriceSection selectedPrice={selectedPrice} />
						</div>

						<Button
							text="افزودن به سبدخرید"
							onClick={() => {
								//TODO
							}}
							filled
							color="blue"
							icon={<ShoppingCart variant="Bold" />}
							className="w-full flex-row-reverse gap-3"
						/>
					</div>
				</div>
				<div className="bg-sky-100 flex flex-col gap-4 items-center rounded-xl px-5 pb-5">
					<div
						className="px-8 py-2 bg-white rounded-b-xl text-center"
						dir="rtl"
					>
						<p className="font-bold text-lg">فروشندگان:</p>

						{"data" in pricesDoe && (
							<p className="">
								{pricesDoe.data.data.length + " فروشنده"}
							</p>
						)}
					</div>

					<div className="w-full grid grid-cols-1 justify-evenly gap-4 md:grid-cols-2 xl:grid-cols-3">
						{"data" in pricesDoe && (
							<>
								{pricesDoe.data.data.map((p, _) => (
									<SellerSelect
										key={_}
										price={p}
										selectPrice={setSelectedPrice}
									/>
								))}
								{/* <SellerSelect
									price={{
										amount: 10,
										discount: "",
										id: "1214",
										price: 500000,
										productId: "",
										seller: {
											id: "sellerId",
											name: "Sample seller",
											information: "Sample information",
											address: "string",
										},
									}}
									selectPrice={setSelectedPrice}
								/> */}
							</>
						)}
					</div>
				</div>
			</div>

			<div className="h-10 bg-gray-200 flex justify-evenly"></div>

			<div className="px-4 w-full flex flex-col">
				<div className="flex justify-between px-6 pb-3">
					<a
						href="/products"
						target="_blank"
						className="text-lg text-end p-4 text-blue flex gap-2 items-center"
					>
						<ArrowLeft2 />
						مشاهده همه
					</a>

					<p className="text-2xl text-end font-bold p-4 text-blue">
						محصولات مشابه
					</p>
				</div>

				<div
					dir="rtl"
					className="w-full overflow-hidden flex gap-5 relative"
				>
					{"data" in similarProductsDoe ? (
						<>
							{similarProductsDoe.data.data.map((p, _) => (
								<ProductItem key={_} product={p} />
							))}
						</>
					) : (
						<></>
					)}

					<div className="bg-gradient-to-r from-white to-transparent absolute left-0 top-0 h-full w-1/6 pointer-events-none" />
				</div>
			</div>

			<div className="w-full px-5 pb-12">
				<div
					className="flex sticky top-0 mt-5 border-b-2 border-gray-300 bg-white"
					dir="rtl"
				>
					<a
						className="flex gap-2 border-2 border-b-0 border-gray-300 px-8 py-3 w-fit font-medium"
						href="#details"
					>
						مشخصات
						<Book variant="Bold" />
					</a>

					<a
						className="flex gap-2 border-2 border-b-0 border-gray-300 px-8 py-3 w-fit font-medium"
						href="#comments"
					>
						دیدگاه ها
						<Book1 variant="Bold" />
					</a>
				</div>

				<div
					className="py-10 border-b-2 border-gray-300"
					id="details"
					dir="rtl"
				>
					<p className="font-medium text-lg border-b-4 border-orange py-2 w-48">
						معرفی
					</p>
					<p className="py-4">{productDoe.data.description}</p>
				</div>
				<CommentsSection commentsDoe={commentsDoe} />
			</div>
		</div>
	);
}
