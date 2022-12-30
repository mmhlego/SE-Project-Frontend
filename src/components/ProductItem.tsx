import DataOrError from "model/DataOrError";
import Product from "model/Product";
import Sellers from "model/Sellers";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tag from "./Tag";

interface Props {
	product: Product;
}

export default function ProductItem({ product }: Props) {
	const [sellers, setSellers] = useState<DataOrError<Sellers>>();

	useEffect(() => {
		setSellers({
			loading: true,
		});
	}, []);

	return (
		<div className="grid grid-cols-2 justify-end border-2 border-gray-300 rounded-md p-4 gap-y-3 bg-white">
			<p className="col-span-2 text-end text-red font-bold">فروش ویژه</p>
			<img
				className="col-span-2 max-w-[160px] aspect-square m-5"
				src={product.image}
			/>
			<p className="col-span-2 text-right font-bold">{product.name}</p>

			{!sellers?.loading ? (
				<>
					<p className="text-blue text-lg">{"۶,۰۰۰,۰۰۰ تومان"}</p>
					<Tag className="justify-self-end" text="%۱۰" color="red" />
				</>
			) : (
				<Loading size={5} className="col-span-2" />
			)}
		</div>
	);
}
