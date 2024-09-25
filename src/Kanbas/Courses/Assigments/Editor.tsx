export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h4><label htmlFor="wd-name">Assignment Name</label></h4>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={10} cols={40} >
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: your full name and section Link to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table >
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment-group">
                            <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
                            <option value="GROUP 1" >GROUP 1</option>
                            <option value="GROUP 2"> GROUP 2</option>
                        </select>

                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
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
                <br />


                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online" selected>Online</option>
                            <option value="File">File</option>
                            <option value="Text">Text</option>
                            <option value="Paper">Paper</option>
                        </select>

                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>

                    <td>
                        <label id="wd-checkboxes">Online Entry Options</label><br />


                        <input type="checkbox" name="check-genre" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-website-url" />
                        <label htmlFor="wd-website-url"></label>Website URL<br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-Media-Recordings" />
                        <label htmlFor="wd-chkbox-Media-Recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-Student-Annotation" />
                        <label htmlFor="wd-chkbox-Student-Annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-File-Update" />
                        <label htmlFor="wd-chkbox-File-Update">File Update</label><br /><br />
                    </td>
                </tr>
                <br />
          
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign </label>
                    </td>
                    <td>
                        <label>Assign to  <br />
                            <input type="text" id = "wd-assign-to" defaultValue="Everyone" />
                        </label>
                        <br/>
                        <br/>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-due-date">Due <br />
                                        <input type="date"
                                            id="wd-due-date"
                                            value="2024-05-13" />
                                    </label>
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available from <br />
                                        <input type="date" id="wd-available-from" value="2024-05-06" />
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">Until <br />
                                        <input type="date" id="wd-available-until" value="2024-05-20" />
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

                <tr><td></td><td align="right"><button>Cancel</button> <button>Save</button></td>
                </tr>



            </table>
        </div>
    );
}

