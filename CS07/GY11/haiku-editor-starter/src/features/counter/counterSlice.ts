import { createSlice } from "@reduxjs/toolkit";

interface IntialState {
  counterValue: number;
}

const initialState: IntialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// reducer
export default counterSlice.reducer;
