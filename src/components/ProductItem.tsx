import Product from "model/Product";
import Tag from "./Tag";

interface Props {
	product: Product;
}

export default function ProductItem({ product }: Props) {
	return (
		<div className="grid grid-cols-2 justify-end border-2 border-gray-300 rounded-md p-4 gap-y-4">
			<p className="row-span-1 col-span-2"></p>
			<img
				className="row-span-1 col-span-2 max-w-[160px] aspect-square m-5"
				src={product.image}
			/>
			<p className="row-span-1 col-span-2 text-right font-bold">
				{product.name}
			</p>
			<p className="row-span-1 col-span-1 text-blue text-lg">
				{"۶,۰۰۰,۰۰۰ تومان"}
			</p>
			<Tag
				className="row-span-1 col-span-1 justify-self-end"
				text="%۱۰"
				color="red"
			/>
		</div>
	);
}
