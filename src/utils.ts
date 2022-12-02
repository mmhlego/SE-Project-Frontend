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
	| "gray1"
	| "gray2"
	| "gray3"
	| "gray4"
	| "gray5";

export const getBorderStyle = (color: color) => {
	if (color === "orange") return "border-orange";
	if (color === "black") return "border-black";
	if (color === "white") return "border-white";
	if (color === "green") return "border-green";
	if (color === "purple") return "border-purple";
	if (color === "yellow") return "border-yellow";
	if (color === "red") return "border-red";
	if (color === "cyan") return "border-cyan";
	if (color === "gray1") return "border-gray1";
	if (color === "gray2") return "border-gray2";
	if (color === "gray3") return "border-gray3";
	if (color === "gray4") return "border-gray4";
	if (color === "gray5") return "border-gray5";
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
	if (color === "gray1") return "text-gray1";
	if (color === "gray2") return "text-gray2";
	if (color === "gray3") return "text-gray3";
	if (color === "gray4") return "text-gray4";
	if (color === "gray5") return "text-gray5";
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
	if (color === "gray1") return "bg-gray1";
	if (color === "gray2") return "bg-gray2";
	if (color === "gray3") return "bg-gray3";
	if (color === "gray4") return "bg-gray4";
	if (color === "gray5") return "bg-gray5";
	return "bg-blue";
};
