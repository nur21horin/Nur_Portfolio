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
              : "text-gray-700 hover:text-blue-500 transition"
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
              : "text-gray-700 hover:text-blue-500 transition"
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
              : "text-gray-700 hover:text-blue-500 transition"
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
              : "text-gray-700 hover:text-blue-500 transition"
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
              : "text-gray-700 hover:text-blue-500 transition"
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
              : "text-gray-700 hover:text-blue-500 transition"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-50 shadow-sm px-4 md:px-8 py-4">
      {/* Mobile Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost p-2 lg:hidden"
          >
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
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 p-3 w-56 z-20"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-bold text-blue-600"
        >
          NM.
        </NavLink>
      </div>

      {/* Desktop Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6">{links}</ul>
      </div>

      {/* Right Buttons */}
      <div className="navbar-end">
        <NavLink
          to="/contact"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Hire Me
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
