import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { Navigate } from "react-router-dom";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(auth, email, password);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				console.log("サインインに成功しました");
				return <Navigate to={"/"} />;
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<h1>ログイン画面</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>メールアドレス：</label>
					<input
						id='email'
						name='email'
						type='text'
						placeholder='email'
						onChange={handleEmailChange}
						value={email}
					/>
				</div>
				<div>
					<label htmlFor='password'>パスワード：</label>
					<input
						id='password'
						name='email'
						type='password'
						placeholder='password'
						onChange={handlePasswordChange}
						value={password}
					/>
				</div>
				<button>ログイン</button>
				<div>
					ユーザー登録は<Link to={"/signup"}>こちら</Link>から
				</div>
			</form>
		</div>
	);
}

export default Login;
