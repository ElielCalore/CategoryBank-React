import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { LoggedNavbar } from "../../components/LoggedNavbar/index";

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
        if (error) {
          return toast.error("could not load categories");
        }
      }
    }
    Categories();
  }, []);

  return (
    <div>
      <LoggedNavbar />
      <div className="container-fluid mt-5">
        <Toaster />
        <div>
          <h2 className="text-center m-5">Categories</h2>
        </div>

        <div className="col-3"></div>
        <div className="col-3"></div>

        {data.map((current) => {
          return (
            <div
              className="container mb-1 border border-dark"
              key={current.code}
            >
              <div className="row mb-3 p-4 align-items-center">
                <div className="col-3">
                  <strong>CODE: </strong>
                  <p>{current.code}</p>
                </div>
                <div className="col-7">
                  <strong>DESCRIPTION: </strong>
                  <p>{current.description}</p>
                </div>
                <div class="col gap-0  mx-auto py-3 m-3">
                  <Link to={`/category/edit/${current._id}`}>
                    <button
                      class="btn btn-primary btn-lg px-3 mx-1"
                      type="button"
                    >
                      EDIT
                    </button>
                  </Link>
                  <Link to={`/category/delete/${current._id}`}>
                    <button class="btn btn-primary btn-lg px-2" type="button">
                      DELETE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex p-3 flex-column mb-10 text-center">
          <div className="card-body">
            <Link to="/category/create" className="btn btn-primary">
              <button class="btn btn-primary btn-lg px-5 mx-5" type="button">
                Create Category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
