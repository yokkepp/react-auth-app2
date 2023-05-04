import "./App.css";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
	return (
		<AuthProvider>
			<div style={{ margin: "2em" }} className='App'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/signup' element={<SignUp />}></Route>
						<Route path='/login' element={<Login />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</AuthProvider>
	);
}

export default App;
