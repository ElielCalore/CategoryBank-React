import { useState } from "react";

export function BankModelForm(props) {
  const bankModel = props.bank;
  const setBankModel = props.setBank;
  const [format, setFormat] = useState("amount");

  function handleChange(e) {
    setBankModel({ ...bankModel, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="d-flex flex-column">
        <div className="p-4" style={{ width: "400px" }}>
          <label>Bank Name</label>
          <input
            name="bankName"
            style={{ width: "400px" }}
            placeholder="The bank name"
            value={bankModel.bankName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label
            data-toggle="tooltip"
            data-placement="top"
            title="What digit separates values in the bank statement? (eg. comma, semi-colons)"
          >
            File Delimiter
          </label>
          <input
            name="delimiter"
            type="text"
            style={{ width: "400px" }}
            placeholder="What digit separates values in the bank statement? (eg. comma, semi-colons)"
            value={bankModel.delimiter}
            onChange={handleChange}
            data-toggle="tooltip"
            data-placement="top"
            title="What digit separates values in the bank statement? (eg. comma, semi-colons)"
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Description Colunm</label>
          <input
            name="description"
            style={{ width: "400px" }}
            placeholder="Which colunm corresponds to Date?"
            value={bankModel.description}
            onChange={handleChange}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Date Colunm</label>
          <input
            name="date"
            style={{ width: "400px" }}
            placeholder="Which colunm corresponds to Date?"
            value={bankModel.date}
            onChange={handleChange}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Date Format Colunm</label>
          <select
            defaultValue="default"
            name="dateFormat"
            value={bankModel.dateFormat}
            onChange={handleChange}
          >
            <option disabled value="default">
              Select a Date Format
            </option>
            <option>DD/MM/YY</option>
            <option>MM/DD/YY</option>
            <option>YY/MM/DD</option>
          </select>
        </div>
        <fieldset>
          <div>
            <legend>File Format:</legend>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="amount"
                name="format"
                value="amount"
                // checked
                onClick={(e) => {
                  setFormat(e.target.value);
                }}
              />
              Amount only
            </div>
            <div>
              <input
                type="radio"
                id="debit-credit"
                name="format"
                value="debit-credit"
                onClick={(e) => {
                  setFormat(e.target.value);
                }}
              />
              Debit/Credit format
            </div>
          </div>
        </fieldset>
        {format === "amount" ? (
          <div className="p-4" style={{ width: "400px" }}>
            <label>Amount Colunm</label>
            <input
              name="amount"
              style={{ width: "400px" }}
              placeholder="Which colunm corresponds to Amount?"
              value={bankModel.amount}
              onChange={handleChange}
            ></input>
          </div>
        ) : (
          <>
            <div className="p-4" style={{ width: "400px" }}>
              <label>Debit Colunm</label>
              <input
                name="debit"
                style={{ width: "400px" }}
                placeholder="Which colunm corresponds to Debit?"
                value={bankModel.debit}
                onChange={handleChange}
              ></input>
            </div>
            <div className="p-4" style={{ width: "400px" }}>
              <label>Credit Colunm</label>
              <input
                name="credit"
                style={{ width: "400px" }}
                placeholder="Which colunm corresponds to Credit?"
                value={bankModel.credit}
                onChange={handleChange}
              ></input>
            </div>
          </>
        )}
      </div>
    </>
  );
}
