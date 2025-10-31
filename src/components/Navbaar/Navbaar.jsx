import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Works
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/cp"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Competitive Programming
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : "text-gray-700 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-50 shadow-md px-4 md:px-8 py-4">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content bg-white rounded-lg shadow-md mt-2 p-2 w-52 z-10"
          >
            {links}
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-bold text-blue-500 hover:text-blue-600 transition-colors"
        >
          NM.
        </NavLink>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>

      {/* End */}
      <div className="navbar-end">
        <NavLink
          to={"/contact"}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
        >
          Hire Me
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
