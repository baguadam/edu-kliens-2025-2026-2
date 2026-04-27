import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export interface HaikuState {
  editor: string;
  selectedIndex: number | null;
  haikus: string[];
}

const INITIAL_STATE: HaikuState = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
   Mint hajnali fényt éjjel
   Félve-remélve`,
  ],
};

// actions
export const changeEditor = createAction<string>("haiku/changeEditor");
export const addHaiku = createAction<string>("haiku/add");
export const selectHaiku = createAction<number>("haiku/select");

// reducer
const haikuReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeEditor, (state, action) => {
      state.editor = action.payload;
    })
    .addCase(addHaiku, (state, action) => {
      state.haikus.push(action.payload);
    })
    .addCase(selectHaiku, (state, action) => {
      state.selectedIndex = action.payload;
    });
});

// store
export const haikuStore = configureStore({
  reducer: haikuReducer,
});

// selector
export const selectEditor = (state: HaikuState) => state.editor;
export const selectHaikus = (state: HaikuState) => state.haikus;
export const selectSelectedIndex = (state: HaikuState) => state.selectedIndex;
