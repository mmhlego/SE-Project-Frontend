import { color } from "utils";

interface Props {
	text: string;
	color: color;
	className?: string;
}

export default function Tag({ text, color, className }: Props) {
	return (
		<p
			className={`text-gray-100 font-light text-lg w-fit px-5 rounded-full bg-${color} ${className}`}
		>
			{text}
		</p>
	);
}
