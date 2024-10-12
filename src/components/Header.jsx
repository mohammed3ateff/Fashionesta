import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishList);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
    <>
      <div className="fixed top-0 z-20 flex flex-wrap ">
        <section className="relative mx-auto">
          {/* Sidebar */}
          <div
            className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } ease-in-out duration-300 sidebar`}
          >
            {/* Sidebar Content */}
            <SideBar />
          </div>
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link to="/" className="text-3xl font-bold font-heading" href="#">
                Fashion
              </Link>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to="/" className="hover:text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="categories-filter"
                    className="hover:text-gray-200"
                    href="#"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link to="About" className="hover:text-gray-200">
                    About
                  </Link>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex items-center space-x-5 items-center">
                <Link to="wishlist" className="hover:text-gray-200" href="#">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>

                  {wishlist.length > 0 && (
                    <span className="flex absolute -mt-8 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 items-center justify-center">
                        <span className="">{wishlist.length}</span>
                      </span>
                    </span>
                  )}
                </Link>
                <Link
                  to="cart"
                  className="flex items-center hover:text-gray-200"
                >
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {cart.length > 0 && (
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 items-center justify-center">
                        <span className="">{cart.length}</span>
                      </span>
                    </span>
                  )}
                </Link>
                {/* <!-- Sign In / Register --> */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <Link to="wishlist" className="xl:hidden flex mr-5 items-center ">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>

              {wishlist.length > 0 && (
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 items-center justify-center">
                    <span className="">{wishlist.length}</span>
                  </span>
                </span>
              )}
            </Link>
            <Link to="cart" className="xl:hidden flex mr-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cart.length > 0 && (
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 items-center justify-center">
                    <span className="">{cart.length}</span>
                  </span>
                </span>
              )}
            </Link>
            <button
              className="text-gray-500 hover:text-gray-600 self-center mr-5 xl:hidden toggle-sidebar-button"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </nav>
        </section>
      </div>
    </>
  );
}
