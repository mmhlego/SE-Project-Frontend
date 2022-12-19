import User from "./User";

export default interface Users {
	usersPerPage: number;
	page: number;
	users: User[];
}
