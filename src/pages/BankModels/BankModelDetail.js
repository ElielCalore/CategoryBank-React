import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BankModelForm } from "../../components/BankModelForm/BankModelForm";
import { LoggedNavbar } from "../../components/LoggedNavbar";

export function BankModelDetail() {
  const { bankId } = useParams();
  const [bankModel, setBankModel] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBankModel = async () => {
      try {
        const res = await api.get(`bank/${bankId}`);
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
      const res = await api.patch(`bank/update-bank/${bankId}`, bankModel);
      return navigate("/my-banks");
    } catch (error) {
      console.log(error);
    }
  }

  async function Delete() {
    try {
      const res = await api.delete(`bank/delete/${bankId}`);
      return navigate("/my-banks");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <LoggedNavbar />
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
