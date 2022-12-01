import "./../styles/tailwind.scss";

interface Props {
	text: string;
	icon?: JSX.Element;
	onClick: () => void;
}

export default function PrimaryButton({ text, onClick, icon }: Props) {
	return (
		<button
			onClick={onClick}
			className="bg-blue text-white font-bold py-3 px-5 rounded-lg flex gap-1 items-center"
		>
			{text}
			{icon}
		</button>
	);
}
