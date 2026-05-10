import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../state/store";

export interface InitialState {
  editor: string;
  selectedIndex: number | null;
  haikus: string[];
}

const INITIAL_STATE: InitialState = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
   Mint hajnali fényt éjjel
   Félve-remélve`,
  ],
};

// slice
const haikuSlice = createSlice({
  name: "haiku",
  initialState: INITIAL_STATE,
  reducers: {
    changeEditorSlice: (state, action) => {
      state.editor = action.payload;
    },
    addHaikuSlice: (state, action) => {
      state.haikus.push(action.payload);
    },
    changeIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

// actions
export const { changeEditorSlice, addHaikuSlice, changeIndex } =
  haikuSlice.actions;

// selector
export const selectEditor = (state: RootState) => state.haiku.editor;
export const selectHaikus = (state: RootState) => state.haiku.haikus;
export const selectIndex = (state: RootState) => state.haiku.selectedIndex;

// reducer
export default haikuSlice.reducer;
