import Customer from "./Customer";

export default interface Customers {
	customerPerPage: number;
	page: number;
	customers: Customer[];
}
