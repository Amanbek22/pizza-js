import { SET_AUTH, SET_LOGOUT } from "../ActionTypes";

const initialState = {
  pending: false,
  data: JSON.parse(localStorage.getItem("auth")),
};

export const authReducer = (state = initialState, action) => {
  debugger;
 
 
  switch (action.type) {
    case SET_AUTH:
      return { ...state, data: action.payload };
    case SET_LOGOUT:
        return {...state, data: null}
    default:
      return state;
  }
};
