import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import Users from "./Users";
import { useSelector } from "react-redux";
export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-account-screen">
            <table>
                <tr>
                    <td valign="top">
                        <AccountNavigation />
                    </td>
                    <td valign="top">
                        <h1>Giovanna Bruno (section 1)</h1>
                        <div>
                            <a href="https://github.com/Giovannaabruno/-kanbas-react-web-app.git">1-Kanbas github repository</a>
                        </div>
                        <div>
                            <a href="https://github.com/Giovannaabruno/PERSONAL-ACADEMIC-PROJECTS-COMPUTER-SCIENCE-PROJECTS.git">2-PERSONAL ACADEMIC PROJECTS COMPUTER SCIENCE PROJECTS github repository</a>
                        </div>
                    <h2>Account</h2>
                        <Routes>
                            <Route path="/"
                                element={<Navigate to = {currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin"} />} />
                            <Route path="/Signin" element={<Signin />} />
                            <Route path="/Profile" element={<Profile />} />
                            <Route path="/Signup" element={<Signup />} />
                            <Route path="/Users" element={<Users />} />
                            <Route path="/Users/:uid" element={<Users />} />

                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}
