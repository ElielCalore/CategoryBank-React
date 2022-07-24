import Papa from "papaparse";
import { useState } from "react";
import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export function CSVParser() {
  const navigate = useNavigate();
  const banks = {
    Nubank: {
      delimiter: ",",
      columns: ["Data", "Valor", "Identificador", "Descrição"],
      date: "Data",
      description: "Descrição",
      credit: "",
      debit: "",
      amount: "Valor",
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
      amount: "",
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
      amount: "",
    },
    Bradesco: {
      delimiter: ";",
      columns: [
        "Data",
        "Histórico",
        "Docto.",
        "Crédito (R$)",
        "Débito (R$)",
        "Saldo (R$)",
        "",
      ],
      date: "Data",
      description: "Histórico",
      credit: "Crédito (R$)",
      debit: "Débito (R$)",
    },
  };

  const [bankModel, setBankModel] = useState("");
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    amount: 0,
  });

  let data = [];

  async function sendTransaction(transact) {
    try {
      const res = await axios.post(
        "https://ironrest.herokuapp.com/classify/",
        transact
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


   
  function createObject(d, b) {

    setTransaction(d.map((currEle) => {
      let realAmount = 0;
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
      let tempTransaction = {};
      return tempTransaction = {
        date: currEle[banks[b]["date"]],
        description: currEle[banks[b]["description"]],
        amount: realAmount,
      };
    }))
  }

  console.log(transaction)


  function processCSV(e) {
    setTransaction([]);
    const files = e.target.files;
    Papa.parse(files[0], {
      skipEmptyLines: true,
      header: true,
      // columns: banks[bankModel].columns,
      delimiter: banks[bankModel].delimiter,
      complete: function (results) {
        data = [];
        data = results.data;
        console.log(data);
        createObject(data, bankModel);
      },
    });
  }


  async function sendToBack(e) {
    e.preventDefault();

    // for (let i = 0; i < transactions.length - 1; i++) {
    //   try {
    //     const res = await axios.post(
    //       "https://ironrest.herokuapp.com/classify/",
    //       transactions[i]
    //     );
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
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
      </div>
    </>
  );
}
