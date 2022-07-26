import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    code: "",
    description: "",
    transactions: [],
  });

  useEffect(() => {
    async function deletedCategory() {
      try {
        const response = await api.get(`category/${id}`);
        setForm({ ...response.data });
      } catch (err) {
        if (err) {
          return toast.error("Could not load Category!");
        }
      }
    }

    deletedCategory();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      await api.delete(`category/delete/${id}`);
      toast.success("Successfully Deleted!");
    } catch (error) {
      if (error) {
        return toast.error("Unable to Delete Category!");
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
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
