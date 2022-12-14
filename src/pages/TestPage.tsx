import axios from "axios";
import CheckBox from "components/CheckBox";
import CollapsiblePanel from "components/CollapsiblePanel";
import CollapsiblePanel2 from "components/CollapsiblePanel2";
import ComboBox from "components/ComboBox";
import Footer from "components/Footer";
import Header from "components/Header";
import InputField from "components/InputField";
import Loading from "components/Loading";
import ProductItem from "components/ProductItem";
import SearchField from "components/SearchField";
import Toggle from "components/Toggle";
import { Login, Profile, ShoppingCart } from "iconsax-react";
import { MainContext } from "MainContext";
import { useContext, useState } from "react";
import Button from "../components/Button";
import TestSection from "../components/TestSection";

export default function TestPage() {
	const [search, setSearch] = useState("");

	const ctx = useContext(MainContext);

	return (
		<div className="w-full flex min-h-screen items-center gap-4 flex-col py-10">
			<TestSection>
				<Button
					text="ورود / ثبت نام"
					onClick={() => {
						// ctx.syncProfile();

						axios
							.get("/profile/", {
								withCredentials: true,
							})
							.then((res) => {
								console.log(res);
								console.log(res.data);
							})
							.catch((err) => {
								console.log(err);
							});
					}}
					icon={<Login />}
					color="black"
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {
						const instance = axios.create({
							withCredentials: true,
							headers: {
								"Content-Type": "application/json",
							},
						});

						axios
							.post(
								"/auth/login/",
								{
									username: "admin",
									password: "admin",
								},
								{
									withCredentials: true,
								}
							)
							.then((res) => {
								console.log(res);
							})
							.catch((err) => {
								console.log(err);
							});
					}}
					icon={<Login />}
					filled
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
					color="red"
				/>

				<Button
					text="سبد خرید"
					onClick={() => {}}
					icon={<ShoppingCart />}
					notification={0}
					color="black"
					accent="blue"
				/>

				<Button
					text="سبد خرید"
					onClick={() => {}}
					icon={<ShoppingCart />}
					notification={1}
					filled
					color="cyan"
				/>

				<Button
					text="ورود / ثبت نام"
					onClick={() => {}}
					icon={<Login />}
					disabled
				/>
			</TestSection>
			<TestSection>
				<CheckBox text="این یک متن تست است" />
				<CheckBox text="این یک متن تست است" initial />
				<CheckBox text="این یک متن تست است" disabled />
			</TestSection>

			<TestSection>
				<Toggle text="این یک متن تست است" />
				<Toggle text="این یک متن تست است" initial />
				<Toggle text="این یک متن تست است" disabled />
			</TestSection>

			<TestSection>
				<InputField
					name="نام فیلد"
					placeholder="لطفا فیلد مورد نظر را وارد نمایید"
					icon={<Profile size={20} variant="Bold" />}
				/>

				<InputField
					name="نام فیلد"
					placeholder="لطفا فیلد مورد نظر را وارد نمایید"
				/>

				<InputField
					name="نام فیلد"
					placeholder="لطفا فیلد مورد نظر را وارد نمایید"
					icon={<Profile size={20} variant="Bold" />}
					disabled
				/>

				<SearchField text={search} setText={setSearch} />
			</TestSection>

			<TestSection>
				<CollapsiblePanel text="لطفا دسته بندی مورد نظر را انتخاب کنید">
					<CheckBox initial text="آیتم یک" />
					<CheckBox initial text="آیتم دو" />
					<CheckBox initial text="آیتم سه" />
					<CheckBox initial text="آیتم چهار" />
				</CollapsiblePanel>
				<CollapsiblePanel
					text="لطفا دسته بندی مورد نظر را انتخاب کنید"
					disabled
				>
					<CheckBox initial text="آیتم یک" />
					<CheckBox initial text="آیتم دو" />
					<CheckBox initial text="آیتم سه" />
					<CheckBox initial text="آیتم چهار" />
				</CollapsiblePanel>

				<CollapsiblePanel2 text=" دسته بندی مورد نظر را انتخاب کنید">
					<p>حواب</p>
				</CollapsiblePanel2>
			</TestSection>

			<Header />
			<Footer />

			<TestSection>
				<ProductItem
					product={{
						id: "sample",
						name: "گوشی شیائومی نوت 11",
						category: "Phone",
						image: "https://www.technolife.ir/image/color_image_TLP-3554_a7dae8_ca79bb9c-a389-45df-a811-6fedaf224c2e.png",
						description: "Yek gooshi khoob",
						likes: 10,
						dislikes: 5,
					}}
				/>
			</TestSection>

			<TestSection>
				<Loading />
				<Loading size={5} />
			</TestSection>

			<TestSection>
				<ComboBox
					name="Sample Combo"
					options={["sample1", "sample2"]}
					placeholder="please select"
					setSelected={(val: string) => {
						console.log(val);
					}}
				/>

				<ComboBox
					name="Sample Combo"
					options={["sample1", "sample2"]}
					placeholder="please select"
					setSelected={(val: string) => {
						console.log(val);
					}}
					disabled
				/>
			</TestSection>
		</div>
	);
}
