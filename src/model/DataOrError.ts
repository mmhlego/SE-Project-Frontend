import { AxiosError } from "axios";

export default class DataOrError<T> {
	data?: T;
	loading = true;
	error?: AxiosError;
}
