import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: [],
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action)=>{

      state.enrollments = action.payload;
    },
    enroll: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenroll: (state, { payload: [courseId, userId] }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e.course !== courseId || e.user !== userId);
    },
  
  },
});
export const { enroll, unenroll, setEnrollments } =
enrollmentSlice.actions;
export default enrollmentSlice.reducer;