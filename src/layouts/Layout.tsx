import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import Footer from "../components/Footer/Footer.tsx";

function Layout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
export default Layout;
