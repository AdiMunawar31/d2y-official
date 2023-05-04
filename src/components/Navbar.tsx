import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="container mb-20">
      {/* Navbar */}
      <nav className="flex justify-between md:justify-around py-5 bg-white/80 backdrop-blur-md shadow-md w-full sm:px-16 fixed top-0 left-0 right-0 z-10 px-3">
        {/* Logo Container */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-medium text-blue-500">
            <Image
              className="w-12 md:w-auto cursor-pointer"
              src="/am.png"
              width={50}
              height={30}
              draggable
              alt="logo"
            />
          </Link>
        </div>
        {/* Links Section */}
        <div className="items-center ml-16 md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
          <Link
            href="/showcase"
            className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
          >
            Showcase
          </Link>
          <Link
            href="/tutorial"
            className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600"
          >
            Tutorials
          </Link>
          <Link
            href="/blog"
            className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/forum"
            className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
          >
            Forum
          </Link>
          <Link
            href="/faq"
            className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
          >
            Faq
          </Link>
          <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            About Us
          </a>
        </div>
        {/* Auth Links */}
        <div className="flex">
          <Link
            href="/login"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-900 px-4 py-1"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hidden md:block bg-black transition duration-150 ease-in-out hover:bg-gray-900 rounded text-white px-4 py-1 ml-2"
          >
            Register
          </Link>
        </div>
        {/* Hamberger Menu */}
        <button className="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100">
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
