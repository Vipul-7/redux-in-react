import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterReducer = (state = intialState, action) => {
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.value,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
