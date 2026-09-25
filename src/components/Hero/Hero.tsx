import { Link } from "react-router-dom";
import flowerTruck from "../../images/Flower-truck.jpg";
import "./Hero.css";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-image__wrapper">
				<img src={flowerTruck} alt="Flower Truck" />
			</div>
			<div className="hero-content">
				<h1 className="hero-title">
					Des fleurs <br /> qui viennent <br /> à vous.
				</h1>
				<p className="hero-description">
					Des creations florales uniques, directement depuis notre Flower truck,
					pour illuminer vos journées et vos événements. Que vous soyez à la
					recherche d'un bouquet frais, d'une composition originale ou d'une
					expérience florale inoubliable, notre Flower Truck est là pour vous
					offrir des fleurs de qualité, où que vous soyez.
				</p>
				<Link to="/flowers" className="hero-button">
					Explorer nos fleurs
				</Link>
			</div>
		</section>
	);
}
export default Hero;
