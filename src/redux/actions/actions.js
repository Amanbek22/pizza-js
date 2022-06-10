import {
  SET_ALL_PIZZA,
  SET_AUTH,
  SET_LOGOUT,
  SET_PIZZA_BASKET,
  DELETE_PIZZA_BASKET,
} from "../ActionTypes";
import Api from "../../api/Api";

export const setAllPizzasAC = (payload) => ({
  type: SET_ALL_PIZZA,
  payload,
});

export const setPizzaBasket = (payload) => ({
  type: SET_PIZZA_BASKET,
  payload,
});

export const setAuthAC = (payload) => ({
  type: SET_AUTH,
  payload,
});

export const setLogoutAC = () => ({
  type: SET_LOGOUT,
});

export const deletePizzaBasketAC = (id) => ({
  type: DELETE_PIZZA_BASKET,
  id,
});

export const getAllPizzaAC = () => {
  return (dispatch) => {

    Api.getAllPizzaMock().then((res) => {
      dispatch(setAllPizzasAC(res.data));
    });
  };
};
