import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BsGripVertical } from "react-icons/bs";
import { FaClipboard, FaEdit, FaSearch } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdEditDocument } from 'react-icons/md';
import { FaCaretDown } from 'react-icons/fa';
import * as db from "../../Database"
import { useParams, useSearchParams } from "react-router-dom";

export default function Assignments() {
    const {cid} = useParams();
    const assigments = db.assignments;
    return (
        <div id="wd-assignments">
            <div className="wd-flex-row-container justify-content-between">
                <div className="input-group mb-3 w-50">
                    <span className="input-group-text border-right-none" >
                        <FaSearch />
                    </span>
                    <input
                        type="search"
                        id="wd-search-assignment"
                        placeholder="Search..."
                        className="form-control"
                    />
                </div>

                <div>
                    <button id="wd-add-assignment-group"
                        className="btn btn-md btn-secondary me-2"><FaPlus /> Group

                    </button>

                    <button id="wd--css-style-add-assignment"
                        className="btn btn-md btn-danger"><FaPlus /> Assignment</button>

                </div>
            </div>

            <ul className="list-group rounded-0">

                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-assignments-title"

                        className="d-flex justify-content-between wd-title p-3 ps-2 bg-secondary">

                        <h3 >

                            <BsGripVertical className="me-2 fs-3" /> <FaCaretDown />ASSIGNMENTS
                        </h3>
                        <span > <small className="border rounded-pill  border-dark  p-2">40% of Total</small> <FaPlus /> <IoEllipsisVertical className="fs-4" /></span>

                    </div>


                    <ul id="wd-assignment-list" className="wd-lesson list-group rounded-0">
                        
                        {assigments
                        .filter((assignment: any)=>assignment.course === cid)
                        .map((assignment: any, indx) =>(
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">


                            <div className="d-flex justify-content-between align-items-center gap-4">
                                <span><BsGripVertical className="me-2 fs-3" /> </span>
                                <a className="wd-assignment-link"
                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                    <MdEditDocument style={{ color: 'green' }} />
                                </a>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <h3><strong>{"A" +(indx+ 1)}</strong></h3>
                                    <div className="d-flex">
                                        <span>
                                            <span style={{ color: "red" }}>Multiple Modules</span> | <strong>Not available until</strong> {assignment.available_date} | <strong>Due</strong> {assignment.due_date} | {assignment.points} pts </span>


                                    </div>
                                </div>
                                <span><GreenCheckmark /></span>
                                <span><IoEllipsisVertical className="fs-4" /></span>

                            </div>
                        </li>
                    ))}
                 
                    </ul>
                </li>
            </ul >
        </div >
    );
}

