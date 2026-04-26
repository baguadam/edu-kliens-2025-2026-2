import { configureStore } from "@reduxjs/toolkit";

interface State {
  count: number;
  name: string;
}

const INITIAL_STATE = {
  count: 0,
  name: "Counter",
};

const haikuReducer = (state: State = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "INCREMENT_COUNT":
      return { ...state, count: state.count + payload };
    case "MODIFY_NAME":
      return { ...state, name: payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: haikuReducer,
});
