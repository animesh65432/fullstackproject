import { createSlice } from "@reduxjs/toolkit";

const CreateTask = createSlice({
  name: "Task",
  initialState: {
    CreateTask: false,
    taskname: "",
    hasname: false,
  },
  reducers: {
    ontoogole: (state) => {
      state.CreateTask = !state.CreateTask;
    },
    onseethefromwithname: (state, action) => {
      state.taskname = action.payload;
      state.hasname = true;
    },
    ondeletethefromwithname: (state) => {
      state.taskname = "";
      state.hasname = false;
    },
  },
});

export const { ontoogole, onseethefromwithname, ondeletethefromwithname } =
  CreateTask.actions;

export default CreateTask.reducer;
