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

export type DashboardItemType = {
	text: string;
	icon: JSX.Element;
	content: JSX.Element | DashboardItemType[];
};

export const CustomerItems: DashboardItemType[] = [
	{
		text: "سفارشات",
		icon: <ShoppingCart variant="Bold" />,
		content: <p>سفارشات</p>,
	},
	{
		text: "کیف پول",
		icon: <DollarSquare variant="Bold" />,
		content: <p>کیف پول</p>,
	},
	{
		text: "محصولات ذخیره شده",
		icon: <Save2 variant="Bold" />,
		content: <p>محصولات ذخیره شده</p>,
	},
];

export const SellerItems: DashboardItemType[] = [
	{
		text: "اطلاعات فروشگاه",
		icon: <Shop variant="Bold" />,
		content: <p>اطلاعات فروشگاه</p>,
	},
	{
		text: "محصولات",
		icon: <></>,
		content: [
			{
				text: "افزودن محصول جدید",
				icon: <AddSquare variant="Bold" />,
				content: <p>افزودن محصول جدید</p>,
			},
			{
				text: "ویرایش اطلاعات محصول",
				icon: <Edit variant="Bold" />,
				content: <p>ویرایش اطللاعات محصول</p>,
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
				content: <p></p>,
			},
			{
				text: "آمار فروش",
				icon: <Graph variant="Bold" />,
				content: <p></p>,
			},
		],
	},
];

export const StoreKeeperItems: DashboardItemType[] = [
	{
		text: "سبد های خرید",
		icon: <ShoppingCart variant="Bold" />,
		content: <p></p>,
	},
	{
		text: "ویرایش موجودی محصولات",
		icon: <Edit variant="Bold" />,
		content: <p>ویرایش اطللاعات محصول</p>,
	},
];

export const AdminItems: DashboardItemType[] = [
	{
		text: "سبد های خرید",
		icon: <ShoppingCart variant="Bold" />,
		content: <p></p>,
	},
	{
		text: "مدیریت کاربران",
		icon: <></>,
		content: [
			{
				text: "مشتریان",
				icon: <Profile2User variant="Bold" />,
				content: <p></p>,
			},
			{
				text: "فروشندگان",
				icon: <Profile2User variant="Bold" />,
				content: <p></p>,
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
				content: <p>افزودن محصول جدید</p>,
			},
			{
				text: "ویرایش اطلاعات محصول",
				icon: <Edit variant="Bold" />,
				content: <p>ویرایش اطللاعات محصول</p>,
			},
		],
	},
	{
		text: "مدیریت نظرات",
		icon: <Messages variant="Bold" />,
		content: <p></p>,
	},
	{
		text: "کد های تخفیف",
		icon: <Ticket variant="Bold" />,
		content: <p></p>,
	},
	{
		text: "جشنواره",
		icon: <TicketDiscount variant="Bold" />,
		content: <p></p>,
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
				content: <p></p>,
			},
			{
				text: "انبارداران",
				icon: <Profile2User variant="Bold" />,
				content: <p></p>,
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
				content: <p></p>,
			},
			{
				text: "برحسب محصولات",
				icon: <Box variant="Bold" />,
				content: <p></p>,
			},
			{
				text: "برحسب تاریخ",
				icon: <Calendar variant="Bold" />,
				content: <p></p>,
			},
		],
	},
	{
		text: "لاگ سیستم",
		icon: <MessageText variant="Bold" />,
		content: <p></p>,
	},
];
