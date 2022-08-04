import { createStore, combineReducers } from "redux";

const INITIAL_STATE = {
  A: "1"
};

const a = (state, action) => {
  state = state ?? INITIAL_STATE;

  return state;
};
const reducer = combineReducers({
  a
});

const store = createStore(reducer);

export { store };
