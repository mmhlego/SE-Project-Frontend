export type color =
	| "blue"
	| "orange"
	| "black"
	| "white"
	| "green"
	| "purple"
	| "yellow"
	| "red"
	| "cyan"
	| "gray-100"
	| "gray-200"
	| "gray-300"
	| "gray-400"
	| "gray-500";

export const getBorderStyle = (color: color) => {
	if (color === "orange") return "border-orange";
	if (color === "black") return "border-black";
	if (color === "white") return "border-white";
	if (color === "green") return "border-green";
	if (color === "purple") return "border-purple";
	if (color === "yellow") return "border-yellow";
	if (color === "red") return "border-red";
	if (color === "cyan") return "border-cyan";
	if (color === "gray-100") return "border-gray-100";
	if (color === "gray-200") return "border-gray-200";
	if (color === "gray-300") return "border-gray-300";
	if (color === "gray-400") return "border-gray-400";
	if (color === "gray-500") return "border-gray-500";
	return "border-blue";
};

export const getTextStyle = (color: color) => {
	if (color === "orange") return "text-orange";
	if (color === "black") return "text-black";
	if (color === "white") return "text-white";
	if (color === "green") return "text-green";
	if (color === "purple") return "text-purple";
	if (color === "yellow") return "text-yellow";
	if (color === "red") return "text-red";
	if (color === "cyan") return "text-cyan";
	if (color === "gray-100") return "text-gray-100";
	if (color === "gray-200") return "text-gray-200";
	if (color === "gray-300") return "text-gray-300";
	if (color === "gray-400") return "text-gray-400";
	if (color === "gray-500") return "text-gray-500";
	return "text-blue";
};

export const getBackgroundStyle = (color: color) => {
	if (color === "orange") return "bg-orange";
	if (color === "black") return "bg-black";
	if (color === "white") return "bg-white";
	if (color === "green") return "bg-green";
	if (color === "purple") return "bg-purple";
	if (color === "yellow") return "bg-yellow";
	if (color === "red") return "bg-red";
	if (color === "cyan") return "bg-cyan";
	if (color === "gray-100") return "bg-gray-100";
	if (color === "gray-200") return "bg-gray-200";
	if (color === "gray-300") return "bg-gray-300";
	if (color === "gray-400") return "bg-gray-400";
	if (color === "gray-500") return "bg-gray-500";
	return "bg-blue";
};
