import { MainContext } from "MainContext";
import { useContext } from "react";

export default function Profile() {
	const ctx = useContext(MainContext);

	return (
		<div>
			{ctx.loggedIn && ctx.profile && (
				<>
					<p>{ctx.profile.firstName}</p>
					<p>{ctx.profile.lastName}</p>
					<p>{ctx.profile.email}</p>
					<p>{ctx.profile.phoneNumber}</p>
					<p>{ctx.profile.birthDate}</p>
				</>
			)}
		</div>
	);
}
