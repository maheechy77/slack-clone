import React from "react";
import "./Login.css";

import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Login = () => {
	const [dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: "SET_USER",
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login_container">
				<img
					src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
					alt=""
				/>
				<h1>Sign in to Slack Clone.</h1>
				<p>clone.slack.com</p>
				<Button onClick={signIn}>Sign-in with Google</Button>
			</div>
		</div>
	);
};

export default Login;
