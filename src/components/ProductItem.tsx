import { useGetApi } from "hooks/useApi";
import { DataOrError } from "model/DataOrError";
import Product from "model/Product";
import ProductPrice from "model/ProductPrice";
import ProductPrices from "model/ProductPrices";
import { useEffect, useState } from "react";
import { getDiscountedPrice } from "utils";
import Loading from "./Loading";
import Tag from "./Tag";

interface PriceSectionProps {
	bestPrice: DataOrError<ProductPrice>;
}
function PriceSection({ bestPrice }: PriceSectionProps) {
	if (!("data" in bestPrice)) {
		return <Loading size={4} />;
	}

	if (!getDiscountedPrice(bestPrice.data).hasDiscount) {
		return (
			<p className="text-blue text-lg text-center pt-3" dir="rtl">
				{bestPrice.data.price} تومان
			</p>
		);
	}

	return (
		<div className="flex justify-between items-center">
			<div>
				<p
					className="text-gray-400 text-sm line-through mr-2"
					dir="rtl"
				>
					{bestPrice.data.price}
				</p>
				<p className="text-blue text-lg" dir="rtl">
					{getDiscountedPrice(bestPrice.data).afterPrice} تومان
				</p>
			</div>

			<Tag
				className="justify-self-end"
				text={getDiscountedPrice(bestPrice.data).text}
				color="red"
			/>
		</div>
	);
}

interface Props {
	product: Product;
	className?: string;
}

export default function ProductItem({ product, className }: Props) {
	const [prices, loadPrices] = useGetApi<ProductPrices>(
		"https://localhost:5000/prices"
	);
	const [bestPrice, setBestPrice] = useState<DataOrError<ProductPrice>>({
		loading: true,
	});

	useEffect(() => {
		loadPrices({ productId: product.id });
	}, []);

	useEffect(() => {
		if (!prices.loading && "data" in prices) {
			if (prices.data.prices.length === 0) {
				setBestPrice({ loading: false, error: new Error("No prices") });
			}

			let best = prices.data.prices[0];

			prices.data.prices.forEach((p) => {
				if (p.price < best.price) {
					best = p;
				}
			});

			setBestPrice({
				loading: false,
				data: best,
			});
		}
	}, [prices]);

	return (
		<div
			className={`flex flex-col border-2 border-gray-300 rounded-md p-4 gap-y-3 bg-white cursor-pointer ${className}`}
			onClick={() => window.open(`/products/${product.id}`, "_blank")}
		>
			<p
				className={
					"text-end text-red font-bold text-transparent " +
					("data" in bestPrice && bestPrice.data.discount !== "")
						? "text-transparent"
						: ""
				}
			>
				فروش ویژه
			</p>
			<img
				className="max-w-[160px] aspect-square m-5 self-center"
				src={product.image}
			/>
			<p className="text-right font-bold">{product.name}</p>

			{prices.loading ? (
				<Loading size={5} />
			) : (
				<PriceSection bestPrice={bestPrice} />
			)}
		</div>
	);
}
