import { configureStore } from "@reduxjs/toolkit";

interface ReducerType {
  editor: string;
  selectedIndex: number | null;
  haikus: string[];
}

const INITIAL_STATE = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
   Mint hajnali fényt éjjel
   Félve-remélve`,
  ],
};

const haikuReducer = (state: ReducerType = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_EDITOR":
      return { ...state, editor: action.payload };
    case "ADD_HAIKU":
      return { ...state, haikus: [...state.haikus, action.payload] };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: haikuReducer,
});
