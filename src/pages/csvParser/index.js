import Papa from "papaparse";
import { useState } from "react";

import axios from "axios";

export function CSVParser() {
  const banks = {
    nubank: {
      delimiter: "",
      columns: [""],
      date: "",
      description: "",
      credit: "",
      debit: "",
    },
    monzo: {
      delimiter: "",
      columns: [""],
      date: "",
      description: "",
      credit: "",
      debit: "",
    },
    halifax: {
      delimiter: "",
      columns: [""],
      date: "",
      description: "",
      credit: "",
      debit: "",
    },
  };

  const [transactions, setTransactions] = useState([]);

  let data = [];

  function createObject(d) {
    // console.log(typeof d);
    d.map((currEle) => {
      //   console.log(currEle["Transaction Date"]);
      return setTransactions([
        ...transactions,
        transactions.push({
          date: currEle["Transaction Date"],
          description: currEle["Transaction Description"],
          credit: currEle["Credit Amount"],
          debit: currEle["Debit Amount"],
        }),
      ]);
    });

    ///fazer axios dentro map

    console.log(transactions);
  }

  function processCSV(e) {
    const files = e.target.files;
    Papa.parse(files[0], {
      skipEmptyLines: true,
      header: true,
      complete: function (results) {
        data = results.data;
        console.log(data);
        createObject(data);
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
      <div>
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
