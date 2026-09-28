import "./HomePage.css";
import Hero from "../../components/Hero/Hero.tsx";
import AboutSection from "../../components/AboutSection/AboutSection.tsx";

function Home() {
	return (
		<div className="home">
			<Hero />
			<AboutSection />
		</div>
	);
}
export default Home;
