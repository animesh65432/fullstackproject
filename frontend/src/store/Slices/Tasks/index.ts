import { createSlice } from "@reduxjs/toolkit";
import { Tasktodotypes } from "../../../types";

type TaskTypes = {
  Finshed: Tasktodotypes[];
  Todo: Tasktodotypes[];
  Inprogress: Tasktodotypes[];
  UnderReviews: Tasktodotypes[];
};

const TaskSlices = createSlice({
  name: "Task",
  initialState: {
    Finshed: [],
    Todo: [],
    Inprogress: [],
    UnderReviews: [],
  } as TaskTypes,
  reducers: {
    getheallfiniehdetasks: (state, action) => {
      state.Finshed = action.payload;
    },
    removethefinishedtask: (state) => {
      state.Finshed = [];
    },
    getthealltodostask: (state, action) => {
      state.Todo = action.payload;
    },
    reomvethetodotask: (state) => {
      state.Todo = [];
    },
    gettheinprogress: (state, action) => {
      state.Inprogress = action.payload;
    },
    removetheinprogress: (state) => {
      state.Inprogress = [];
    },
    getheunderreviews: (state, action) => {
      console.log(action.payload);
      state.UnderReviews = action.payload;
    },
    removetheunderreviews: (state) => {
      state.UnderReviews = [];
    },
  },
});

export const {
  removethefinishedtask,
  getheallfiniehdetasks,
  getthealltodostask,
  removetheinprogress,
  getheunderreviews,
  gettheinprogress,
  removetheunderreviews,
  reomvethetodotask,
} = TaskSlices.actions;

export default TaskSlices.reducer;
