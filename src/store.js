// store.js
import { createStore } from "redux";

// Initial state
const initialState = {
  selectedCity: null,
  login: false,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CITY":
      return { ...state, selectedCity: action.payload };
    case "LOGGED_IN":
      return { ...state, login: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
