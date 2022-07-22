import styles from "./style.module.css";

export function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className={styles.formContainer}>
        <form className="d-flex align-items-center flex-column">
          <p className={styles.logoFont}>Classify</p>

          <div className="container">
            {/* <label>Name</label> */}
            <input className="form-control mb-4" placeholder="Name" />
          </div>

          <div className="container">
            {/* <label>Password</label> */}
            <input className="form-control mb-4" placeholder="Password" />
          </div>

          <button className={`btn btn-danger mt-2 ${styles.button}`}>
            Login
          </button>

          <p className="mt-5">sign up</p>
        </form>
      </div>
    </div>
  );
}
