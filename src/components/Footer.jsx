import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.jpg";

export default function Footer() {
  return (
    <div className="text-center bg-black text-white py-5">
      <Link
        to="/"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-300"
      >
        <img src={logo} className="h-12 mr-3 sm:h-9" alt="" />
        Fashion
      </Link>

      <span className="block text-sm text-center text-gray-500">
        © 2024-2025 Mohammed Atef. All Rights Reserved.
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        <li className="">
          <a href="https://github.com/Mohammed3Atef" target="_blank ">
            <FaGithub className="text-5xl duration-[0.3s] hover:scale-110" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohammed-atef-142724167/"
            target="_blank"
          >
            <IoLogoLinkedin className="text-5xl  text-[#0a66c2] duration-[0.3s] hover:scale-110" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/201203388446" target="_blank">
            <IoLogoWhatsapp className="text-5xl text-[#00e676] duration-[0.3s] hover:scale-110" />
          </a>
        </li>
      </ul>
    </div>
  );
}
