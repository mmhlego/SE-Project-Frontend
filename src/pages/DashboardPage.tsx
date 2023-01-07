import {
	ArrowDown2,
	Element3,
	Logout,
	Profile as ProfileImage,
} from "iconsax-react";
import { MainContext } from "MainContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
	AdminItems,
	CustomerItems,
	DashboardItemType,
	OwnerItems,
	SellerItems,
	StoreKeeperItems,
} from "./dashboard/DashboardItems";
import Profile from "./dashboard/Profile";

interface MIProps {
	menuItem: DashboardItemType;
	id: string;
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
	setElement: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

function MenuItem({
	menuItem,
	id,
	selected,
	setSelected,
	setElement,
}: MIProps) {
	const [opened, setOpened] = useState(false);
	const [isSelected, setIsSelected] = useState(false);

	const isList = Array.isArray(menuItem.content);

	const toggleOpen = () => setOpened((prev) => !prev);
	const setCurrent = () => {
		setElement(menuItem.content as JSX.Element);
		setSelected(id);
	};

	useEffect(() => {
		setIsSelected(selected === id);
	}, [selected]);

	return (
		<div className="w-full">
			<div
				className={`py-3 border-b-[1px] border-gray-300 flex flex-row-reverse gap-2 cursor-pointer duration-200 ${
					isSelected ? "text-blue" : ""
				}`}
				onClick={isList ? toggleOpen : setCurrent}
			>
				{isList ? (
					<ArrowDown2
						variant="Bold"
						className={`duration-300 ${opened ? "" : "rotate-90"}`}
					/>
				) : (
					menuItem.icon
				)}
				{menuItem.text}
			</div>
			<div
				className={`pr-5 duration-300 overflow-hidden ${
					opened ? "max-h-screen" : "max-h-0"
				}`}
			>
				{isList &&
					(menuItem.content as DashboardItemType[]).map((mi, i) => (
						<MenuItem
							key={i}
							menuItem={mi}
							id={id + i.toString()}
							selected={selected}
							setSelected={setSelected}
							setElement={setElement}
						/>
					))}
			</div>
		</div>
	);
}

export default function DashboardPage() {
	const [element, setElement] = useState(<p>123</p>);
	const [selected, setSelected] = useState("-");
	const ctx = useContext(MainContext);

	const navigate = useNavigate();

	const pages: DashboardItemType[] = (() => {
		if (ctx.profile === undefined) return [];

		switch (ctx.profile.accessLevel) {
			case "owner":
				return OwnerItems;
			case "admin":
				return AdminItems;
			case "storeKeeper":
				return StoreKeeperItems;
			case "seller":
				return SellerItems;
			case "customer":
				return CustomerItems;
		}
	})();

	const menuItems: DashboardItemType[] = [
		{
			text: "داشبورد",
			icon: <Element3 variant="Bold" />,
			content: <p>داشبورد</p>,
		},
		{
			text: "پروفایل",
			icon: <ProfileImage variant="Bold" />,
			content: <Profile />,
		},
		...pages, // Change this item for different profiles
		{
			text: "خروج",
			icon: <Logout variant="Bold" />,
			content: <p>خروج</p>,
		},
	];

	useEffect(() => {
		if (ctx.loggedIn === false) {
			alert("not logged in");
			navigate("/");
		}
	}, [ctx.loggedIn]);

	return (
		<div className="p-8 grid grid-cols-[75%_auto] gap-5">
			<div className="rounded-xl border-gray-300 border-[1px]">
				{element}
			</div>
			<div className="bg-[#E4F0FF] rounded-xl flex flex-col items-center border-gray-300 border-[1px]">
				<div className="flex items-center gap-3 m-5">
					MMHLEGO
					<ProfileImage variant="Bold" size={80} color="black" />
				</div>
				<hr className="bg-gray-300 w-full h-0.5" />
				<div className="px-3 w-full">
					{menuItems.map((mi, i) => (
						<MenuItem
							key={i}
							menuItem={mi}
							id={i.toString()}
							selected={selected}
							setSelected={setSelected}
							setElement={setElement}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
