import { useContext } from "react";
//import { useEffect, UseState } from "react";
//import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/authContext";
import { AuthContext } from "../../../contexts/authContext";

export function Profile() {
  // const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  // useEffect(() => {
  //   async function fetchUser() {
  //     const response = await api.get("/user/profile");
  //     setUser(response.data);
  //   }

  //   fetchUser();
  // }, []);

  const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <div className="d-flex">
        <h1>{loggedInUser.user.name}</h1>
        <p>{loggedInUser.user.email}</p>
        <button onClick={handleLogOut}>Sair</button>
      </div>
    </>
  );
}
