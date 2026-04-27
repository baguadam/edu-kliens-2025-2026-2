import { createSlice } from "@reduxjs/toolkit";

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
export const selectEditor = (state: InitialState) => state.editor;
export const selectHaikus = (state: InitialState) => state.haikus;
export const selectIndex = (state: InitialState) => state.selectedIndex;

// reducer
export default haikuSlice.reducer;
