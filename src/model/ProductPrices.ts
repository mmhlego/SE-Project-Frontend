import ProductPrice from "./ProductPrice";

export default interface ProductPrices {
	pricesPerPage: number;
	page: number;
	prices: ProductPrice[];
}
