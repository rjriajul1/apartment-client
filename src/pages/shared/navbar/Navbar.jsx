import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../logo/Logo";
import profile from "../../../assets/profile_logo.png";
import { useAuth } from "../../../hooks/useAuth";
const Navbar = () => {
  const { user, userSignout } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-xl" : "text-xl"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apartment"
          className={({ isActive }) =>
            isActive ? "underline text-xl" : "text-xl"
          }
        >
          Apartment
        </NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "underline text-xl" : "text-xl"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-primary">
      <div className="navbar max-w-[1600px] mx-auto">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-xl">
            <Logo />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button
            className="hover:cursor-pointer"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            {user ? (
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={user?.photoURL}
                alt="profile picture "
              />
            ) : (
              <img className="w-16" src={profile} alt="" />
            )}
          </button>

          <ul
            className="dropdown menu w-42 -ml-25 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={
              { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
            }
          >
            <li>
              <p className="text-xs font-bold text-center">
                Name: {user?.displayName}
              </p>
            </li>
            <li>
              <Link className="font-bold text-[16px] btn mt-2" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <button className="btn btn-primary my-4" onClick={userSignout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
