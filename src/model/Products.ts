import Product from "./Product";

export default interface Products {
	productsPerPage: number;
	page: number;
	products: Product[];
}
