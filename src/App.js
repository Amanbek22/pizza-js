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

const PrivateRoute = ({ Component, isAuth }) => {
  return isAuth ? <Component /> : <Navigate to="/admin" />;
};
const PublickRoute = ({ Component, isAuth }) => {
  return !isAuth ? <Component /> : <Navigate to="/dashboard" />;
};

function App() {
  const [_, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("auth"))
  );
  const removeFromBasket = (id) => {
    const arr = _.filter((el) => el.id !== id);
    setBasket(arr);
  };

  const addNewPizza = (newPizza) => {
    console.log(newPizza);
    // TODO: rewrite to redux logic
    // setPizzas([...pizzas, newPizza]);
  };

  useEffect(() => {
    Api.getAllPizzaMock().then((res) => {
      // setPizzas(res.data.data.data);
      // setPizzas(res.data);
      dispatch( { type: "SET_ALL_PIZZA", payload: res.data } )
    });

    // fetch(baseUrl + "pizza")
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data))
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(_));
  }, [_]);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Header removeFromBasket={removeFromBasket} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/admin"
            element={
              <PublickRoute
                Component={() => <Admin setAuth={setIsAuth} />}
                isAuth={isAuth}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                Component={() => (
                  <Dashboard setAuth={setIsAuth} />
                )}
                isAuth={isAuth}
              />
            }
          />
          <Route
            path="/create-pizza"
            element={
              <PrivateRoute
                Component={() => <CreatePizza addNewPizza={addNewPizza} />}
                isAuth={isAuth}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
