import CheckBox from "components/CheckBox";
import CollapsiblePanel from "components/CollapsiblePanel";
import DataOrError from "model/DataOrError";
import Products from "model/Products";
import { useState } from "react";

export default function ProductsPage() {
	const [products, setProducts] = useState<DataOrError<Products>>();

	return (
		<div className="grid grid-cols-[75%_auto] py-5">
			<div className="p-5"></div>
			<div>
				<CollapsiblePanel text="دسته بندی محصول">
					<CheckBox initial text="آیتم یک" />
					<CheckBox initial text="آیتم دو" />
					<CheckBox initial text="آیتم سه" />
					<CheckBox initial text="آیتم چهار" />
				</CollapsiblePanel>

				<CollapsiblePanel text="دسته بندی محصول">
					<CheckBox initial text="آیتم یک" />
					<CheckBox initial text="آیتم دو" />
					<CheckBox initial text="آیتم سه" />
					<CheckBox initial text="آیتم چهار" />
				</CollapsiblePanel>

				<CollapsiblePanel text="دسته بندی محصول">
					<CheckBox initial text="آیتم یک" />
					<CheckBox initial text="آیتم دو" />
					<CheckBox initial text="آیتم سه" />
					<CheckBox initial text="آیتم چهار" />
				</CollapsiblePanel>
			</div>
		</div>
	);
}
