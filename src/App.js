import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import HomePage from "./pages/homePage/HomePage";
import Api from "./api/Api";
import CreatePizza from "./pages/createPizza/CreatePizza";
import { useSelector, useDispatch } from "react-redux";
import { SET_ALL_PIZZA } from "./redux/ActionTypes";


const PrivateRoute = ({ Component }) => {
  const isAuth = useSelector( (state) => state.auth.data?.token );

  return isAuth ? <Component /> : <Navigate to="/admin" />;
};

const PublickRoute = ({ Component }) => {
  const isAuth = useSelector( (state) => state.auth.data?.token );

  return !isAuth ? <Component /> : <Navigate to="/dashboard" />;
};

function App() {
  const dispatch = useDispatch();

  const addNewPizza = (newPizza) => {
    console.log(newPizza);
    // TODO: rewrite to redux logic
    // setPizzas([...pizzas, newPizza]);
  };

  useEffect(() => {
    Api.getAllPizzaMock().then((res) => {
      dispatch( { type: SET_ALL_PIZZA, payload: res.data } )
    });
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/admin"
            element={
              <PublickRoute Component={Admin} />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute Component={Dashboard} />
            }
          />
          <Route
            path="/create-pizza"
            element={
              <PrivateRoute
                Component={() => <CreatePizza addNewPizza={addNewPizza} />}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
