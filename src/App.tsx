import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import JornadaMissas from "./pages/jornadaMIssas";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/protectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	return (
		<>
			<AuthProvider>
				<Toaster position="top-right" />
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/login" element={<Login />} />

						<Route element={<ProtectedRoute />}>
							<Route path="/jornadaDeMissas" element={<JornadaMissas />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<Footer />
			</AuthProvider>
		</>
	);
}

export default App;
