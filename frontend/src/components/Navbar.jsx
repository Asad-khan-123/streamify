import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Video,
  PlusSquare,
  LogOut,
  GraduationCap,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  /* =========================
     NAVIGATION ITEMS
  ========================== */

  const adminLinks = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Create Course",
      path: "/admin/create-course",
      icon: PlusSquare,
    },

    {
      name: "Videos",
      path: "/admin/videos",
      icon: Video,
    },
  ];

  const studentLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Courses",
      path: "/courses",
      icon: BookOpen,
    },

    {
      name: "My Learning",
      path: "/my-learning",
      icon: GraduationCap,
    },
  ];

  const navLinks =
    user?.role === "admin"
      ? adminLinks
      : studentLinks;

  return (
    <>
      {/* =========================
           TOP NAVBAR
      ========================== */}

      <header
        className="
          sticky
          top-0
          z-50
          w-full
          border-b
          border-white/10
          bg-[#6C63FF]/90
          backdrop-blur-xl
          text-white
        "
      >
        <div
          className="
            h-16
            max-w-7xl
            mx-auto
            px-4
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* MOBILE MENU BUTTON */}
            {user && (
              <button
                onClick={() =>
                  setSidebarOpen(true)
                }
                className="
                  lg:hidden
                  w-10
                  h-10
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  active:scale-95
                  transition-all
                "
              >
                <Menu size={22} />
              </button>
            )}

            {/* LOGO */}
            <Link
              to="/"
              className="
                flex
                items-center
                gap-3
                shrink-0
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white
                  text-[#6C63FF]
                  flex
                  items-center
                  justify-center
                  font-extrabold
                  shadow-lg
                "
              >
                L
              </div>

              <div>
                <h1
                  className="
                    text-lg
                    font-extrabold
                    tracking-tight
                  "
                >
                  LearnFlow
                </h1>

                <p
                  className="
                    text-[10px]
                    text-white/70
                    hidden sm:block
                  "
                >
                  Modern Learning Platform
                </p>
              </div>
            </Link>
          </div>

          {/* =========================
               DESKTOP NAV LINKS
          ========================== */}

          {user && (
            <div
              className="
                hidden
                lg:flex
                items-center
                gap-2
                flex-wrap
                justify-center
                flex-1
                overflow-x-auto
                px-6
              "
            >
              {navLinks.map((item) => {
                const Icon = item.icon;

                const active =
                  location.pathname ===
                  item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      flex
                      items-center
                      gap-2
                      px-5
                      py-2.5
                      rounded-2xl
                      whitespace-nowrap
                      transition-all
                      duration-300

                      ${
                        active
                          ? "bg-white text-[#6C63FF] shadow-lg"
                          : "hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon size={18} />

                    <span className="font-medium">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {user ? (
              <>
                {/* USER CARD */}
                <div
                  className="
                    hidden
                    sm:flex
                    items-center
                    gap-3
                    bg-white/10
                    border
                    border-white/10
                    rounded-2xl
                    px-3
                    py-2
                    shrink-0
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-white
                      text-[#6C63FF]
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    {user?.name?.charAt(0)}
                  </div>

                  <div>
                    <h3
                      className="
                        text-sm
                        font-semibold
                        leading-none
                      "
                    >
                      {user.name}
                    </h3>

                    <p
                      className="
                        text-xs
                        text-white/70
                        mt-1
                        capitalize
                      "
                    >
                      {user.role}
                    </p>
                  </div>
                </div>

                {/* LOGOUT BUTTON */}
                <button
                  onClick={handleLogout}
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-white
                    text-[#6C63FF]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    hover:scale-105
                    active:scale-95
                    transition-all
                    shrink-0
                  "
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="
                  px-5
                  py-2.5
                  rounded-2xl
                  bg-white
                  text-[#6C63FF]
                  font-semibold
                  shadow-lg
                "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* =========================
           MOBILE SIDEBAR
      ========================== */}

      <div
        className={`
          fixed
          inset-0
          z-[100]
          lg:hidden
          transition-all
          duration-300

          ${
            sidebarOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            absolute
            inset-0
            bg-black/40
            backdrop-blur-sm
          "
        ></div>

        {/* SIDEBAR */}
        <div
          className={`
            absolute
            top-0
            left-0
            h-full
            w-[85%]
            max-w-[320px]
            bg-white
            shadow-2xl
            transition-all
            duration-300
            flex
            flex-col

            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >

          {/* TOP */}
          <div
            className="
              h-24
              bg-gradient-to-br
              from-[#6C63FF]
              to-[#8B85FF]
              px-5
              flex
              items-center
              justify-between
              text-white
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  text-[#6C63FF]
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                "
              >
                {user?.name?.charAt(0)}
              </div>

              <div>
                <h2 className="font-bold">
                  {user?.name}
                </h2>

                <p className="text-sm text-white/80 capitalize">
                  {user?.role}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setSidebarOpen(false)
              }
            >
              <X size={24} />
            </button>
          </div>

          {/* NAVIGATION */}
          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-2
            "
          >
            {navLinks.map((item) => {
              const Icon = item.icon;

              const active =
                location.pathname ===
                item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                  className={`
                    flex
                    items-center
                    gap-4
                    px-4
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      active
                        ? "bg-[#6C63FF] text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon size={22} />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* BOTTOM */}
          <div className="p-4 border-t">

            <button
              onClick={handleLogout}
              className="
                w-full
                h-14
                rounded-2xl
                bg-gradient-to-r
                from-[#6C63FF]
                to-[#8B85FF]
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                shadow-lg
              "
            >
              <LogOut size={20} />

              Logout
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;