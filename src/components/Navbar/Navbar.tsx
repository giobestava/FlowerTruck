import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<header className="navbar">
			<div className="navbar__container">
				<NavLink to="/" className="navbar__logo">
					Juju's truck
				</NavLink>

				<nav className="navbar__links">
					<NavLink className="navbar__link" to="/">
						Accueil
					</NavLink>

					<NavLink className="navbar__link" to="/about">
						A Propos
					</NavLink>

					<NavLink className="navbar__link" to="/contact">
						Contact
					</NavLink>

					<NavLink className="navbar__link" to="/reservations">
						Reservation
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
export default Navbar;
