interface Props {
	size?: number;
	className?: string;
}

export default function Loading({ size = 10, className }: Props) {
	return (
		<div className={`flex justify-center ${className}`}>
			<div
				className={`w-${size} h-${size} animate-spin rounded-full border-blue border-t-4`}
			/>
		</div>
	);
}
