import { useState } from "react";
import { Navbar } from "../../components/Navbar";

// IMPORT IMAGES
import classify from "../../assets/images/landingpage.png";
import mission from "../../assets/images/mission.png";
import adriano from "../../assets/images/adriano.png";
import caio from "../../assets/images/caio.jpg";
import eliel from "../../assets/images/eliel.jpg";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

//IMPORT CSS
import styles from "./style.module.css";

//IMPORT COMPONENTS
import { Login } from "../User/Login";
import { Signup } from "../User/Signup";

export function Home() {
	const [navButtons, setNavButtons] = useState([
		{ id: "classify", value: true },
		{ id: "about", value: false },
		{ id: "mission", value: false },
		{ id: "faq", value: false },
		{ id: "login", value: false },
		{ id: "create", value: false },
	]);

	function handleNav(e) {
		const buttonsState = navButtons.map((current) => {
			// console.log(current.id)
			// console.log(e.target.id)
			if (current.id === e.target.id) {
				return (current = { id: current.id, value: true });
			}
			return { id: current.id, value: false };
		});
		setNavButtons(buttonsState);
	}

	// console.log(navButtons)

	return (
		<>
			<Navbar handleNav={handleNav} />

			{navButtons[0].value && (
				<>
					<div className={`container-fluid ${styles.divHome}`} style={{ backgroundImage: `url(${classify})` }}>
						<div className={`${styles.formContainer} ${styles.textWhite}`}>
							{" "}
							<h1 className="m-5">Your financial life in your hands</h1>{" "}
						</div>
					</div>
				</>
			)}

			{navButtons[1].value && (
				<div className={`container-fluid mt-5 ${styles.divHome}`}>
					<div className="d-flex justify-content-center">
						<div className="d-flex flex-column justify-content-center align-items-center">
							<img src={adriano} className={`m-5 ${styles.imgSize}`} alt="adriano" />
							<div>
								<h4 className={styles.textBlue}>Adriano Harm</h4>
							</div>
							<div>
								<h5 className={styles.textBlue}>
									<strong>Co-Founder</strong>
								</h5>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<img src={linkedin} className="m-1" alt="linkedin" />
								</div>
								<div>
									<img src={github} className="m-1" alt="github" />
								</div>
							</div>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<img src={caio} className={`m-5 ${styles.imgSize}`} alt="caio" />
							<div>
								<h4 className={styles.textBlue}>Caio Garcia</h4>
							</div>
							<div>
								<h5 className={styles.textBlue}>
									<strong>Co-Founder</strong>
								</h5>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<img src={linkedin} className="m-1" alt="linkedin" />
								</div>
								<div>
									<img src={github} className="m-1" alt="github" />
								</div>
							</div>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<img src={eliel} className={`m-5 ${styles.imgSize}`} alt="eliel" />
							<div>
								<h4 className={styles.textBlue}>Eliel Calore</h4>
							</div>
							<div>
								<h5 className={styles.textBlue}>
									<strong>Co-Founder</strong>
								</h5>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								<div>
									<img src={linkedin} className="m-1" alt="linkedin" />
								</div>
								<div>
									<img src={github} className="m-1" alt="github" />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{navButtons[2].value && (
				<div className={`container-fluid d-flex align-items-center justify-content-center ${styles.divHome}`} style={{ backgroundImage: `url(${mission})` }}>
					<div className={`container ${styles.textBlue} ${styles.formContainer2}`}>
						{" "}
						<h1 className={styles.paragraph2}>Simplify your expense tracking</h1>
						<p className={styles.paragraph}>
							{" "}
							we believe the right financial tools can help you build peace of mind, establish healthy financial habits, and achieve your goals. Our mission is to be the tool that does this for you.
							We're a team of startup veterans with product, design, and engineering experience at some of the best technology companies in the world. We're in this together.
						</p>
					</div>
				</div>
			)}

			{navButtons[3].value && (
				<div className={`container-fluid ${styles.divHome}`}>
					<div className={styles.textBlue}>
						{" "}
						<h1 className="m-5">Que esse projeto vai ficar dahora!!!</h1>{" "}
					</div>
				</div>
			)}

			{navButtons[4].value && <Login />}

			{navButtons[5].value && <Signup />}
		</>
	);
}
