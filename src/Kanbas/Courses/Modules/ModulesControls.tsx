import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoWarning } from "react-icons/io5";
import { FaBan } from 'react-icons/fa';


export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All</button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items</a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only</a>
          </li>
          {/* new adds:Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
          <li>  
          
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              <FaBan  className=" me-1 fs-6"/>
                Unpublish all modules and items </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              <FaBan className=" me-1 fs-6" />
               Unpublish modules only </a>
          </li>
        </ul>
      </div>
      {/* Impleme-progress and wd-collapse-all nt the View Progress and Collapse All buttons with IDs wd-view*/}
     
      <button id="wd-collapse-all" type="button" className="btn btn-lg btn-secondary me-1 float-end">
       
        Collapse All</button>
      <button id="wd-view-progress" type="button" className="btn btn-lg btn-secondary me-1 float-end">
       
        View Progress</button>
    </div>
  );
}

