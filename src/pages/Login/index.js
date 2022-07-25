import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-dark2">
        <div></div>
      </nav>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className={styles.formContainer}>
          <form
            className="d-flex align-items-center flex-column mt-4"
            onSubmit={handleSumit}
          >
            <h2 className={`mb-4 ${styles.textWhite}`}>Welcome back!</h2>

            <div className="container">
              {/* <label>Name</label> */}
              <input
                className={`form-control mb-4 ${styles.input}`}
                placeholder="user"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="container">
              {/* <label>Password</label> */}
              <input
                type="password"
                className={`form-control mb-4 ${styles.input}`}
                placeholder="password"
                onChange={handleChange}
              />
            </div>

            <button className={`btn btn-danger ${styles.button}`} type="submit">
              Login
            </button>

            <p className="mt-5">sign up</p>
          </form>
        </div>
      </div>
    </div>
  );
}
