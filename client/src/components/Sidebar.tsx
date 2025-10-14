import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light border-end p-3" style={{ width: "220px", minHeight: "calc(100vh - 56px)" }}>
      <h5 className="mb-3">Sections</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/section1">
            Section 1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/section2">
            Section 2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/section3">
            Section 3
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/section4">
            Section 4
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
