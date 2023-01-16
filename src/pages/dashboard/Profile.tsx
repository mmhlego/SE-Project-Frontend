import { MainContext } from "MainContext";
import { useContext } from "react";

export default function Profile() {
	const ctx = useContext(MainContext);

	if (ctx.profile.loading || "error" in ctx.profile)
		return <p>loading ...</p>;

	return (
		<div>
			{ctx.loggedIn && ctx.profile.data && (
				<>
					<p>{ctx.profile.data.firstName}</p>
					<p>{ctx.profile.data.lastName}</p>
					<p>{ctx.profile.data.email}</p>
					<p>{ctx.profile.data.phoneNumber}</p>
					<p>{ctx.profile.data.birthDate}</p>
				</>
			)}
		</div>
	);
}
