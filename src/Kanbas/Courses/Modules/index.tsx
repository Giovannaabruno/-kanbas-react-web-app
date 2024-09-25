export default function Modules() {
    return (
        <div>
            <button id="collapse-all-btn" type="button">
                Collapse All
            </button>
            &nbsp;
            <button id="view-progress-btn" type="button">
                View Progress
            </button>
            &nbsp;
            <select id="options-btn"  >
                <option value="Publish-All">Publish All</option>
                <option value="Delete-All">Delete All</option>
                <option value="Add-All">Add All</option>
            </select>
            &nbsp;
            <button id="module-btn" type="button">
                + Module
            </button>
            &nbsp;
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">

                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                            <li className="wd-title" >READING</li>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                            </ul>


                            <li className="wd-title">SLIDES</li>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>

                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2, Lecture</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces HTML</li>
                                <li className="wd-content-item">Deploy the assigment</li>
                            </ul>

                            <li className="wd-title">SLIDES</li>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Fromatting Web content with Heading and</li>
                                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

