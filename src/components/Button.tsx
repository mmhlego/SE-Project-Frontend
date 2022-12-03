import {
	color,
	getBackgroundStyle,
	getBorderStyle,
	getTextStyle,
} from "../utils";

interface Props {
	text: string;
	icon?: JSX.Element;
	filled?: boolean;
	color?: color;
	accent?: color;
	notification?: number;
	onClick: () => void;
}

export default function Button({
	text,
	icon,
	filled = false,
	color = "blue",
	accent = "white",
	notification,
	onClick,
}: Props) {
	return (
		<button
			onClick={onClick}
			className={`flex gap-1 items-center justify-center py-3.5 px-5 rounded-lg ${
				filled
					? `text-white ${getBackgroundStyle(color)} font-semibold`
					: `border-[1.5px] ${getBorderStyle(color)} ${getTextStyle(
							color
					  )}`
			}`}
		>
			{notification !== undefined && (
				<p
					className={`${
						filled
							? "bg-white text-black"
							: `${getBackgroundStyle(accent)} text-white`
					} text-sm px-1.5 rounded-full mr-2`}
				>
					{notification}
				</p>
			)}
			{text}
			{icon}
		</button>
	);
}
