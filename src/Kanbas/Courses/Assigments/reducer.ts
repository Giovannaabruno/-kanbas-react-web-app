import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { title } from "process";
import { MdDescription } from "react-icons/md";
const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        due_date: assignment.due_date,
        description: assignment.description,
        available_date: assignment.available_date,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assigmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assigmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentSlice.actions;
export default assignmentSlice.reducer;