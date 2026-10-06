import "./AboutHeader.css";
import { Link } from "react-router-dom";
import juliette from "../../images/juliette.jpeg";

function AboutHeader() {
	return (
		<header className="about-header">
			<div className="about-header__content">
				<div className="about-header__text">
					<h1 className="about-header__title">À propos de moi</h1>
					<h2 className="about-header__eyebrow">QUI SUIS-JE?</h2>
					<p className="about-header__description">
						<strong>Passionnée par le monde végétal depuis l'enfance,</strong>{" "}
						j'ai passé une grande partie de mon temps libre à la campagne,
						auprès de ma famille d'agriculteurs, dans un village où la nature
						était au cœur du quotidien. Très tôt, j'ai exploré{" "}
						<strong>le végétal sous toutes ses formes</strong> : art floral,
						fleurs séchées, cyanotypes, tisanes, cosmétiques naturels, fleurs
						comestibles, peinture ou encore aquarelle. Après quelques années
						comme architecte d'intérieur, cette passion s'est imposée comme une{" "}
						<strong>évidence</strong>. Pendant le Covid, j'ai suivi une année de
						formation en fleuristerie avant d'être recrutée comme fleuriste, me
						permettant d'acquérir une <strong>solide expérience</strong>{" "}
						directement sur le terrain. De ce parcours est née{" "}
						<strong>L'Idée Sauvage</strong> : un flower truck pensé pour les
						territoires ruraux. Mon ambition est d'apporter une offre florale de
						qualité au plus près des habitants des villages dépourvus de
						commerce, tout en recréant un véritable rendez-vous de proximité,{" "}
						<strong>convivial et vivant</strong>.{" "}
					</p>
					<Link to="/flowers" type="button" className="about-header__button">
						Découvrir mes services
					</Link>
				</div>

				<div className="about-header__image-wrapper">
					<img src={juliette} alt="Juliette" />
				</div>
			</div>
		</header>
	);
}
export default AboutHeader;
