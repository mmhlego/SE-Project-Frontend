import { CloseCircle, TickCircle } from "iconsax-react";
import { useState } from "react";

interface Props {
	name: string;
	placeholder: string;
	disabled?: boolean;
	icon?: JSX.Element;
	setText?: (newText: string) => void;
	validator?: () => boolean;
}

export default function InputField({
	name,
	placeholder,
	disabled = false,
	icon,
	setText,
}: Props) {
	type fieldStatus = "ok" | "fail" | "idle";

	const [status, setStatus] = useState<fieldStatus>("idle");

	const borderColor = (s: fieldStatus) => {
		if (disabled) return "border-gray-300";
		if (s === "ok") return "border-green";
		if (s === "fail") return "border-red";
		return "border-gray-300";
	};

	const fieldIcon = (s: fieldStatus) => {
		if (disabled) return icon;
		if (s === "ok")
			return <TickCircle variant="Bold" size={20} color="#06c574" />;
		if (s === "fail")
			return <CloseCircle variant="Bold" size={20} color="#ef3b50" />;
		return icon;
	};

	return (
		<div className="flex flex-col items-end relative">
			<p> {name}</p>
			<input
				type="text"
				className={`duration-300 min-w-[300px] border-2 p-3 mt-1 rounded-lg text-right outline-none bg-white ${
					status === "idle" && !disabled
						? `hover:border-blue focus:border-blue`
						: ""
				} ${borderColor(status)} ${
					disabled ? "placeholder:text-gray-300" : ""
				}`}
				placeholder={placeholder}
				disabled={disabled}
				onChange={(e) => {
					if (setText) setText(e.target.value);
				}}
			/>

			<div
				className={`absolute bottom-4 left-3.5 ${
					disabled ? "text-gray-300" : "text-gray-500"
				}`}
			>
				{fieldIcon(status)}
			</div>
		</div>
	);
}
