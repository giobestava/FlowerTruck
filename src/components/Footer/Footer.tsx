import { Link } from "react-router-dom";
import "./Footer.css";
import { FiArrowUpRight, FiInstagram } from "react-icons/fi";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__main">
				<div className="footer__brand">
					<Link to="/" className="footer__logo">
						Flower Truck <span>.</span>
					</Link>
					<p className="footer__tagline">
						Des fleurs fraîches, des rencontres et des jolis moments à fleurir.
					</p>
					<a
						href="https://www.instagram.com/p/CsLyXj7tHbu/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__social"
						aria-label="Instagram"
					>
						<FiInstagram />
						instagram
						<FiArrowUpRight />
					</a>
				</div>
				<div className="footer__column">
					<h2 className="footer__heading">Navigation</h2>
					<nav className="footer__links" aria-label="Pied de page">
						<Link to="/">Accueil</Link>
						<Link to="/about">À propos</Link>
						<Link to="/flowers">Fleurs</Link>
						<Link to="/reservations">Ateliers</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</div>
				<div className="footer__column">
					<h2 className="footer__heading">Une question ?</h2>
					<div className="footer__links">
						<Link to="/contact">Contactez-nous</Link>
						<a href="mailto:juliette.cavero@hotmail.com">
							juliette.cavero@hotmail.com
						</a>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<p>
					&copy; {new Date().getFullYear()} Flower Truck. Tous droits réservés.
				</p>
				<p> Fait avec ❤️ et beaucoup de fleurs </p>
			</div>
		</footer>
	);
}
export default Footer;
