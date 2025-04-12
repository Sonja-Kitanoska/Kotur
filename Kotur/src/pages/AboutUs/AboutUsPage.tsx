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

			{/* HISTORY */}
			<div className="container pt-5">
				<h2 className="mb-4 text-center">
					Услужуваме клиенти повеќе од 10 години
				</h2>
				<div>
					<div className="row">
						<div className="col-md-5">
							<img
								src="/images/AboutUsImages/image00015 1.png"
								alt="Kotur"
								className="w-100"
							/>
							<p>
								„Котур“ во Скопје, во срцето на урбаната џунгла, е место каде
								можеш да најдеш добра уметност, филмови, разговори – омилено
								место на многу локални љубители на уметноста!"
							</p>
						</div>

						<div className="col-md-7">
							<img
								src="/images/AboutUsImages/image00043 1.png"
								alt=""
								className="w-100"
							/>
							<div>
								<h3 className="my-3">Низ годините</h3>
								<div className="d-flex justify-content-between">
									<div className="p-2">
										<p className="mb-0 fw-bold">3000+</p>
										<img
											src="/images/landingPageImages/black-spoon.png"
											alt="spoon"
										/>
										<p>Направени коктели</p>
									</div>
									<div className={`${styles.whiteBorder} p-2`}>
										<p className="mb-0 fw-bold">5000+</p>
										<img
											src="/images/landingPageImages/black-spoon.png"
											alt="spoon"
										/>
										<p>Направени кафиња</p>
									</div>
									<div className={`${styles.whiteBorder} p-2`}>
										<p className="mb-0 fw-bold">80+</p>
										<img
											src="/images/landingPageImages/black-spoon.png"
											alt="spoon"
										/>
										<p>Проекции</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Testimonials />
		</div>
	);
};

export default AboutUsPage;
