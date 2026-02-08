import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        {/* Logo + Name */}
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700"
            alt="logo"
            width="40"
            height="40"
            className="rounded-circle"
          />
          <span className="fw-bold text-warning">Rajesh Sarkar</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center gap-lg-4">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-warning fw-bold" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-warning fw-bold" : "")
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-warning fw-bold" : "")
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "text-warning fw-bold" : "")
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
