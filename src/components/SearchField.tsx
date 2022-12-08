import { SearchNormal1 } from "iconsax-react";

interface Props {
	text: string;
	setText?: (newText: string) => void;
}

export default function SearchField({ text, setText }: Props) {
	return (
		<div className="relative">
			<input
				type="text"
				className="duration-300 min-w-[300px] p-3 pr-11 mt-1 rounded-lg text-right outline-none bg-gray-200 placeholder:text-black"
				placeholder="جستجو"
				value={text}
				onChange={(e) => {
					if (setText) setText(e.target.value);
				}}
			/>

			<div className="absolute bottom-3.5 right-5">
				<SearchNormal1 size={20} />
			</div>
		</div>
	);
}
