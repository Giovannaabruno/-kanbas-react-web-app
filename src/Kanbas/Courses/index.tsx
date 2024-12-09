import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Assignments from "./Assigments";
import AssignmentEditor from "./Assigments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quiz";
import { useEffect, useState } from "react";
import * as courseClient from './client';

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const [users, setUsers] = useState<any>([]);
  const { pathname } = useLocation();
const fetchUsers = async()=>{
    if(!cid) return ;
  const users = await courseClient.findUsersForCourse(cid);
  setUsers(users);
}
  useEffect(()=>{
    fetchUsers();

  })
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}

      </h2> <hr />
      <div className="d-flex justify-content-around">
        <div className="d-none d-lg-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div></div>
    </div>
  );
}
