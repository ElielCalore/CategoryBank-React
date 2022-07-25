import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BankModelForm } from "../../components/BankModelForm/BankModelForm";

export function BankModelDetail() {
  const { bankId } = useParams();
  const [bankModel, setBankModel] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBankModel = async () => {
      try {
        const res = await axios.get(
          `https://ironrest.herokuapp.com/classify/${bankId}`
        );
        setBankModel({ ...res.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchBankModel();
  }, []);

  async function SaveChanges() {
    try {
      delete bankModel._id;
      const res = await axios.put(
        `https://ironrest.herokuapp.com/classify/${bankId}`,
        bankModel
      );
      return navigate("/my-banks");
    } catch (error) {
      console.log(error);
    }
  }

  async function Delete() {
    try {
      const res = await axios.delete(
        `https://ironrest.herokuapp.com/classify/${bankId}`
      );
      return navigate("/my-banks");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Bank Model Details</h1>
      <BankModelForm bank={bankModel} setBank={setBankModel} />
      <div className="d-flex">
        <div className="p-2">
          <button className="btn btn-primary" onClick={SaveChanges}>
            Save
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-danger" onClick={Delete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
