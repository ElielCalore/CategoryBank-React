import { api } from "../../api/api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ClassifyModel from "../../assets/bank/ClassifyTemplate.csv";
import { LoggedNavbar } from "../../components/LoggedNavbar";
import { Toaster, toast } from "react-hot-toast";

export function BankModels() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const res = await api.get("/bank/bank-model");
        setBanks(res.data);
      } catch (error) {
        if (error) {
          return toast.error("Unable to load the information!");
        }
      }
    };
    fetchBanks();
  }, []);

  return (
    <>
      <div>
        <LoggedNavbar />
        <div className="text-center m-5">
          <h1>Your current Bank Models</h1>
          <p>Here you can find all your Bank Statement csv models.</p>
        </div>
      </div>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {banks.map((elem) => {
          return (
            <div className="gap-0  mx-auto py-3 m-3" key={elem._id}>
              <h2>{`${elem.bankName} Model`}</h2>
              <Link to={`/bank-model/${elem._id}`}>
                <button className="btn btn-primary btn-lg p-2 m-0">Edit</button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="text-center m-5">
        <Link to="/new-bank-model/">
          <button className="btn btn-primary btn-lg px-3 mx-1">
            Create New Model
          </button>
        </Link>
        <a href={ClassifyModel} download="ClassifyTemplate.csv">
          <button className="btn btn-primary btn-lg px-2">
            Download Our Model
          </button>
        </a>
      </div>
    </>
  );
}
