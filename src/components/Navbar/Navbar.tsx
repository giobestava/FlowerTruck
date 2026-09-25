import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="navbar">
			<div className="navbar__container">
				<NavLink to="/" className="navbar__logo" onClick={closeMenu}>
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
				<button
					type="button"
					className="navbar__menu-button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
					aria-expanded={isMenuOpen}
				>
					{isMenuOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>
			<div
				className={`navbar__mobile-menu ${isMenuOpen ? "navbar__mobile-menu--open" : ""}`}
			>
				<nav className="navbar__mobile-links">
					<NavLink className="navbar__mobile-link" to="/" onClick={closeMenu}>
						Accueil
					</NavLink>
					<NavLink
						className="navbar__mobile-link"
						to="/about"
						onClick={closeMenu}
					>
						A Propos
					</NavLink>
					<NavLink
						className="navbar__mobile-link"
						to="/contact"
						onClick={closeMenu}
					>
						Contact
					</NavLink>
					<NavLink
						className="navbar__mobile-link"
						to="/reservations"
						onClick={closeMenu}
					>
						Reservation
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
export default Navbar;
