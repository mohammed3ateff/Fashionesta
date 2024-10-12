import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../src/assets/logo.jpg";
import CategoriesList from "./CategoriesList";

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".toggle-sidebar-button")
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);
  return (
    <div className="p-4">
      <Link
        to="/"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-300"
        onClick={closeSidebar}
      >
        <img src={logo} className="h-12 mr-3 sm:h-9" alt="" />
        Fashion
      </Link>
      <ul className="mt-4">
        <li className="mb-2">
          <Link to="/" className="hover:text-gray-200" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li className="mb-2">
          <CategoriesList />
        </li>
        <li className="mb-2">
          <Link
            to="About"
            className="hover:text-gray-200"
            onClick={closeSidebar}
          >
            About
          </Link>
        </li>
        <li className="mb-2">
          <a className="hover:text-gray-200" href="#" onClick={closeSidebar}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}
