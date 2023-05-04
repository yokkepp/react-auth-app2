import { useState, createContext } from "react";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
export const IsLogin = createContext();

function SignUp() {
	const { user } = useAuthContext();
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
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password);
	};

	return (
		<div>
			<h1>ユーザー登録</h1>
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
				<button>登録</button>

				<div>
					すでに登録済みの方は<Link to={"/login"}>こちらからログイン</Link>
					してください
				</div>
			</form>
		</div>
	);
}

export default SignUp;
