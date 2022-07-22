import Papa from "papaparse";
import { useState } from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export function CSVParser() {
  const navigate = useNavigate();
  const banks = {
    Nubank: {
      delimiter: "",
      columns: [""],
      date: "",
      description: "",
      credit: "",
      debit: "",
    },
    Monzo: {
      delimiter: ",",
      columns: [
        "Transaction ID",
        "Date",
        "Time",
        "Type",
        "Name",
        "Emoji",
        "Category",
        "Amount",
        "Currency",
        "Local amount",
        "Local currency",
        "Notes and #tags",
        "Address",
        "Receipt",
        "Description",
        "Category split",
        "Money Out",
        "Money In",
      ],
      date: "Date",
      description: "Description",
      credit: "Money In",
      debit: "Money Out",
    },
    Halifax: {
      delimiter: ",",
      columns: [
        "Transaction Date",
        "Transaction Type",
        "Sort Code",
        "Account Number",
        "Transaction Description",
        "Debit Amount",
        "Credit Amount",
        "Balance",
      ],
      date: "Transaction Date",
      description: "Transaction Description",
      credit: "Credit Amount",
      debit: "Debit Amount",
    },
  };

  const [bankModel, setBankModel] = useState("");
  const [transactions, setTransactions] = useState([]);

  let data = [];

  function createObject(d, b) {
    // console.log(b);
    d.map((currEle) => {
      // console.log(currEle[banks[b]["date"]]);
      return setTransactions([
        ...transactions,
        transactions.push({
          date: currEle[banks[b]["date"]],
          description: currEle[banks[b]["description"]],
          credit: Number(currEle[banks[b]["credit"]]),
          debit: Number(currEle[banks[b]["debit"]]),
        }),
      ]);
    });

    ///fazer axios dentro map

    console.log(transactions);
  }

  function processCSV(e) {
    setTransactions([]);
    console.log(transactions);
    console.log(bankModel);
    const files = e.target.files;
    Papa.parse(files[0], {
      skipEmptyLines: true,
      header: true,
      columns: banks[bankModel].columns,
      delimiter: banks[bankModel].delimiter,
      complete: function (results) {
        data = results.data;
        console.log(data);
        createObject(data, bankModel);
      },
    });

    // return data;
  }

  async function sendToBack(e) {
    e.preventDefault();

    for (let i = 0; i < transactions.length - 1; i++) {
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

    // try {
    //   const res = await axios.post("https://ironrest.herokuapp.com/classify/", {
    //     transactions,
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
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
        <button onClick={sendToBack}>SEND</button>

        {/* <button
          onClick={(e) => {
            e.preventDefault();
            setTransactions(data);
            console.log(transactions);
          }}
        >
          <p>Console Log Transactions</p>
        </button> */}
      </div>
    </>
  );
}

//TESTING AMOUNT AS FIELD (RATHER THAN CREDIT AND DEBIT)
// let MoneyIn = "20";
// let MoneyOut = "";
// let Amount = "";

// let realValue = 0;

// if (Number(Amount) != 0) {
//   realValue = Number(Amount);
// } else {
//   realValue = Number(MoneyIn) + Number(MoneyOut);
// }

// console.log(realValue);
