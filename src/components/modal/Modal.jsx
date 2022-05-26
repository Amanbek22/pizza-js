import React from "react";
import css from "./Modal.module.css";

const BasketCard = (props) => {
  return (
    <div className={css.basket_card}>
      <div className={css.card_info}>
        <img src={props.image} alt="" />
        <div>
          <p>{props.name}</p>
          <div title={props.info} className={css.card_description}>
            {props.info}
          </div>
        </div>
      </div>
      <hr />
      <div className={css.info}>
        <p>{props.price}сом</p>
        <button className={css.delete} onClick={() => props.remove(props.id)}>Удалить</button>
      </div>
    </div>
  );
};

export default function Modal(props) {
  const totalBalance = props.basket.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <div
      onClick={() => {
        props.setIsModal(false);
      }}
      className={`${css.wrapper} ${props.isModal ? css.active : ""}`}
    >
      <div className={css.basket} onClick={(e) => e.stopPropagation()}>
        {props.basket.length ? (
          <>
            <h2 className={css.header}>
              {props.basket.length} товар на {totalBalance} сом
            </h2>

            <div className={css.list}>
              {props.basket.map((el) => (
                <BasketCard key={el.id} {...el} remove={props.remove} />
              ))}
            </div>

            <div className={css.footer}>
              <input
                type="text"
                className={css.promokod}
                placeholder="Промокод"
              />

              <div className={css.info}>
                <p>{props.basket.length} товар</p>
                <p>{totalBalance}сом</p>
              </div>
              <div className={css.info}>
                <p>Начислим солидкоины</p>
                <p>+30</p>
              </div>
              <hr />

              <div className={css.info}>
                <div>Сумма заказа</div>
                <div>{totalBalance}сом</div>
              </div>
              <button className={css.btn}>К оформлению заказа</button>
            </div>
          </>
        ) : (
          <img
            src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
            alt=""
          />
        )}
      </div>
    </div>
  );
}
