import Product from "./Product";

export interface Products {
	productsPerPage: number;
	page: number;
	products: Product[];
}
