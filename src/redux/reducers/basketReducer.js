import { DELETE_PIZZA_BASKET, SET_PIZZA_BASKET } from "../ActionTypes";

const initialStateBasket = {
    pending: true,
    data: JSON.parse(localStorage.getItem("basket")) || [],
}

export const basketReducer = (state = initialStateBasket, action) => {
    switch(action.type) {
        case SET_PIZZA_BASKET:
            return { ...state, data: [ ...state.data, action.payload ] }
        case DELETE_PIZZA_BASKET:
            return { ...state, data: state.data.filter( (item) => item.id !== action.id ) }
        default:
            return state;
    }
}
