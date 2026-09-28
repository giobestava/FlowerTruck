import { Link } from "react-router-dom";
import "./AboutSection.css";
import bouquets from "../../images/bouquets.jpg";

function AboutSection() {
	return (
		<section className="about-section">
			<div className="about-section__image-wrapper">
				<img src={bouquets} alt="bouquets" />
			</div>
			<div className="about-section__content">
				<p className="about-section__eyebrow">MON UNIVERS</p>
				<h2 className="about-section__title">Le flower truck</h2>
				<p className="about-section__text">
					Des fleurs fraîches, des créations uniques et un Flower Truck qui
					vient à votre rencontre.
				</p>

				<Link to="/a-propos" className="about-section__link">
					En savoir plus
				</Link>
			</div>
		</section>
	);
}
export default AboutSection;
