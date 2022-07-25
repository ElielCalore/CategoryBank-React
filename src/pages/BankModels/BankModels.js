import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function BankModels() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const res = await axios.get("https://ironrest.herokuapp.com/classify/");
        setBanks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanks();
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Your current Bank Models</h1>
          <p>Here you can find all your Bank Statement csv models.</p>
        </div>
      </div>
      <div className="d-flex flex-row">
        {banks.map((elem) => {
          return (
            <div className="p-4" key={elem._id}>
              <h2>{`${elem.bankName} Model`}</h2>
              <Link to={`/bank-model/${elem._id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Link to="/new-bank-model/">
          <button className="m-4 btn btn-primary">Create New Model</button>{" "}
        </Link>
      </div>
    </>
  );
}
