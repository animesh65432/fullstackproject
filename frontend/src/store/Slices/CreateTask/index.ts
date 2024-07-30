import { createSlice } from "@reduxjs/toolkit";

const CreateTask = createSlice({
  name: "Task",
  initialState: {
    CreateTask: false,
  },
  reducers: {
    ontoogole: (state) => {
      state.CreateTask = !state.CreateTask;
    },
  },
});

export const { ontoogole } = CreateTask.actions;

export default CreateTask.reducer;
