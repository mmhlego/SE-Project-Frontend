import DiscountToken from "./DiscountToken";

export default interface DiscountTokens {
	tokensPerPage: number;
	page: number;
	tokens: DiscountToken[];
}
