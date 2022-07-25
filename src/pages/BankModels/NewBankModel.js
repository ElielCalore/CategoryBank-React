import { BankModelForm } from "../../components/BankModelForm/BankModelForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function NewBankModel() {
  const navigate = useNavigate();

  const [bankModel, setBankModel] = useState({
    bankName: "",
    delimiter: "",
    date: "",
    dateFormat: "",
    debit: "",
    credit: "",
    amount: "",
  });

  async function Save() {
    try {
      const res = await axios.post(
        `https://ironrest.herokuapp.com/classify/`,
        bankModel
      );
      return navigate("/my-banks");
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <>
      <h1>Create New Bank Model</h1>
      <BankModelForm bank={bankModel} setBank={setBankModel} />
      <div className="p-2">
        <button className="btn btn-primary" onClick={Save}>
          Save
        </button>
      </div>
    </>
  );
}
