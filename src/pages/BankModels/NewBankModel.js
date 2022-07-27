import { BankModelForm } from "../../components/BankModelForm/BankModelForm";
import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { LoggedNavbar } from "../../components/LoggedNavbar";
import { Toaster, toast } from "react-hot-toast";

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
      await api.post("/bank/custom-bank", bankModel);

      toast.success("Successfully Created!");
    } catch (error) {
      if (error) {
        return toast.error("Please fill in all the boxes!");
      }
    }
    setTimeout(() => {
      navigate("/my-banks");
    }, 1000);
  }

  return (
    <>
      <LoggedNavbar />
      <Toaster />
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
