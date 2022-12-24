/* eslint-disable react/no-array-index-key */

import Logo from "assets/Logo";
import { CallCalling, Login, Mobile, ShoppingCart } from "iconsax-react";
import { useLocation, useNavigate } from "react-router";
import Button from "./Button";
import Dropdown from "./Dropdown";
import SearchField from "./SearchField";

interface PageProps {
	text: string;
	pathname: string;
}

function HeaderPage({ text, pathname }: PageProps) {
	const currentRoute = useLocation();
	const navigate = useNavigate();

	return (
		<div
			key={text}
			className={`h-full relative flex items-center px-2 cursor-pointer ${
				currentRoute.pathname == pathname
					? "text-blue"
					: "text-gray-400"
			}`}
			onClick={() => navigate(pathname)}
		>
			<p key={text}>{text} </p>
			{currentRoute.pathname == pathname && (
				<div
					key={text}
					className="w-5/6 h-1 bg-blue absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm"
				/>
			)}
		</div>
	);
}

export default function Header() {
	const menuPages = [
		{
			text: "صفحه اصلی",
			pathname: "/",
		},
		{
			text: "پشتیبانی",
			pathname: "/support",
		},
		{
			text: "تماس با ما",
			pathname: "/contact-us",
		},
		{
			text: "درباره ما",
			pathname: "/about-us",
		},
	];

	const menuDropdowns = [
		{
			text: "پشتیبانی",
			children: <p>sample</p>,
			icon: <Mobile size={22} />,
		},
		{
			text: "پشتیبانی",
			children: <p>sample</p>,
			icon: <Mobile size={22} />,
		},
		{
			text: "پشتیبانی",
			children: <p>sample</p>,
			icon: <Mobile size={22} />,
		},
	];

	const currentRoute = useLocation();
	const navigate = useNavigate();

	return (
		<div className="w-full h-fit flex flex-col">
			<div className="flex flex-row justify-between items-center px-20 h-16">
				<div className="grid grid-flow-col gap-x-4 text-sm my-2">
					<div className="col-span-1 row-span-2 py-2">
						<CallCalling color="#2388ff" variant="Bold" size={30} />
					</div>
					<p className="col-span-1 row-span-1">
						پشتیبانی همه روزه از ساعت ۸ الی ۱۵
					</p>
					<p className="col-span-1 row-span-1">۰۴۱-۳۵۵۵۵۵۵۵</p>
				</div>

				<div className="h-full flex flex-row-reverse gap-6">
					{menuPages.map((page, _) => (
						<HeaderPage
							key={_}
							text={page.text}
							pathname={page.pathname}
						/>
					))}
				</div>
			</div>

			<hr className="bg-gray-200" />

			<div className="grid grid-flow-col items-center px-10 py-7">
				<div className="flex gap-2">
					{/* // TODO */}
					<Button
						text="سبد خرید"
						onClick={() => {}}
						icon={<ShoppingCart variant="Bold" />}
						notification={0}
						color="black"
						accent="blue"
					/>
					<Button
						text="ورود / ثبت نام"
						onClick={() => {}}
						icon={<Login />}
						color="blue"
					/>
				</div>

				<SearchField text={""} />

				<Logo className="h-12 justify-self-end" />
			</div>

			<div className="relative bg-gray-100 px-10 flex flex-row-reverse justify-between items-center">
				<div className="flex flex-row-reverse gap-1">
					{menuDropdowns.map((dropdown, _) => (
						<Dropdown
							key={_}
							text={dropdown.text}
							icon={dropdown.icon}
							children={dropdown.children}
						/>
					))}
				</div>
				{/* //TODO */}
				<Button
					text="فروش ویژه"
					onClick={() => {}}
					color="orange"
					filled
				/>
			</div>
		</div>
	);
}
