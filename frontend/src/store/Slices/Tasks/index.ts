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
    getthealltodostask: (state, action) => {
      state.Todo = action.payload;
    },

    gettheinprogress: (state, action) => {
      state.Inprogress = action.payload;
    },

    getheunderreviews: (state, action) => {
      state.UnderReviews = action.payload;
    },
  },
});

export const {
  getheallfiniehdetasks,
  getthealltodostask,
  getheunderreviews,
  gettheinprogress,
} = TaskSlices.actions;

export default TaskSlices.reducer;
