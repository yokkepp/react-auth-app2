function SignUp() {
	return (
		<div>
			<h1>ユーザー登録</h1>
			<form action=''>
				<div>
					<label htmlFor='userName'>ユーザー名：</label>
					<input id='userName' type='text' />
				</div>
				<div>
					<label htmlFor='password'>パスワード：</label>
					<input id='password' type='password' />
				</div>
			</form>
		</div>
	);
}

export default SignUp;
