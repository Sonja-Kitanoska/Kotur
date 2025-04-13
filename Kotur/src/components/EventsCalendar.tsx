import { useState } from "react";
import styles from "../pages/Events/EventsPage.module.css";
const EventsCalendar = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const getMonthNames = () => {
		const monthNames = [
			"Јан",
			"Фев",
			"Мар",
			"Апр",
			"Маj",
			"Јун",
			"Јул",
			"Авг",
			"Сеп",
			"Окт",
			"Ное",
			"Дек",
		];

		const currentDate = new Date();
		const months = [];

		for (let i = 0; i < 7; i++) {
			const futureDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() + i,
				1
			);
			const month = monthNames[futureDate.getMonth()];
			months.push(month);
		}

		return months;
	};

	const monthList = getMonthNames();
	return (
		<div className="bg-black py-5">
			<div className="container">
				<h2 style={{ color: "#DFDFDF" }}>Календар Котур Настани</h2>
				<div className={styles.monthNames}>
					{monthList.map((month, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`${index === activeIndex ? styles.activeButton : ""} ${
								styles.flatButton
							} btn border-white text-uppercase`}
						>
							{month}{" "}
						</button>
					))}
				</div>
				<div className="text-white">
					{/* <div>
						<h6 className="mb-0">Сабота</h6>
						<p className="mb-0 fw-bold" style={{ fontSize: "22px" }}>
							19.04
						</p>
						<p className="mb-0">2025</p>
					</div> */}

					<div className="row mt-4 m-0">
						<div className="col-md-6 col-lg-3 px-0 gy-2">
							<div
								className="d-flex border-start justify-content-evenly py-3"
								style={{ backgroundColor: "#303234 " }}
							>
								<div className="align-self-end">
									<button className={styles.findMoreBtn}>Дознај повеќе</button>
								</div>
								<div>
									<p className="mb-0">10:30-12:00</p>
									<p style={{ fontSize: "22px" }}>Настан #1</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-3 px-0 gy-2">
							<div
								className="d-flex border-start justify-content-evenly py-3"
								style={{ backgroundColor: "#303234 " }}
							>
								<div className="align-self-end">
									<button className={styles.findMoreBtn}>Дознај повеќе</button>
								</div>
								<div>
									<p className="mb-0">10:30-12:00</p>
									<p style={{ fontSize: "22px" }}>Настан 2</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-3 px-0 gy-2">
							<div
								className="d-flex border-start justify-content-evenly py-3"
								style={{ backgroundColor: "#303234 " }}
							>
								<div className="align-self-end">
									<button className={styles.findMoreBtn}>Дознај повеќе</button>
								</div>
								<div>
									<p className="mb-0">10:30-12:00</p>
									<p style={{ fontSize: "22px" }}>Настан #3</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-lg-3 px-0 gy-2">
							<div
								className="d-flex border-start justify-content-evenly py-3"
								style={{ backgroundColor: "#303234 " }}
							>
								<div className="align-self-end">
									<button className={styles.findMoreBtn}>Дознај повеќе</button>
								</div>
								<div>
									<p className="mb-0">10:30-12:00</p>
									<p style={{ fontSize: "22px" }}>Настан #4</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
									<p className="text-uppercase mb-0">Subheading</p>
									<p className="mb-0">Lorem ipsum</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventsCalendar;
