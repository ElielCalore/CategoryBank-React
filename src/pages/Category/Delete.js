import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { LoggedNavbar } from "../../components/LoggedNavbar/index";

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
    } catch (error) {
      if (error) {
        return toast.error("Unable to Delete Category!");
      }
    }
    toast.success("Successfully Deleted!");
    setTimeout(() => {
      navigate("/category/page-category");
    }, 1000);
  }

  return (
    <div>
      <LoggedNavbar />
      <div className="col-md-8 col-sm-12 col-lg-8 container mt-5">
        <Toaster />
        <form>
          <div className="mb-4">
            <label htmlFor="code-input" className="form-label">
              <h5>product code: </h5>
            </label>
            <p>{form.code}</p>
            <label htmlFor="about-input" className="form-label">
              <h5>category description: </h5>
            </label>
            <p>{form.description}</p>
          </div>
          <div>
            <button onClick={handleDelete} className="btn btn-danger">
              CONFIRM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
