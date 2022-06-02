import { createStore, combineReducers } from "redux";

// const reducer = (state = { count: 0 }, action) => {
//     switch(action.type) {
//         case "PLUS":
//             return {count: state.count + 1 }
//         case "MINUS":
//             return {count: state.count - 1 }
//         default:
//             return state 
//     }
// }

const initialState = {
    pending: true,
    data: [],
}
const pizzaReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_ALL_PIZZA":
            return { ...state, data: action.payload  }
        default:
            return state;
    }
}


const initialStateBasket = {
    pending: true,
    data: JSON.parse(localStorage.getItem("basket")) || [],
}
const basketReducer = (state = initialStateBasket, action) => {
    switch(action.type) {
        case "SET_PIZZA_BASKET":
            return { ...state, data: [ ...state.data, action.payload ] }
        default:
            return state;
    }
}


const reducers = combineReducers({
    pizzas: pizzaReducer,
    basket: basketReducer,
});


export const store = createStore(reducers)

window.store = store;