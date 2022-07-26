import { useState } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { Toaster, toast } from "react-hot-toast";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form });
      toast.success("Profile created successfully!");
    } catch (error) {
      if (error) {
        return toast.error("Invalid email or password!");
      }
    }
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  return (
    <>
      <Toaster />
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label htmlFor="formName">Name:</label>
            <input
              className="form-control mb-4"
              id="formName"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="formEmail">E-mail:</label>
            <input
              className="form-control mb-4"
              id="formEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="formPassword">Password:</label>
            <input
              className="form-control mb-4"
              id="formPassword"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
            <label htmlFor="formConfirmPassword">Confirm Password:</label>
            <input
              className="form-control mb-4"
              id="formConfirmPassword"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit" className={`btn btn-danger ${styles.button}`}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
