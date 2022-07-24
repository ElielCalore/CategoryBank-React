import styles from "./style.module.css";

export function LoginAdriano() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className={styles.formContainer}>
        <form className="d-flex align-items-center flex-column">
          <h1 className={styles.logoFont}>Classify</h1>

          <div className="container">
            {/* <label>Name</label> */}
            <input className="form-control mb-4" placeholder="Name" />
          </div>

          <div className="container">
            {/* <label>Password</label> */}
            <input type='password' className="form-control mb-4" placeholder="Password" />
          </div>

          <button className={`btn btn-danger mt-2 ${styles.button}`}>
            Login
          </button>

          <a href="/upload-csv" className={`${styles.a}`}><p className="mt-5">sign up</p></a>
        </form>
      </div>
    </div>
  );
}
