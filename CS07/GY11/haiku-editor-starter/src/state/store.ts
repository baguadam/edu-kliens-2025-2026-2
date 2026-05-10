import { configureStore } from "@reduxjs/toolkit";
import haikuReducer from "../features/haiku/haikuSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    haiku: haikuReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
