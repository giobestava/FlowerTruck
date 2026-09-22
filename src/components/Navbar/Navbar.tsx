function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">Flower Truck</div>
			<ul className="navbar-links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">A Propos</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/reservations">Reservation</a>
				</li>
			</ul>
		</nav>
	);
}
export default Navbar;
