import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case "PLUS":
            return {count: state.count + 1 }
        case "MINUS":
            return {count: state.count - 1 }
        default:
            return state 
    }
}

export const store = createStore(reducer)

window.store = store;