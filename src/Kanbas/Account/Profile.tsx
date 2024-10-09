import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <input id="wd-username"
                value="alice"
                placeholder="username"
                className="form-control mb-2" />

            <input id="wd-password"
                value="123"
                placeholder="password"
                type="password"
                className="form-control mb-2" />

            <input id="wd-firstname"
                value="Alice"
                placeholder="First Name"
                className="form-control mb-2" />

            <input id="wd-lastname"
                value="Wonderland"
                placeholder="Last Name"
                className="form-control mb-2" />

            <input id="wd-dob"
                value="yyyy-dd-mm"
                type="date"
                className="form-control mb-2" />

            <input id="wd-email"
                value="alice@wonderland.com"
                type="email"
                className="form-control mb-2" />


            <input id="wd-role"
                value="User"
                type="type of user"
                className="form-control mb-2" />

            <Link id="wd-profile-btn"
                to="/Kanbas/Account/Signin"
                className="btn btn-danger w-100">
                Sign out
            </Link>
        </div>
    );
}
