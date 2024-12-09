
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enroll, setEnrollments, unenroll } from "./Courses/reducer";
import * as coursesClient from "../Kanbas/Courses/client";
import * as enrollmentsClient from "./Courses/clientEnrollments";

export default function Dashboard(
    { courses, course, setCourse, updateEnrollment, addNewCourse,
        deleteCourse, updateCourse, enrolling, setEnrolling }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            updateEnrollment: (courseId: string, enrolled: boolean) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
            enrolling: boolean; setEnrolling: (enrolling: boolean) => void;



        }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const [isEnroll, setIsEnroll] = useState(true);
    const dispatch = useDispatch();


    const fetchEnrollments = async () => {
        const enrollments = await coursesClient.fetchAllEnrollments();
        dispatch(setEnrollments(enrollments));
    };
    useEffect(() => {
        fetchEnrollments();
    }, []);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />


            <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                {enrolling ? "My Courses" : "All Courses"}
            </button>

            {currentUser.role === 'FACULTY' &&
                (<div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>

                    </h5>

                    <br />
                    <input defaultValue={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea defaultValue={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />

                </div>)}
            <hr />

            {/* {currentUser.role === 'STUDENT' &&
                (<button className="btn btn-primary float-end me-2"
                    onClick={() => setIsEnrollment(!isEnrollment)} id="wd-update-course-click">
                    Enrollments
                </button>)} */}

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses

                        .map((course) => (

                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                        to={`/Kanbas/Courses/${course._id}/Home`} >
                                        <img src="/images/1718387290197.jpeg" width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                          
                                                {enrolling && (
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);
                                                    }}
                                                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}

                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>

                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary" >
                                                Go  </button>
                                            {currentUser.role === 'FACULTY' &&
                                                (<>
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                    </button>
                                                    <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();


                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end" >
                                                        Edit
                                                    </button>
                                                </>)
                                            }
{/* 
                                            {(currentUser.role === 'STUDENT') &&
                                                (<>
                                                    {enrollments.some(
                                                        (enrollment: any) =>
                                                            enrollment.user === currentUser?._id &&
                                                            enrollment.course === course._id
                                                    ) ? (<button id="wd-edit-course-click"
                                                        onClick={async (event) => {
                                                            event.preventDefault();
                                                            await enrollmentsClient.unenroll(course?._id, currentUser?._id)

                                                            dispatch(unenroll([course?._id, currentUser?._id]));
                                                        }}
                                                        className="btn btn-danger me-2 float-end" >
                                                        Unenroll
                                                    </button>
                                                    ) : (<button

                                                        onClick={async (event) => {
                                                            const enrollment = { course: course?._id, user: currentUser?._id };
                                                            event.preventDefault();
                                                            await enrollmentsClient.enroll(enrollment)
                                                            dispatch(enroll(enrollment));
                                                        }}

                                                        className="btn btn-success float-end"
                                                        id="wd-delete-course-click">
                                                        Enroll
                                                    </button>
                                                    )}
                                                </>)
                                            } */}

                                        </div><br></br>
                                    </Link>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </div>
    );
}

