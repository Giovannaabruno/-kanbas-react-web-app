
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/1718387290197.jpeg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary" > Go  </button>
                                </div><br></br>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/images (4).jpeg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 4530 Fundamentals of Sofware Engineering
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div> <br></br>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/ManusVR_Glove_2016.png" width="100%" height={160} />

                                <div className="card-body">

                                    <h5 className="wd-dashboard-course-title card-title">
                                        AF 2000 introduction to Immersive Media
                                    </h5>
                                    <p className="wd-dashboard-course-title">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div><br></br>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/LVdhWpiU7rtP6OU.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-text">
                                        CS 4550 Web Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link><br></br>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/images.jpeg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MKTG 3402 Gaining insight from Consumer Data Marketing</h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div><br></br>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/images(1).jpeg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 4520 Mobile Application Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div><br></br>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/1115366_Thumb_400.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        IS 4300 Human-Computer Interaction
                                    </h5>
                                    <p className="wd-dashboard-course-title">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div><br></br>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

