import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { LoggedNavbar } from "../../components/LoggedNavbar/index";

export function Create() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    code: "",
    description: "",
    transactions: [],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/category/new-category", form);
      toast.success("Successfully Created!");
    } catch (err) {
      if (err.response.data._message === "Category validation failed") {
        return toast.error("There are Fields that have not been filled in!");
      }
    }
    setTimeout(() => {
      navigate("/category/page-category");
    }, 1000);
  }

  return (
    <div>
      <LoggedNavbar />
      <div className="col-md-8 col-sm-12 col-lg-8 container mt-5">
        <Toaster />
        <form required>
          <div className="mb-4">
            <label htmlFor="code-input" className="form-label">
              <h5>Category code: </h5>
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="code"
              className="form-control mb-4"
              value={form.code}
              required
            />
            <label htmlFor="description-input" className="form-label">
              <h5>Category description: </h5>
            </label>
            <textarea
              id="description-input"
              onChange={handleChange}
              type="text"
              name="description"
              className="form-control mb-4"
              value={form.description}
              required
            />
          </div>
          <div>
            <button onClick={handleSubmit} className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
