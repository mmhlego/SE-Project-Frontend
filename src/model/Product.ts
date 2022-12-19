export default interface Product {
	id: string;
	name: string;
	category: string;
	image: string;
	description: string;
	likes?: number;
	dislikes?: number;
}
