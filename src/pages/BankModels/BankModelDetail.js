import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BankModelForm } from "./BankModelForm";

export function BankModelDetail() {
  const { bankId } = useParams();
  const [bankModel, setBankModel] = useState({});

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
  }, [bankId]);
  return (
    <>
      <h1>Bank Model Details</h1>
      <BankModelForm bank={bankModel} />
    </>
  );
}
