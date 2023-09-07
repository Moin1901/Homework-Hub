"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);

      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 h-16 py-2 px-4 sm:px-8 md:px-12 flex justify-between items-center shadow-md">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!" className="text-white hover:text-yellow-300">
            Homework Hub
          </a>
        </h1>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-yellow-300 focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <li>
                <Link href={"/"} className="text-white hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/add-task"
                  className="text-white hover:text-yellow-300"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  href={"/show-tasks"}
                  className="text-white hover:text-yellow-300"
                >
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex space-x-3 items-center">
          {context.user && (
            <>
              <li className="relative group">
                <Link href={"#!"} className="text-white hover:text-yellow-300">
                  {context.user.name}
                </Link>
                <div className="hidden group-hover:block absolute top-full left-0 bg-white text-blue-600 text-sm py-1 px-2 rounded-md shadow-md">
                  {/* Add user-related dropdown options here */}
                </div>
              </li>
              <li>
                <button
                  onClick={doLogout}
                  className="bg-white text-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Logout
                </button>
              </li>
            </>
          )}

          {!context.user && (
            <>
              <li>
                <Link
                  href="/login"
                  className="text-white hover:text-yellow-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-white hover:text-yellow-300"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
