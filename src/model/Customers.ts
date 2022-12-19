import customer from "./Customer";

export default interface customers {
	customerPerPage: number;
	page: number;
	customers: customer[];
}
