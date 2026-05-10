import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../state/store";

interface InitialState {
  user: string | null;
  token: string | null;
}

const initialState: InitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// actions
export const { login, logout } = authSlice.actions;

// selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

// reducert
export default authSlice.reducer;
