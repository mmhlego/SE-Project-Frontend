export default interface Comment {
	id: string;
	username: string;
	userImage?: string;
	productId: string;
	SendDate: string;
	Text: string;
	likes?: number;
	dislikes?: number;
}
