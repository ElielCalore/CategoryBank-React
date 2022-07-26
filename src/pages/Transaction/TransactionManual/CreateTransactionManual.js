import { useState } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { LoggedNavbar } from "../../../components/LoggedNavbar/index";

export function CreateTransactionManual() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: "",
    description: "",
    amount: 0,
    category: "",
  });
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function handleCategory(e) {
      try {
        const response = await api.get("/user/profile");
        setCategory(response.data.categories);
      } catch (error) {
        if (error) {
          return toast.error("could not create transactions!");
        }
      }
    }
    handleCategory();
  }, []);

  function SubmitCategory(e) {
    e.preventDefault();
    try {
      setForm({ ...form, category: e.target.value });
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    try {
      await api.post("/transaction/new-transaction", form);
      toast.success("Successfully Created!");
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      navigate("/transaction/list-transactions");
    }, 1000);
  }

  return (
    <div>
      <LoggedNavbar />
      <div className="col-md-8 col-sm-12 col-lg-8 container mt-5">
        <Toaster />
        <form>
          <div className="mb-4">
            <label htmlFor="date-input" className="form-label">
              <h5>Transaction Date: </h5>
            </label>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              className="form-control mb-4"
              value={form.date}
            />
            <label htmlFor="description-input" className="form-label">
              <h5>Transaction description: </h5>
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
          <label htmlFor="amount-input" className="form-label">
            <h5>Transaction Value: </h5>
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            className="form-control mb-4"
            value={form.amount}
          />
          <label htmlFor="category-input" className="form-label">
            <h5>Select Category: </h5>
          </label>
          <select
            name="select"
            onChange={SubmitCategory}
            defaultValue="Default"
          >
            <option disabled value="Default">
              Select A Category
            </option>
            {category.map((currentElement) => {
              return (
                <option value={currentElement._id}>
                  {currentElement.code}
                </option>
              );
            })}
          </select>

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
