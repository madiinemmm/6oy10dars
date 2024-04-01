import { useState, useContext, createContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home'
import Details from './pages/Details'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'

export const UserContext = createContext();

function App() {
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [])


  // function ProtectedRoute({children, isAuthenticated, redirectTo = "/login"}) {
  //   if (!isAuthenticated) {
  //     navigate(redirectTo);
  //   }

  //   return children;
  // }

  function ProtectedRoute({ children}) {
    const isAuthenticated = token ? true : false;

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);


    return isAuthenticated ? children : null;
  }

  return (
    <>
      <Routes>
        {/* Public routes */}

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        {/* Private routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={token ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          } 
        ></Route>

        <Route
          path="/details"
          element={
            <ProtectedRoute isAuthenticated={token ? true : false}>
              <Details></Details>
            </ProtectedRoute>
          }
        ></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
