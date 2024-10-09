import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex justify-content-around" id="wd-home">
            <div className="">
                <Modules />
            </div>
            <div className="d-none d-xl-block">
                <CourseStatus />
            </div>
        </div>
    );
}
