import { configureStore } from "@reduxjs/toolkit";
import Users from "./Slices/Users";
const Store = configureStore({
  reducer: {
    Users,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
