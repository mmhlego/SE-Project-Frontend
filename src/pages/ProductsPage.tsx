import Button from "components/Button";
import CheckBox from "components/CheckBox";
import CollapsiblePanel from "components/CollapsiblePanel";
import Loading from "components/Loading";
import ProductItem from "components/ProductItem";
import RadioSection from "components/RadioSection";
import { useGetApi } from "hooks/useApi";
import { Filter } from "iconsax-react";
import Pagination from "model/Pagination";
import Product, { Categories } from "model/Product";
import { useEffect, useState } from "react";

interface ProductsRequestBody {
	productsPerPage: number;
	page: number;
	priceFrom?: number;
	priceTo?: number;
	available?: boolean;
	category?: Categories;
}

export default function ProductsPage() {
	const [products, loadProducts] = useGetApi<Pagination<Product>>(
		"https://localhost:5000/products",
		() => {
			console.log("loaded");
		},
		() => {
			console.log("Error");
		}
	);

	// ============== Filter Details ==============

	const [selectedCategory, setSelectedCategory] = useState<
		Categories | undefined
	>(undefined);
	const [onlyAvailable, setOnlyAvailable] = useState(false);
	const [page, setPage] = useState(1);

	const loadPage = () => {
		loadProducts({
			productsPerPage: 50,
			page: page,
			category: selectedCategory,
			available: onlyAvailable,
		});
	};

	useEffect(loadPage, []);

	// ============================================

	return (
		<div className="grid grid-cols-[75%_auto] py-5">
			{!products.loading && "data" in products ? (
				<div className="grid gap-3 px-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit">
					{products.data?.data.map((p, _) => (
						<ProductItem key={_} product={p} />
					))}
				</div>
			) : (
				<div className="w-full py-10">
					<Loading className="mx-auto" size={32} />
				</div>
			)}

			<div>
				<div className="sticky top-4">
					<CollapsiblePanel text="دسته بندی محصول">
						<RadioSection
							name="ProductsCategory"
							options={[
								{ label: "کالای دیجیتال", value: "Digital" },
								{
									label: "مد و پوشاک",
									value: "Fashion",
								},
								{ label: "خودرو", value: "Cars" },
								{
									label: "زیبایی و سلامت",
									value: "HealthAndBeauty",
								},
								{
									label: "لوازم خانگی",
									value: "HomeAppliances",
								},
								{ label: "کتاب", value: "Books" },
							]}
							onSelect={(val) =>
								setSelectedCategory(val as Categories)
							}
						/>
					</CollapsiblePanel>

					<CollapsiblePanel text="بازه قیمت محصول">
						<CheckBox initial text="" />
						<CheckBox initial text="" />
					</CollapsiblePanel>

					<div className="w-full py-5 px-4 border-2 rounded-lg flex justify-center duration-300 border-black hover:border-blue/80">
						<CheckBox
							text="فقط کالا های موجود"
							onClick={(newVal) => setOnlyAvailable(newVal)}
						/>
					</div>

					<Button
						text="فیلتر کن"
						onClick={() => {
							loadPage();
							window.scrollTo(0, 0);
						}}
						icon={<Filter variant="Bold" />}
						filled
						className="w-full mt-4"
					/>
				</div>
			</div>
		</div>
	);
}
