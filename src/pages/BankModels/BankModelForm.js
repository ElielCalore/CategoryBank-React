export function BankModelForm(props) {
  const bankModel = props.bank;
  return (
    <>
      <div className="d-fex flex-column">
        <div className="p-4" style={{ width: "400px" }}>
          <label>Bank Name</label>
          <input
            style={{ width: "400px" }}
            placeholder="The bank name"
            value={bankModel.bankName}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>File Delimiter</label>
          <input
            style={{ width: "400px" }}
            placeholder="What digit separates values in the bank statement? (eg. comma, semi-colons)"
            value={bankModel.delimeter}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Date Colunm</label>
          <input
            style={{ width: "400px" }}
            placeholder="Which colunm corresponds to Date?"
            value={bankModel.date}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Date Format Colunm</label>
          <select value={bankModel.dateFormat}>
            <option disabled defaultValue>
              Select a Date Format
            </option>
            <option>DD/MM/YY</option>
            <option>MM/DD/YY</option>
            <option>YY/MM/DD</option>
          </select>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Debit Colunm</label>
          <input
            style={{ width: "400px" }}
            placeholder="Which colunm corresponds to Debit?"
            value={bankModel.debit}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Credit Colunm</label>
          <input
            style={{ width: "400px" }}
            placeholder="Which colunm corresponds to Credit?"
            value={bankModel.credit}
          ></input>
        </div>
        <div className="p-4" style={{ width: "400px" }}>
          <label>Amount Colunm</label>
          <input
            style={{ width: "400px" }}
            placeholder="Which colunm corresponds to Amount?"
            value={bankModel.amount}
          ></input>
        </div>
        <div className="d-flex">
          <div className="p-2">
            <button className="btn btn-primary">Save</button>
          </div>
          <div className="p-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
