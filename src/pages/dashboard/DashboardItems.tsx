import {
	AddSquare,
	Box,
	Calendar,
	DollarSquare,
	Edit,
	Graph,
	Messages,
	MessageText,
	Profile2User,
	Save2,
	Shop,
	ShoppingCart,
	Ticket,
	TicketDiscount,
} from "iconsax-react";

import Carts from "./customer/Carts";
import Subscriptions from "./customer/Subscriptions";
import Wallet from "./customer/Wallet";

import ManageComments from "./admin/ManageComments";
import ManageCustomers from "./admin/ManageCustomers";
import ManageDiscountTokens from "./admin/ManageDiscountTokens";
import ManageFestival from "./admin/ManageFestival";
import ManageSellers from "./admin/ManageSellers";

import ManageCarts from "./admin/ManageCarts";
import ManageAdmins from "./owner/ManageAdmins";
import ManageStoreKeepers from "./owner/ManageStoreKeepers";
import SystemLog from "./owner/SystemLog";
import ManagePrices from "./seller/ManagePrices";
import StoreInfo from "./seller/StoreInfo";
import ManageProductAmount from "./storeKeeper/ManageProductAmount";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import ManageProducts from "./admin/ManageProducts";
import DateStats from "./owner/DateStats";
import ProductsStats from "./owner/ProductsStats";
import SellersStats from "./owner/SellersStats";
import SalesStats from "./seller/SalesStats";

export type DashboardItemType = {
	text: string;
	icon: JSX.Element;
	content: JSX.Element | DashboardItemType[];
};

export const CustomerItems: DashboardItemType[] = [
	{
		text: "سفارشات",
		icon: <ShoppingCart variant="Bold" />,
		content: <Carts />,
	},
	{
		text: "کیف پول",
		icon: <DollarSquare variant="Bold" />,
		content: <Wallet />,
	},
	{
		text: "محصولات ذخیره شده",
		icon: <Save2 variant="Bold" />,
		content: <Subscriptions />,
	},
];

export const SellerItems: DashboardItemType[] = [
	{
		text: "اطلاعات فروشگاه",
		icon: <Shop variant="Bold" />,
		content: <StoreInfo />,
	},
	{
		text: "محصولات",
		icon: <></>,
		content: [
			{
				text: "افزودن محصول جدید",
				icon: <AddSquare variant="Bold" />,
				content: <AddProduct />,
			},
			{
				text: "ویرایش اطلاعات محصول",
				icon: <Edit variant="Bold" />,
				content: <ManageProducts />,
			},
		],
	},
	{
		text: "فروش",
		icon: <></>,
		content: [
			{
				text: "فروش محصولات",
				icon: <DollarSquare variant="Bold" />,
				content: <ManagePrices />,
			},
			{
				text: "آمار فروش",
				icon: <Graph variant="Bold" />,
				content: <SalesStats />,
			},
		],
	},
];

export const StoreKeeperItems: DashboardItemType[] = [
	{
		text: "سبد های خرید",
		icon: <ShoppingCart variant="Bold" />,
		content: <ManageCarts />,
	},
	{
		text: "ویرایش موجودی محصولات",
		icon: <Edit variant="Bold" />,
		content: <ManageProductAmount />,
	},
];

export const AdminItems: DashboardItemType[] = [
	{
		text: "سبد های خرید",
		icon: <ShoppingCart variant="Bold" />,
		content: <ManageCarts />,
	},
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
	{
		text: "محصولات",
		icon: <></>,
		content: [
			{
				text: "افزودن محصول جدید",
				icon: <AddSquare variant="Bold" />,
				content: <AddProduct />,
			},
			{
				text: "ویرایش اطلاعات محصول",
				icon: <Edit variant="Bold" />,
				content: <ManageProducts />,
			},
		],
	},
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
		text: "جشنواره",
		icon: <TicketDiscount variant="Bold" />,
		content: <ManageFestival />,
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
