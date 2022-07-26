import Papa from "papaparse";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export function UploadCSV() {
  const navigate = useNavigate();
  const [banks, setBanks] = useState([]);
  //useEffect para definir esses banks
  const [bankModel, setBankModel] = useState("");
  const [transactions, setTransactions] = useState([]);

  function createObject(d, b) {
    setTransactions(
      d.map((currEle) => {
        let realAmount = 0;
        //
        if (
          Number(currEle[banks[b]["amount"]]) !== 0 &&
          currEle[banks[b]["amount"]]
        ) {
          realAmount = Number(currEle[banks[b]["amount"]]);
        } else {
          realAmount =
            Number(currEle[banks[b]["credit"]]) +
            Number(currEle[banks[b]["debit"]]);
        }
        return {
          date: currEle[banks[b]["date"]],
          description: currEle[banks[b]["description"]],
          amount: realAmount,
        };
      })
    );
  }

  function processCSV(e) {
    let data = [];
    setTransactions([]);
    const files = e.target.files;
    //export this as function
    Papa.parse(files[0], {
      skipEmptyLines: true,
      header: true,
      // columns: banks[bankModel].columns,
      delimiter: banks[bankModel].delimiter,
      complete: function (results) {
        // data = [];
        data = results.data;
        console.log(data);
        createObject(data, bankModel);
      },
    });
  }

  async function sendToBack(e) {
    e.preventDefault();

    for (let i = 0; i < transactions.length; i++) {
      try {
        const res = await axios.post(
          "https://ironrest.herokuapp.com/classify/",
          transactions[i]
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // useEffect(() => {
  //   function createToggle(t) {
  //     console.log(t)
  //       setToggle(t.map((current, i) => {
  //         return  {id : i,
  //                 value: true}
  //       }))
  //   } createToggle(transactions)
  // },[transactions])

  console.log(transactions);

  function handleUpdate(e) {
    if (e.target.name === "amount") {
      if (
        typeof Number(e.target.value) === NaN ||
        typeof Number(e.target.value)
      ) {
        return console.log("ERROR");
      }
    }

    const clone = [...transactions];
    console.log(clone[e.target.id]);
    clone[e.target.id][e.target.name] = e.target.value;
    setTransactions(clone);
  }

  function handleDelete(e) {
    const clone = [...transactions];
    clone.splice(e.target.id, 1);
    setTransactions(clone);
  }

  return (
    <>
      <div className={styles.csvForm}>
        <select
          value={bankModel}
          onChange={(e) => {
            setBankModel(e.target.value);
            // console.log(bankModel);
          }}
        >
          <option value="" disabled defaultValue="Select your bank">
            Select your bank
          </option>
          <option>Nubank</option>
          <option>Halifax</option>
          <option>Monzo</option>
          <option
            onClick={() => {
              return navigate("/login");
            }}
          >
            Create new model
          </option>
        </select>
        <input type="file" accept=".csv" onChange={processCSV} />
        {transactions[0] ? (
          <>
            <table>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>

              {transactions.map((elem, i) => {
                return (
                  <tr>
                    <td>
                      <p>{transactions[i]["date"]}</p>
                    </td>
                    <td>
                      <input
                        value={transactions[i]["description"]}
                        name="description"
                        onChange={handleUpdate}
                        id={i}
                      />
                    </td>
                    <td>
                      <p>{transactions[i]["amount"]}</p>
                    </td>
                    <td>
                      <button
                        className={`btn btn-danger`}
                        onClick={handleDelete}
                        id={i}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </>
        ) : (
          <>
            <p>false</p>
          </>
        )}
        <button onClick={sendToBack}>SEND</button>
      </div>
    </>
  );
}
