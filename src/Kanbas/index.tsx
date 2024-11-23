import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Settings from "./Settings";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);
  
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
      };
    
    const deleteCourse = async(courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        await courseClient.updateCourse(course);

        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    const { enrollments } = useSelector((state: any)=>state.enrollmentsReducer);


    const [isEnrollment, setIsEnrollment] = useState(false);
    // useEffect(()=>{
    //     const filteredCourses = isEnrollment? db.courses:db.courses.filter((course) =>
    //         enrollments.some(
    //             (enrollment: any) =>
    //                 enrollment.user === currentUser?._id &&
    //                 enrollment.course === course._id
    //         ));
    //         setCourses(filteredCourses);
    // }, [isEnrollment, enrollments, currentUser]);
    return (
        <Session>
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<ProtectedRoute><Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} 
                        isEnrollment={isEnrollment}
                        setIsEnrollment={setIsEnrollment}

                        />
                    </ProtectedRoute> } />
                    <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    <Route path="/ToDo" element={<ToDo />} />
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
        </Session>
    );
}

