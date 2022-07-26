import styles from "./style.module.css";
import { Link } from "react-router-dom";

export function LoggedNavbar() {
  return (
    <nav className={`navbar ${styles.bgBlue}`}>
      <ul
        className={`d-flex justify-content-between align-items-center m-1 ${styles.navItems}`}
      >
        <li className="nav-item">
          <span className={`${styles.logoFont}`}>
            <Link to={"/profile"}>
              <button className={styles.buttonClear} id="classify">
                Classify
              </button>
            </Link>
          </span>
        </li>
        {
          <li className="nav-item">
            <div className={`container ${styles.textWhite}`}>
              <Link to={"/my-banks"}>
                <button className={styles.buttonClear} id="user">
                  Bank
                </button>
              </Link>
            </div>
          </li>
        }
        <li className="nav-item">
          <div className={`container ${styles.textWhite}`}>
            <Link to={"/transaction/list-transactions"}>
              <button className={styles.buttonClear} id="transactions">
                Transactions
              </button>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className={`container ${styles.textWhite}`}>
            <Link to={"/category/page-category"}>
              <button className={styles.buttonClear} id="category">
                Category
              </button>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to={"/"}>
            <button className={`btn btn-danger ${styles.button}`} id="logout">
              Log out
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
