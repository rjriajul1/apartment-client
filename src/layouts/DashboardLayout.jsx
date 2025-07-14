import React from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../pages/shared/logo/Logo";
import {
  FaBullhorn,
  FaFileSignature,
  FaHistory,
  FaMoneyCheckAlt,
  FaRegEdit,
  FaTicketAlt,
  FaUserEdit,
  FaUsersCog,
} from "react-icons/fa";
import useRole from "../hooks/useRole";
import Loading from "../pages/shared/loading/Loading";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const { role, isPending, isError } = useRole();
  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    toast.error(isError.message);
  }
  return (
    <div
      data-aos="fade-right"
      className="drawer lg:drawer-open max-w-[1600px] mx-auto lg:px-4"
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-primary w-full lg:hidden">
          <div className="flex-none  lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="px-3 py-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <div>
            <Logo></Logo>
          </div>
          <div className="mt-6 ">
            <div className="relative">
              {/* member route */}
              {isPending ? (
                <Loading></Loading>
              ) : (
                role === "member" && (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                            : "text-xl font-semibold flex items-center gap-2"
                        }
                        to="/dashboard/makePayment"
                      >
                        <FaMoneyCheckAlt /> Make Payment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                            : "text-xl font-semibold flex items-center gap-2"
                        }
                        to="/dashboard/paymentHistory"
                      >
                        <FaHistory /> Payment History
                      </NavLink>
                    </li>
                  </>
                )
              )}

              {/* admin route */}

              {isPending ? (
                <Loading />
              ) : (
                role === "admin" && (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                            : "text-xl font-semibold flex items-center gap-2"
                        }
                        to="/dashboard/manageMembers"
                      >
                        <FaUsersCog /> Manage Members
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                            : "text-xl font-semibold flex items-center gap-2"
                        }
                        to="/dashboard/makeAnnouncement"
                      >
                        <FaRegEdit /> Make Announcement
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                            : "text-xl font-semibold flex items-center gap-2"
                        }
                        to="/dashboard/agreementRequests"
                      >
                        <FaFileSignature /> Agreement Requests
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                            : "text-xl font-semibold flex items-center gap-2"
                        }
                        to="/dashboard/manageCoupons"
                      >
                        <FaTicketAlt /> Manage Coupons
                      </NavLink>
                    </li>
                  </>
                )
              )}
            </div>
            {/* general routes */}
            <div className="absolute bottom-24">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                      : "text-xl font-semibold flex items-center gap-2"
                  }
                  to="/dashboard/announcements"
                >
                  <FaBullhorn /> Announcements
                </NavLink>
              </li>
              {isPending ? (
                <Loading />
              ) : (
                (role === "member" || role === "user") && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                          : "text-xl font-semibold flex items-center gap-2"
                      }
                      to="/dashboard/profile"
                    >
                      <FaUserEdit />
                      My Profile
                    </NavLink>
                  </li>
                )
              )}
              {isPending ? (
                <Loading />
              ) : (
                (role === "admin" ) && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500 underline text-xl font-semibold flex items-center gap-2"
                          : "text-xl font-semibold flex items-center gap-2"
                      }
                      to="/dashboard/adminProfile"
                    >
                      <FaUserEdit />
                      Admin Profile
                    </NavLink>
                  </li>
                )
              )}
       
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
