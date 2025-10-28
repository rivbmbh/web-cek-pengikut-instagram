import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-accent" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tutorial"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-accent" : ""
                  }
                >
                  Tutorial
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/upload"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-accent" : ""
                  }
                >
                  Upload
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/result"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-accent" : ""
                  }
                >
                  Result
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">
            <p className="bg-linear-to-r from-accent via-teal-200 to-emerald-300 bg-clip-text text-2xl font-extrabold text-transparent ...">
              Insta
              <span className="bg-linear-to-r bg-clip-text from-emerald-200 via-teal-200 to-accent">
                Cik
              </span>
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-accent" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tutorial"
                className={({ isActive }) =>
                  isActive ? "font-bold text-accent" : ""
                }
              >
                Tutorial
              </NavLink>
            </li>
            {/* <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <NavLink
                to="/upload"
                className={({ isActive }) =>
                  isActive ? "font-bold text-accent" : ""
                }
              >
                Upload
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/result"
                className={({ isActive }) =>
                  isActive ? "font-bold text-accent" : ""
                }
              >
                Result
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://saweria.co/sangiaradigital"
            target="_blank"
            className="btn"
          >
            DONATE
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
