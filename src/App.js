//TEMPLATES IMPORTS
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import "./app.css";

//IMPORTS

import { LoginAdriano } from "./pages/login copy/login";
import { UploadCSV } from "./pages/UploadCSV";

import { Create } from "./pages/Category/Create";
import { Edit } from "./pages/Category/Edit";
import { Delete } from "./pages/Category/Delete";
import { PageCategory } from "./pages/Category/PageCategory";

import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginAdriano" element={<LoginAdriano />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload-csv" element={<UploadCSV />} />
          <Route path="/page-category" element={<PageCategory />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit-delete/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
