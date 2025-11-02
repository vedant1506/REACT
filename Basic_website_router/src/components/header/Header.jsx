import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-6 py-2.5">
          <div className="grid grid-cols-3 items-center">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center justify-start">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>

            {/* Center: Nav links */}
            <div className="hidden lg:flex justify-center">
              <ul className="flex items-center gap-8 m-0 p-0 list-none">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 px-3 transition-colors ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:text-orange-700`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 px-3 transition-colors ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:text-orange-700`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 px-3 transition-colors ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:text-orange-700`
                    }
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Github"
                    className={({ isActive }) =>
                      `block py-2 px-3 transition-colors ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:text-orange-700`
                    }
                  >
                    Github
                  </NavLink>

                  <NavLink
                    to="/User"
                    className={({ isActive }) =>
                      `block py-2 px-3 transition-colors ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:text-orange-700`
                    }
                  >
                    User
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Right: Auth actions */}
            <div className="flex items-center justify-end">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
