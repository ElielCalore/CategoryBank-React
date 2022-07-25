export function BankModelForm(props) {
  const bankModel = props.bank;
  const setBankModel = props.setBank;

  function handleChange(e) {
    setBankModel({ ...bankModel, [e.target.name]: e.target.value });
    console.log(bankModel);
  }

  return (
    <>
      <div className="d-fex flex-column">
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
          <label>File Delimiter</label>
          <input
            name="delimiter"
            style={{ width: "400px" }}
            placeholder="What digit separates values in the bank statement? (eg. comma, semi-colons)"
            value={bankModel.delimeter}
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
            name="dateFormat"
            value={bankModel.dateFormat}
            onChange={handleChange}
          >
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
