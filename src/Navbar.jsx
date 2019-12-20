import React from "react";
import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark justify-content-between">
      <a href="#" className="navbar-brand text-white mx-4">
        APPINESS
      </a>

      <div className="">
        <Link
          to={"/"}
          className="nav-link"
          style={{ float: "left", color: "white" }}
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          to={"/Dashboard"}
          className="nav-link"
          style={{ float: "left", color: "white" }}
        >
          DashBoard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
