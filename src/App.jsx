import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useContext, useRef, createContext, useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
function App() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  function ProtectedRoute({ children }) {
    const isAuthenticated = token ? true : false;
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated ? children : null]);
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={token ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
