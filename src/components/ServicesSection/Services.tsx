import { Link } from "react-router-dom";
import "./Services.css";
import atelier from "../../images/atelier.jpg";
import bouquets2 from "../../images/bouquets2.jpg";
import privatisation from "../../images/privatisation.jpg";

function Services() {
	return (
		<section className="services-section">
			<div className="servcies-section__header">
				<p className="services-section__eyebrow">NOS SERVICES</p>

				<h2 className="services-section__title">
					Des fleurs pour
					<br />
					tous les moments.
				</h2>
			</div>

			<div className="services-section__grid">
				<article className="service-card">
					<div className="service-card__image-wrapper">
						<img src={bouquets2} alt="bouquets2" />
					</div>

					<div className="service-card__content">
						<h3 className="service-card__title">BOUQUETS</h3>

						<p className="service-card__text">
							Des créations florales uniques, composées avec fleurs fraiches.
						</p>
						<Link to="/flowers" className="service-card__link">
							Découvrir
						</Link>
					</div>
				</article>

				<article className="service-card">
					<div className="service-card__image-wrapper">
						<img src={atelier} alt="atelier" />
					</div>

					<div className="service-card__content">
						<h3 className="service-card__title">NOS ATELIERS</h3>
						<p className="service-card__text">
							Un atelier créatif à La Rochelle et aoutour
						</p>
					</div>
					<Link to="/reservations" className="service-card__link">
						Voir nos ateliers
					</Link>
				</article>

				<article className="service-card">
					<div className="service-card__image-wrapper">
						<img src={privatisation} alt="privatisation" />
					</div>

					<div className="service-card__content">
						<h3 className="service-card__title">PRIVATISATION</h3>
						<p className="service-card__text">
							Invitez le Flower Truck à vos événements et faites vivre une
							expérience florale unique.
						</p>
						<Link to="/contact" className="service-card__link">
							Nous contacter
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Services;
