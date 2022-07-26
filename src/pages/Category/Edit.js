import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

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
        const response = await api.get(`category/${id}`);
        setForm({ ...response.data });
      } catch (err) {
        if (err) {
          return toast.error("Could not load Category!");
        }
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
      await api.patch(`category/update/${id}`, clone);

      toast.success("Successfully Update!");
    } catch (error) {
      if (error) {
        return toast.error("There are Fields that have not been filled in!");
      }
    }
    setTimeout(() => {
      navigate("/category/page-category");
    }, 1000);
  }

  return (
    <div className="col-md-8 col-sm-12 col-lg-8 container mt-5">
      <Toaster />
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
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
