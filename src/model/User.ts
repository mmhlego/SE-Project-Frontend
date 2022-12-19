import { AccessLevel } from "utils";

export default interface User {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	profileImage?: string;
	birthDate: string;
	accessLevel: AccessLevel;
	restricted: boolean;
}
