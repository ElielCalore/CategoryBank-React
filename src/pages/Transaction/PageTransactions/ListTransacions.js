import { useState } from "react";
import { api } from "../../../api/api";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import { LoggedNavbar } from "../../../components/LoggedNavbar";

export function ListTransactions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function GetTransactions(e) {
      try {
        const response = await api.get("/transaction/transactions");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        if (error) {
          return toast.error("could not load transactions!");
        }
      }
    }
    GetTransactions();
  }, []);

  return (
    <div>
      <LoggedNavbar />
      <div className="container-fluid mt-5">
        <Toaster />
        <div>
          <h2>Transactions</h2>
        </div>

        <div className="d-flex p-3 flex-column mb-10 ">
          <div className="card-body">
            <div>
              <button className="btn btn-primary">
                <Link to={"/transaction/manual/create"} className="text-white">
                  Create Transaction
                </Link>
              </button>
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          {data.length === 0 ? (
            <></>
          ) : (
            data.map((current) => {
              return (
                <div className="container mb-5" key={current.date}>
                  <div className="row mb-3 p-4 align-items-center">
                    <div className="row-3">
                      <strong>DATE: {current.date}</strong>
                    </div>
                    <div className="row-3">
                      <strong>DESCRIPTION: {current.description}</strong>
                    </div>
                    <div className="row-3">
                      <strong>AMOUNT: {current.amount}</strong>
                    </div>
                    <div className="row-3">
                      <strong>CATEGORY: {current.category}</strong>
                    </div>
                  </div>
                  <div className="row-1">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-primary">Delete</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
