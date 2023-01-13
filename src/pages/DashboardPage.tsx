import Loading from "components/Loading";
import {
	ArrowDown2,
	Element3,
	Logout,
	Profile as ProfileImage,
} from "iconsax-react";
import { MainContext } from "MainContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import {
	AdminItems,
	CustomerItems,
	DashboardItemType,
	OwnerItems,
	SellerItems,
	StoreKeeperItems,
} from "./dashboard/DashboardItems";
import DefaultDashboard from "./dashboard/DefaultDashboard";
import Profile from "./dashboard/Profile";

interface MIProps {
	menuItem: DashboardItemType;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
	setElement: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

function MenuItem({ menuItem, setSelected, setElement }: MIProps) {
	const [opened, setOpened] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const isList = Array.isArray(menuItem.content);

	const toggleOpen = () => setOpened((prev) => !prev);
	const setCurrent = () => {
		setElement(menuItem.content as JSX.Element);
		setSelected(menuItem.text);
		setSearchParams({ tab: menuItem.text });
	};

	useEffect(() => {
		if (searchParams.get("tab") === menuItem.text) {
			setIsSelected(true);
			setCurrent();
		} else {
			setIsSelected(false);
		}
	}, [searchParams]);

	return (
		<div className="w-full">
			<div
				className={`py-3 border-b-[1px] border-gray-300 flex flex-row-reverse gap-2 cursor-pointer duration-200 ${
					isSelected ? "text-blue" : ""
				}`}
				onClick={() => {
					isList ? toggleOpen() : setCurrent();
				}}
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
							setSelected={setSelected}
							setElement={setElement}
						/>
					))}
			</div>
		</div>
	);
}

export default function DashboardPage() {
	const [element, setElement] = useState(<></>);
	const [selected, setSelected] = useState("");
	const ctx = useContext(MainContext);

	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const pages: DashboardItemType[] = (() => {
		if (ctx.profile.data === undefined) return [];

		switch (ctx.profile.data.accessLevel) {
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
			content: <DefaultDashboard />,
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
		const tab = searchParams.get("tab");

		if (tab !== null) setSelected(tab);
		else setSearchParams({ tab: "داشبورد" });
	}, []);

	useEffect(() => {
		if (ctx.loggedIn === false) {
			alert("not logged in");
			navigate("/");
		}
	}, [ctx.loggedIn]);

	if (ctx.profile.data === undefined)
		return (
			<div className="p-32 flex justify-center">
				<Loading />
			</div>
		);

	return (
		<div className="p-8 grid grid-cols-[75%_auto] gap-5">
			<div className="rounded-xl border-gray-300 border-[1px]">
				{element}
			</div>
			<div className="bg-[#E4F0FF] rounded-xl flex flex-col items-center border-gray-300 border-[1px]">
				<div className="flex items-center gap-3 m-5">
					<p className="text-center" dir="rtl">
						{"خوش آمدید "}
						{ctx.profile.data.firstName}
					</p>

					{ctx.profile.data.profileImage ? (
						<img
							className="w-20 h-20 object-cover rounded-full"
							src={ctx.profile.data.profileImage}
						/>
					) : (
						<ProfileImage variant="Bold" size={80} color="black" />
					)}
				</div>
				<hr className="bg-gray-300 w-full h-0.5" />
				<div className="px-3 w-full">
					{menuItems.map((mi, i) => (
						<MenuItem
							key={i}
							menuItem={mi}
							setSelected={setSelected}
							setElement={setElement}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
