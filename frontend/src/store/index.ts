import { configureStore } from "@reduxjs/toolkit";
import Users from "./Slices/Users";
import CreateTask from "./Slices/CreateTask";
import Task from "./Slices/Tasks";
const Store = configureStore({
  reducer: {
    Users,
    CreateTask,
    Task,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
