import React from "react";
import Pizzacard from "../../components/pizzaCard/Pizzacard";
import css from "./Dashboard.module.css";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
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
        {props.pizzas.map((item) => (
          <Pizzacard isAdmin={true} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
