import Cart from "./Cart";

export default interface Carts {
	cartsPerPage: number;
	page: number;
	carts: Cart[];
}
