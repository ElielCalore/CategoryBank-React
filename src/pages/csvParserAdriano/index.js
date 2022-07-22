import Papa from "papaparse";
import { useState } from "react";

export function CSVParserAdriano() {
  const [transactions, setTransactions] = useState([
    {
      date: "",
      description: "",
      credit: "",
      debit: "",
    },
  ]);

  let data = [];

  function createObject(d) {
    console.log(d);
    d.map((currEle) => {
      return setTransactions({
        date: currEle["Transaction Date"],
        description: currEle["Transaction Description"],
        credit: currEle["Credit Amount"],
        debit: currEle["Debit Amount"],
      });
    });

    console.log(transactions);
  }

  function processCSV(e) {
    const files = e.target.files;
    Papa.parse(files[0], {
      header: true,
      complete: function (results) {
        data = results.data;
        console.log(data);
      },
    });

    createObject({ data });
    // return data;
  }

  return (
    <>
      <div>
        <input type="file" accept=".csv" onChange={processCSV} />

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
