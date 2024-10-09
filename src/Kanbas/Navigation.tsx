import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineInbox,AiFillCheckCircle, AiFillTool, AiOutlineSetting } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }} // new
            className="list-group rounded-0 position-fixed overflow-auto bottom-0 top-0 d-none d-md-block bg-black z-2">

            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="images/NEU.png" width="75px" /></a><br />
            <Link to="/Kanbas/Account" id="wd-account-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-3 text text-white" /><br />
                Account </Link><br />
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                className="list-group-item text-center border-0
                   bg-white text-danger">
                <AiOutlineDashboard className="fs-3 text-danger" /><br />
                Dashboard </Link><br />
            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-3 text-danger" /><br />
                Courses </Link><br />

            <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                <AiOutlineCalendar className="fs-3 text-danger" /><br />
                Calender </Link><br />

            <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                < AiOutlineInbox className="fs-3 text-danger" /><br />
                Inbox </Link><br />

            <Link to="/Labs" id="wd-labs-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                < AiOutlineSetting className="fs-3 text-danger" /><br />
                Labs </Link><br />


            <Link to="/Kanbas/Settings" id="wd-inbox-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                < AiFillTool className="fs-3 text-danger" /><br />
                Settings </Link><br />

            <Link to="/Kanbas/ToDo" id="wd-todo-link"
                className="list-group-item text-white
                   bg-black text-center border-0">
                < AiFillCheckCircle className="fs-3 text-danger" /><br />
                ToDo </Link><br />

        </div>
    );
}

