import { CartStatus } from "utils";

export default interface Cart {
	id: string;
	customerId?: string;
	products: ProductAmounts[];
	status: CartStatus;
	description?: string;
	updateDate?: string;
}

interface ProductAmounts {
	productId: string; // This is productPriceId
	amount: number;
}
