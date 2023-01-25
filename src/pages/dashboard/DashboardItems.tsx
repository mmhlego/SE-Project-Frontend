import {
	AddSquare,
	Box,
	Calendar,
	Cards,
	DollarSquare,
	Driver,
	Edit,
	Flag,
	Graph,
	Messages,
	MessageText,
	Profile2User,
	Receipt,
	Save2,
	Shop,
	ShoppingCart,
	Ticket,
} from "iconsax-react";
import CurrentCart from "./customer/CurrentCart";
import Subscriptions from "./customer/Subscriptions";
import Wallet from "./customer/Wallet";
import ManageComments from "./admin/ManageComments";
import ManageCustomers from "./admin/ManageCustomers";
import ManageDiscountTokens from "./admin/ManageDiscountTokens";
import ManageSellers from "./admin/ManageSellers";
import AddProduct from "./admin/AddProduct";
import ManageCarts from "./admin/ManageCarts";
import ManagePosters from "./admin/ManagePosters";
import DateStats from "./owner/DateStats";
import ManageAdmins from "./owner/ManageAdmins";
import ManageStoreKeepers from "./owner/ManageStoreKeepers";
import ProductsStats from "./owner/ProductsStats";
import SellersStats from "./owner/SellersStats";
import SystemLog from "./owner/SystemLog";
import ManagePrices from "./seller/ManagePrices";
import SalesStats from "./seller/SalesStats";
import Address from "./customer/Address";
import CartHistory from "./customer/CartHistory";

export type DashboardItemType = {
	text: string;
	icon: JSX.Element;
	content: JSX.Element | DashboardItemType[];
};

export const CustomerItems: DashboardItemType[] = [
	{
		text: "سبد خرید",
		icon: <ShoppingCart variant="Bold" />,
		content: <CurrentCart />,
	},
	// {
	// 	text: "تاریخچه سفارشات", // TODO
	// 	icon: <Receipt variant="Bold" />,
	// 	content: <CartHistory />,
	// },
	{
		text: "کیف پول",
		icon: <DollarSquare variant="Bold" />,
		content: <Wallet />,
	},
	{
		text: "مدیریت آدرس",
		icon: <Flag variant="Bold" />,
		content: <Address />,
	},
	{
		text: "محصولات ذخیره شده",
		icon: <Save2 variant="Bold" />,
		content: <Subscriptions />,
	},
];

export const SellerItems: DashboardItemType[] = [
	// {
	// 	text: "اطلاعات فروشگاه",
	// 	icon: <Shop variant="Bold" />,
	// 	content: <StoreInfo />,
	// },
	// {
	// 	text: "محصولات",
	// 	icon: <></>,
	// 	content: [
	{
		text: "افزودن محصول جدید",
		icon: <AddSquare variant="Bold" />,
		content: <AddProduct />,
	},
	// 		{
	// 			text: "ویرایش اطلاعات محصول",
	// 			icon: <Edit variant="Bold" />,
	// 			content: <ManageProducts />,
	// 		},
	// 	],
	// },
	// {
	// 	text: "فروش محصولات", // TODO
	// 	icon: <DollarSquare variant="Bold" />,
	// 	content: <ManagePrices />,
	// },
	{
		text: "آمار فروش",
		icon: <Graph variant="Bold" />,
		content: <SalesStats />,
	},
];

export const StoreKeeperItems: DashboardItemType[] = [
	{
		text: "سبد های خرید", // TODO Accept / Reject
		icon: <ShoppingCart variant="Bold" />,
		content: <ManageCarts />,
	},
	// {
	// 	text: "ویرایش موجودی محصولات",
	// 	icon: <Edit variant="Bold" />,
	// 	content: <ManageProductAmount />,
	// },
];

export const AdminItems: DashboardItemType[] = [
	{
		text: "مدیریت کاربران",
		icon: <></>,
		content: [
			{
				text: "مشتریان",
				icon: <Profile2User variant="Bold" />,
				content: <ManageCustomers />,
			},
			{
				text: "فروشندگان",
				icon: <Profile2User variant="Bold" />,
				content: <ManageSellers />,
			},
		],
	},
	// {
	// 	text: "محصولات",
	// 	icon: <></>,
	// 	content: [
	{
		text: "افزودن محصول جدید",
		icon: <AddSquare variant="Bold" />,
		content: <AddProduct />,
	},
	// 		{
	// 			text: "ویرایش اطلاعات محصول",
	// 			icon: <Edit variant="Bold" />,
	// 			content: <ManageProducts />,
	// 		},
	// 	],
	// },
	{
		text: "مدیریت نظرات",
		icon: <Messages variant="Bold" />,
		content: <ManageComments />,
	},
	{
		text: "کد های تخفیف",
		icon: <Ticket variant="Bold" />,
		content: <ManageDiscountTokens />,
	},
	{
		text: "پوستر ها",
		icon: <Driver variant="Bold" />,
		content: <ManagePosters />,
	},
];

export const OwnerItems: DashboardItemType[] = [
	{
		text: "مدیریت کاربران",
		icon: <></>,
		content: [
			{
				text: "ادمین ها",
				icon: <Profile2User variant="Bold" />,
				content: <ManageAdmins />,
			},
			{
				text: "انبارداران",
				icon: <Profile2User variant="Bold" />,
				content: <ManageStoreKeepers />,
			},
		],
	},
	{
		text: "آمار فروش",
		icon: <></>,
		content: [
			{
				text: "برحسب فروشندگان",
				icon: <Shop variant="Bold" />,
				content: <SellersStats />,
			},
			{
				text: "برحسب محصولات",
				icon: <Box variant="Bold" />,
				content: <ProductsStats />,
			},
			{
				text: "برحسب تاریخ",
				icon: <Calendar variant="Bold" />,
				content: <DateStats />,
			},
		],
	},
	{
		text: "لاگ سیستم",
		icon: <MessageText variant="Bold" />,
		content: <SystemLog />,
	},
];
