import { auth } from "../FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Home() {
	const navigate = useNavigate();
	const { user } = useAuthContext();
	const handleLogout = () => {
		signOut(auth);
		navigate("/login");
	};

	if (!user) {
		return <Navigate to='/login' />;
	} else {
		return (
			<div>
				<h1>ホームページ</h1>
				<button onClick={handleLogout}>ログアウト</button>
			</div>
		);
	}
}

export default Home;
