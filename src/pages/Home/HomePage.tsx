import "./HomePage.css";
import Hero from "../../components/Hero/Hero.tsx";
import AboutSection from "../../components/AboutSection/AboutSection.tsx";
import Services from "../../components/ServicesSection/Services.tsx";

function Home() {
	return (
		<div className="home">
			<Hero />
			<AboutSection />
			<Services />
		</div>
	);
}
export default Home;
