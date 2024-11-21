import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; // Adjusted path to src/styles

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>PostMaster Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/user-profile">User Profile</Link>
        </li>
        <li>
          <Link to="/alerts">Alerts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
