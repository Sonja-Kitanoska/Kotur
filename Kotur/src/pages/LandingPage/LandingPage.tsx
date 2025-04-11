import styles from "./LandingPage.module.css";
const LandingPage = () => {
	return (
		<div className={styles.hero}>
			<div>
				<img
					src="./images/landingPageImages/landing-logo.png"
					alt="Kotur logo"
				/>
			</div>
		</div>
	);
};

export default LandingPage;
