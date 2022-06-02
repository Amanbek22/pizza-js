import React from "react";
import Pizzacard from "../../components/pizzaCard/Pizzacard";
import css from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard(props) {
  const pizzas = useSelector( (state) => state.pizzas.data )
  const logout = () => {
    props.setAuth(null)
  }
  return (
    <div>
      <button onClick={logout} className="btn btn-danger mt-5">Выйти</button>
      <div className={css.wrapper}>
        <Link to="/create-pizza" className={css.addBtn}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            alt=""
          />
        </Link>
        {pizzas.map((item) => (
          <Pizzacard isAdmin={true} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
