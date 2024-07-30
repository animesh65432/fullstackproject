import { configureStore } from "@reduxjs/toolkit";
import Users from "./Slices/Users";
import CreateTask from "./Slices/CreateTask";
const Store = configureStore({
  reducer: {
    Users,
    CreateTask,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
