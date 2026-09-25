import flowerTruck from "../../images/Flower-truck.jpg";
import "./Hero.css";

function Hero() {
	return (
		<section className="hero">
			<div className="hero-content">
				<h1 className="hero-title">
					Des fleurs <br /> autrement.
				</h1>
				<p className="hero-description">
					Des creations florales uniques, directement depuis notre Flower truck,
					pour illuminer vos journées et vos événements. Que vous soyez à la
					recherche d'un bouquet frais, d'une composition originale ou d'une
					expérience florale inoubliable, notre Flower Truck est là pour vous
					offrir des fleurs de qualité, où que vous soyez.
				</p>
				<a href="/flowers" className="hero-button">
					Explorer nos fleurs
				</a>
				<div className="hero-image">
					<img src={flowerTruck} alt="Flower Truck" />
				</div>
			</div>
		</section>
	);
}
export default Hero;
