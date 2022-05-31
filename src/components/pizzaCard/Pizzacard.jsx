/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import Api from './../../api/Api';

export default function Pizzacard({
  name,
  price,
  info,
  image,
  id,
  addToBasket,
  isAdmin,
  ...props
}) {
  const onDelete = () => {
    // api.delete("pizza/" + id)
    Api.deletePizza(id)
      .then(() => {
        alert("Вы удалили эту пиццу!")
        window.location.reload()
      })
  }
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{info}</p>
          <h5 className="card-title">{price}сом</h5>
          {isAdmin ? (
            <div>
              <button className="btn btn-warning">Change</button>
              <button onClick={onDelete} className="btn btn-danger">Delete</button>
            </div>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                addToBasket({ name, price, info, image, id });
              }}
            >
              Выбрать
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
