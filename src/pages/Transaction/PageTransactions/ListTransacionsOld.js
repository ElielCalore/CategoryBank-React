import { useState } from "react";
import { api } from "../../../api/api";
//import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

export function ListTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function GetTransactions(e) {
      try {
        // const response = await api.get("/transaction/transactions");
        const response = await api.get("/user/profile")
        console.log(response.data.transactions);
        console.log(response.data.categories)
        setTransactions(response.data.transactions);
        setCategories(response.data.categories)
      } catch (error) {
        console.log(error);
      }
    }
    GetTransactions();
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div>
        <h2>Transactions</h2>
      </div>

      <div className="d-flex p-3 flex-column mb-10 ">
        <div className="card-body">
          <div>
            <button className="btn btn-primary">Create Transaction</button>
          </div>
        </div>

        {transactions.length === 0 ? (<></>) : (
          transactions.map((current) => {
            return (
              <div className="container mb-5" key={current.date}>

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

                <div className="row-1">
                  <button className="btn btn-primary">Edit</button>

                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}



