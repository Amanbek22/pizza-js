import React from "react";
import css from "./CreatePizza.module.css";
import { api } from "./../../api/Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePizza({ addNewPizza }) {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleInfo = (e) => {
    setInfo(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      info: info,
      image: "",
    };
    api.post("pizza", data).then((res) => {
      console.log(res);
      addNewPizza(res.data)
      navigate("/dashboard");
    });
  };
  return (
    <form onSubmit={submit} className={css.wrapper}>
      <h2>Создать новую пиццу</h2>
      <label className={css.inputWrapper}>
        <span>Название</span>
        <input
          value={name}
          onChange={handleName}
          type="text"
          placeholder="Name"
        />
      </label>
      <label className={css.inputWrapper}>
        <span>Описание</span>
        <input
          value={info}
          onChange={handleInfo}
          type="text"
          placeholder="Description"
        />
      </label>
      <label className={css.inputWrapper}>
        <span>Цена</span>
        <input
          value={price}
          onChange={handlePrice}
          type="number"
          placeholder="Price"
        />
      </label>
      {/* <input type="file" /> */}
      <button className="btn btn-success w-100 mt-5">+Создать</button>
    </form>
  );
}
