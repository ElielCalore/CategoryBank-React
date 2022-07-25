import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      await axios.post("https://ironrest.herokuapp.com/elielcaloreteste", form);
    } catch (err) {
      console.log(err);
    }
    navigate("/page-category");
  }

  return (
    <div className="col-md-8 col-sm-12 col-lg-8 container mt-5">
      <form>
        <div className="mb-4">
          <label htmlFor="code-input" className="form-label">
            <h5>product code: </h5>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="code"
            className="form-control mb-4"
            value={form.code}
          />
          <label htmlFor="description-input" className="form-label">
            <h5>category description: </h5>
          </label>
          <textarea
            id="description-input"
            onChange={handleChange}
            type="text"
            name="description"
            className="form-control mb-4"
            value={form.description}
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
