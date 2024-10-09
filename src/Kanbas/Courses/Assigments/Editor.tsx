import { BiCalendar } from "react-icons/bi";
import BootstrapForms from "../../../Labs/Lab2/BootstrapForms";

export default function AssignmentEditor() {
    return (
        <div id="assignment">
            <h4><label htmlFor="wd-name">Assignment Name</label></h4>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }} id="wd-assignments-editor  d-flex flex-column align-items-end">
                <input type="assignment" className="mb-4 form-control"
                    id="wd-name" placeholder="A1" />
                
                <div className="mb-4 border border-secondary rounded p-3" id="wd-description"  >
                    The assignment is <span style={{ color: "red" }}>Multiple Modules</span>
                    <ul></ul>
                    Submit a link to the landing page of your Web application running on Netlify.
                    <ul></ul>
                    The landing page should include the following:
                    <ul>
                        <li>your full name and section</li>

                        <li>Link to each of the lab assignments </li>

                        <li>Link to the Kanbas application </li>

                        <li> Links to all relevant source code repositories </li>
                    </ul>
                    The Kanbas application should include a link to navigate back to the landing page.
                </div>

                <table >
                    
                    <tr className="mb-4" >
                        <td align="right" valign="top">

                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input   type="points" className="mb-4 w-100 form-control"
                                id="wd-points" placeholder="A1" />

                        </td>


                    </tr>
                    
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assignment-group">Assignment Group</label> 
                        </td>

                        <td>
                            <select id="wd-css-styling-assignment-group" className="w-100 mb-4 form-select">
                                <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                                <option value="GROUP 1" >GROUP 1</option>
                                <option value="GROUP 2"> GROUP 2</option>
                                <option value="GROUP 3"> GROUP 3</option>
                            </select>

                        </td>
                    </tr>

                    

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-css-styling-display-grade-as">Display Grade as</label> 
                        </td>
                        <td>
                            <select id="wd-css-styling-display-grade-as" className="w-100 mb-4 form-select">
                                <option value="Percentage" selected>Percentage</option>
                                <option value="0%">0%</option>
                                <option value="10%">10%</option>
                                <option value="20%">20%</option>
                                <option value="30%">30%</option>
                                <option value="40%">40%</option>
                                <option value="50%">50%</option>
                                <option value="60%">60%</option>
                                <option value="70%">70%</option>
                                <option value="80%">80%</option>
                                <option value="90%">90%</option>
                                <option value="100%">100%</option>
                            </select>

                        </td>
                    </tr>
                    


                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-css-styling-submission-type">Submission Type</label> 
                        </td>

                        <td>
                            <div className="border  rounded p-3" id="wd-select">
                                <select id="wd-css-styling-submission-type" className="mb-4 w-100 h-100 form-select">
                                    <option value="Online" selected>Online</option>
                                    <option value="File">File</option>
                                    <option value="Text">Text</option>
                                    <option value="Paper">Paper</option>
                                </select>

                                <td></td>

                                <td>
                                    
                                    <label className="mb-4" id="wd-css-styling-checkboxes"><strong>Online Entry Options</strong></label>
                                    

                                    <div className="mb-3 form-check" >
                                        <label htmlFor="wd-text-entry">Text Entry</label>
                                        <input type="checkbox" className=" mb-4 form-check-input" name="check-genre" id="wd-text-entry" />

                                    </div>


                                    <div className="mb-3 form-check" >
                                        <label htmlFor="wd-website-url">Website URL</label>
                                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-website-url" />
                                    </div>

                                    <div className="mb-3 form-check" >
                                        <label htmlFor="wd-chkbox-Media-Recordings">Media Recordings</label>
                                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-chkbox-Media-Recordings" />
                                        </div>

                                    <div className="mb-3 form-check" >
                                    <label htmlFor="wd-chkbox-Student-Annotation">Student Annotation</label>
                                        <input type="checkbox"className="form-check-input" name="check-genre" id="wd-chkbox-Student-Annotation" />
                                       
                                        </div>
                                        <div className="mb-3 form-check" >
                                        <label htmlFor="wd-chkbox-File-Update">File Update</label>
                                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-chkbox-File-Update" />
                                     
                                        </div>
                                </td>
                            </div>
                        </td>
                    </tr>
                    <br />

                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assign-to">Assign </label>&nbsp;
                        </td>
                        <td className="border p-3 rounded">


                            <table>
                                <tr>

                                    <td colSpan={2}>
                                        <label className="input-group"><strong>Assign to  </strong> 


                                            <input type="text" className="mb-4 w-100 form-control"
                                                id="wd-assign-to" defaultValue="Everyone" />
                                            
                                        </label>
                                    </td>
                                </tr>




                                <tr>
                                    <td colSpan={2}>
                                        <strong>Due</strong>
                                        <label className="mb-4 input-group" htmlFor="wd-css-styling-due-date">
                                            <input type="" className="form-control"
                                                id="wd-due-date"
                                                value="May 13,2024,11:59 PM" />

                                            <span className="input-group-text">
                                                <BiCalendar />
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td>
                                        <strong>Available from</strong> <br />
                                        <label htmlFor="wd-available-from" className="input-group" >
                                            <input type="" className=" form-control" id="wd-css-styling-available-from" value="2 May 6, 2024, 12:00 PM" />
                                            <span className="input-group-text">
                                                <BiCalendar />
                                            </span>
                                        </label>
                                    </td>
                                    <td>
                                        <strong>Available from</strong> <br />
                                        <label htmlFor="wd-available-from" className="input-group" >
                                            <input type="" className=" form-control" id="wd-css-styling-available-from" value="" />
                                            <span className="input-group-text">
                                                <BiCalendar />
                                            </span>
                                        </label>

                                    </td>
                                </tr>
                            </table>

                        </td>


                        <td align="right" valign="top">
                            <label htmlFor=""></label>
                        </td>

                    </tr>

                    <tr><td colSpan={2}><hr /></td></tr>

                    <tr><td></td><td align="right"><button className="btn btn-md btn-secondary me-2">
                        Cancel</button> <button className="btn btn-danger ">Save</button></td>
                    </tr>



                </table>
            </div>


        </div>

    );

}

