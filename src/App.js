import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/dashboard/Dashboard";
import HomePage from "./pages/homePage/HomePage";
import Api from "./api/Api";
import CreatePizza from "./pages/createPizza/CreatePizza";

const PrivateRoute = ({ Component, isAuth }) => {
  return isAuth ? <Component /> : <Navigate to="/admin" />;
};
const PublickRoute = ({ Component, isAuth }) => {
  return !isAuth ? <Component /> : <Navigate to="/dashboard" />;
};

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("auth"))
  );

  const addToBasket = (pizza) => {
    setBasket([...basket, pizza]);
  };

  const removeFromBasket = (id) => {
    const arr = basket.filter((el) => el.id !== id);
    setBasket(arr);
  };

  const addNewPizza = (newPizza) => {
    console.log(newPizza);
    setPizzas([...pizzas, newPizza]);
  };

  useEffect(() => {
    Api.getAllPizza().then((res) => {
      setPizzas(res.data.data.data);
    });

    // fetch(baseUrl + "pizza")
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data))
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Header removeFromBasket={removeFromBasket} basket={basket} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage pizzas={pizzas} addToBasket={addToBasket} />}
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
                Component={() => <Dashboard pizzas={pizzas} setAuth={setIsAuth} />}
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
