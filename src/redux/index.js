import { createStore, combineReducers } from "redux";
import { pizzaReducer } from "./reducers/pizzasReducer";
import { basketReducer } from "./reducers/basketReducer";
import { authReducer } from "./reducers/authReducer";

const reducers = combineReducers({
    pizzas: pizzaReducer,
    basket: basketReducer,
    auth: authReducer,
});


export const store = createStore(reducers)

store.subscribe( () => {
    const redux = store.getState();

    console.log(redux);
    localStorage.setItem("basket", JSON.stringify( redux.basket.data ))
    localStorage.setItem("pizzas", JSON.stringify( redux.pizzas.data ))
    localStorage.setItem("auth", JSON.stringify( redux.auth.data ))

} );

window.store = store;