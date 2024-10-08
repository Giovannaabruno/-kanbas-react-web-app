import { Link } from "react-router-dom";
export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation">
            <li><a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br /></li>
            <li><Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br /></li>
            <li><Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br /></li>
            <li><Link to="/Kanbas/Dashboard" id="wd-course-link">Courses</Link><br /></li>
            <li><Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br /></li>
            <li><Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br /></li>
            <li><Link to="/Labs" id="wd-labs-link">Labs</Link><br /></li>
            <li><Link to="/Kanbas/Settings" id="wd-inbox-link">Settings</Link><br /></li>
            <li><Link to="/Kanbas/ToDo" id="wd-labs-link">ToDo</Link><br /></li>
        </div>
    );
}

