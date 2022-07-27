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
import { Link } from "react-router-dom";

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
      if (current.id === e.target.id) {
        return (current = { id: current.id, value: true });
      }
      return { id: current.id, value: false };
    });
    setNavButtons(buttonsState);
  }

  return (
    <>
      <Navbar handleNav={handleNav} />

      {navButtons[0].value && (
        <>
          <div
            className={`container-fluid ${styles.divHome}`}
            style={{ backgroundImage: `url(${classify})` }}
          >
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
              <img
                src={adriano}
                className={`m-5 ${styles.imgSize}`}
                alt="adriano"
              />
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
                  <a
                    target="_blank"
                    href={"https://www.linkedin.com/in/adrianoharm/"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#0a66c2"
                      className="mercado-match"
                      width="32"
                      height="32"
                      focusable="false"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a target="_blank" href={"https://github.com/adhkr81"}>
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      className="octicon octicon-mark-github v-align-middle"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
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
                  <a
                    target="_blank"
                    href={"https://www.linkedin.com/in/caiopgarcia/"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#0a66c2"
                      className="mercado-match"
                      width="32"
                      height="32"
                      focusable="false"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a target="_blank" href={"https://github.com/caio-garcia"}>
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      className="octicon octicon-mark-github v-align-middle"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={eliel}
                className={`m-5 ${styles.imgSize}`}
                alt="eliel"
              />
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
                  <a
                    target="_blank"
                    href={"https://www.linkedin.com/in/elielcalore/"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#0a66c2"
                      className="mercado-match"
                      width="32"
                      height="32"
                      focusable="false"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </div>

                <div>
                  <a target="_blank" href={"https://github.com/ElielCalore"}>
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      className="octicon octicon-mark-github v-align-middle"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <strong>
              This project was conceived by Caio Garcia, who saw the need to
              have an application in which all his banking transactions could be
              categorized, and with that in mind, we embarked with him, and this
              was our result.
            </strong>
          </div>
        </div>
      )}

      {navButtons[2].value && (
        <div
          className={`container-fluid d-flex align-items-center justify-content-center ${styles.divHome}`}
          style={{ backgroundImage: `url(${mission})` }}
        >
          <div
            className={`container ${styles.textBlue} ${styles.formContainer2}`}
          >
            {" "}
            <h1 className={styles.paragraph2}>
              Simplify your expense tracking
            </h1>
            <p className={styles.paragraph}>
              {" "}
              We believe the right financial tools can help you build peace of
              mind, establish healthy financial habits, and achieve your goals.
              Our mission is to be the tool that does this for you. We're in
              this together.
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

      {navButtons[5].value && (
        <Signup props={navButtons} setProps={setNavButtons} />
      )}
    </>
  );
}
