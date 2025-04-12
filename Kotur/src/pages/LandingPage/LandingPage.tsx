import Testimonials from "../../components/Testimonials";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
	return (
		<div>
			<div className={styles.hero}>
				<div>
					<img
						src="./images/landingPageImages/landing-logo.png"
						alt="Kotur logo"
					/>
				</div>
			</div>

			{/* RECOMMENDATION SECTION */}
			<div className={styles.recommendation}>
				<div>
					<div className={styles.leftContent}>
						<p style={{ color: "#C0C6BA" }} className="text-uppercase">
							Оcвежете го вашиот ден со нашиот коктел на денот!
						</p>
					</div>
					<div className={styles.rightContent}>
						<p style={{ color: "#C0C6BA" }} className="text-uppercase">
							Дневно уживање во секоја чаша – пробајте го денешниот коктел!
						</p>
					</div>
					<div></div>
				</div>
			</div>
			{/* TESTIMONIALS */}
			<Testimonials />
		</div>
	);
};

export default LandingPage;
