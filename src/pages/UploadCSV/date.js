export function DateConverter({ s }) {
  // DD/MM/YYYY MM/DD/YYYY YYYY/MM/DD => DD/MM/YYYY

  // DD/MM/YYYY
  function DDMMYYYY(s) {
    let day = s.substring(0, 2);
    let month = s.substring(3, 5);
    let year = s.substring(6, 10);
    return day + "/" + month + "/" + year;
  }
  // MM/DD/YYYY

  function MMDDYYYY(s) {
    let day = s.substring(3, 5);
    let month = s.substring(0, 2);
    let year = s.substring(6, 10);
    return day + "/" + month + "/" + year;
  }
  // YYYY/MM/DD
  function YYYYMMDD(s) {
    let day = s.substring(8, 10);
    let month = s.substring(5, 7);
    let year = s.substring(0, 4);
    return day + "/" + month + "/" + year;
  }

  const typeModel = "YY/MM/DD";
  let result = "";

  if (typeModel === "DD/MM/YY") {
    result = DDMMYYYY(s);
  }
  if (typeModel === "MM/DD/YY") {
    result = MMDDYYYY(s);
  }
  if (typeModel === "YY/MM/DD") {
    result = YYYYMMDD(s);
  }

  console.log(result);
}
