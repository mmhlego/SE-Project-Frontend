import Statistic from "./Statistic";

export default interface Statistics {
	statsPerPage: number;
	page: number;
	stats: Statistic[];
}
