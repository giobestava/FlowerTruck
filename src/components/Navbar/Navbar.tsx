import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">Juju's truck</div>
			<ul className="navbar-links">
				<li className="navbar-link">
					<a className="navbar-link" href="/">
						Home
					</a>
				</li>
				<li className="navbar-link">
					<a className="navbar-link" href="/about">
						A Propos
					</a>
				</li>
				<li className="navbar-link">
					<a className="navbar-link" href="/contact">
						Contact
					</a>
				</li>
				<li className="navbar-link">
					<a className="navbar-link" href="/reservations">
						Reservation
					</a>
				</li>
			</ul>
		</nav>
	);
}
export default Navbar;
