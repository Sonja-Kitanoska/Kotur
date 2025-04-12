import Testimonials from "../../components/Testimonials";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
	return (
		<div>
			<div className={styles.aboutUsHero}>
				<div className={styles.circularText}>
					<img
						src="/images/AboutUsImages/istorija-kotur.png"
						alt="Istorija na Kotur"
						className="w-100"
					/>
				</div>
			</div>
			<Testimonials />
		</div>
	);
};

export default AboutUsPage;
