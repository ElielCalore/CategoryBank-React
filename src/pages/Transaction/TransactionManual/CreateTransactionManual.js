import { useState } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Toast } from "bootstrap";

export function CreateTransactionManual() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: "",
    description: "",
    amount: 0,
    categories: {},
  });
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function handleCategory(e) {
      try {
        const response = await api.get("/user/profile");
        setCategory(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    handleCategory();
  }, []);

  function SubmitCategory(e) {
    e.preventDefault();
    console.log(e.target.value);
    try {
      setForm({ ...form, categories: e.target.value });
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/transaction/new-transaction", form);
    } catch (err) {
      console.log(err);
    }
    // navigate("/list-transactions");
  }

  return (
    <div className="col-md-8 col-sm-12 col-lg-8 container mt-5">
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
          <label htmlFor="name-input" className="form-label">
            <h5>Transaction Name: </h5>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control mb-4"
            value={form.name}
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
        <select name="select" onChange={SubmitCategory}>
          {category.map((currentElement) => {
            return (
              <option value={currentElement.code}>{currentElement.code}</option>
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
  );
}
