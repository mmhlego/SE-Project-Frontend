import Seller from "./Seller";

export default interface Sellers {
	sellersPerPages: number;
	page: number;
	sellers: Seller[];
}
