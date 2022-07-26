import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function PageCategory() {
  const [data, setData] = useState([
    { name: "", description: "", transactions: [] },
  ]);

  useEffect(() => {
    async function Categories() {
      try {
        const response = await api.get("/category/categories");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    Categories();
  }, []);
  /*}
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }
*/

  return (
    <div className="container-fluid mt-5">
      <div>
        <h2>Categories</h2>
      </div>

      <div className="d-flex p-3 flex-column mb-10 ">
        <div className="card-body">
          <Link to="/create" className="btn btn-primary">
            Create Category
          </Link>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>

        {data.map((current) => {
          return (
            <div className="container mb-5" key={current.name}>
              <div className="row mb-3 p-4 align-items-center">
                <div className="col-3">
                  <strong>{current.code}</strong>
                </div>
                <div className="col-7">{current.description}</div>
                <div className="col-1">
                  <Link
                    to={`/edit-delete/${current._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                </div>
                <div className="col-10 ">{current.description}</div>
                <div className="col-1">
                  <Link
                    to={`/details/${current._id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
                <div className="col-1">
                  <Link
                    to={`/delete/${current._id}`}
                    className="btn btn-primary"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
