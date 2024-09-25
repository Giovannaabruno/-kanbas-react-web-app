import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/1718387290197.jpeg" width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div><br></br>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234/Home">
                    <img src="/images/images (4).jpeg" width={200} />
                    <div>
                        <h5>CS 4530 Fundamentals of Sofware Engineering </h5>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <button> Go </button>
                    </div> <br></br>
                </Link> </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/ManusVR_Glove_2016.png" width={200} />
                        <div>
                            <h5>AF 2000 introduction to Immersive Media</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div><br></br>
                    </Link>
                </div>


                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/LVdhWpiU7rtP6OU.jpg" width={200} />
                        <div>
                            <h5>CS 4550 Web Development</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link><br></br>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/images.jpeg" width={200} />
                        <div>
                            <h5>MKTG 3402 Gaining insight from Consumer Data Marketing</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div><br></br>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/images(1).jpeg" width={200} />
                        <div>
                            <h5>CS 4520 Mobile Application Development</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div><br></br>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/1115366_Thumb_400.jpg" width={200} />
                        <div>
                            <h5>IS 4300 Human-Computer Interaction</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div><br></br>
                    </Link>
                </div>
            </div>
        </div>
    );
}

