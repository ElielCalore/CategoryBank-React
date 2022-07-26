import { useState } from "react";
import { Navbar } from "../../components/Navbar";

// IMPORT IMAGES
import classify from "../../assets/images/landingpage.png";
import about from "../../assets/images/about.png";
import mission from "../../assets/images/mission.png";

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
        <div
          className={`container-fluid ${styles.divHome}`}
          style={{ backgroundImage: `url(${about})` }}
        >
          <div className={`${styles.formContainer2} ${styles.textBlue}`}>
            {" "}
            <h1 className="m-5">Simplify your expense tracking</h1>{" "}
          </div>
        </div>
      )}

      {navButtons[2].value && (
        <div
          className={`container-fluid ${styles.divHome}`}
          style={{ backgroundImage: `url(${mission})` }}
        >
          <div className={styles.textWhite}>
            {" "}
            <h1 className="m-5">Bora codar!!!!</h1>{" "}
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
// setNavButtons({...navButtons, [e.target.id] : !navButtons[e.target.id]})
