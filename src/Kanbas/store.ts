import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import { assignments, enrollments } from "./Database";
import assignmentsReducer from "./Courses/Assigments/reducer";
import enrollmentsReducer from "./Courses/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer
  },
});
export default store;
