import { createSlice } from "@reduxjs/toolkit";

interface UserslicesTypes {
  token: string;
}
const UsersSlice = createSlice({
  name: "Users",
  initialState: {
    token:
      typeof window !== "undefined" ? localStorage.getItem("token") || "" : "",
  } as UserslicesTypes,
  reducers: {
    getthetoken: (state, action) => {
      state.token = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload);
      }
    },

    removethetoken: (state) => {
      state.token = "";
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { getthetoken, removethetoken } = UsersSlice.actions;

export default UsersSlice.reducer;
