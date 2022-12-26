export default class DataOrError<T> {
	data?: T;
	loading = true;
	error?: Error;
}
