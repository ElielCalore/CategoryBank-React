import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    code: "",
    description: "",
    transactions: [],
  });

  useEffect(() => {
    async function EditedCategory() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/elielcaloreteste/${id}`
        );
        setForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }

    EditedCategory();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...form };
      delete clone._id;
      await axios.put(
        `https://ironrest.herokuapp.com/elielcaloreteste/${id}`,
        clone
      );
    } catch (error) {
      console.log(error);
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
          <label htmlFor="about-input" className="form-label">
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
          <button onClick={handleSubmit} className={"btn btn-primary"}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
