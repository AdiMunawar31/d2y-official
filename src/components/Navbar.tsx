import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="py-2 md:py-0 container mx-auto px-6 flex items-center justify-between">
        <Link href="/" aria-label="Home. logo" role="img">
          <Image className="w-12 md:w-auto" src="/am.png" width={50} height={30} draggable alt="logo" />
        </Link>
        <div>
          <div id="menu" className="md:block hidden ml-20">
            <ul className="flex text-xl font-bold md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                <Link href="/tutorial">Tutorial</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                <Link href="/forum">Forum</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <Link
            href="/login"
            className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-900 text-gray-900 px-4 py-1"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hidden md:block bg-black transition duration-150 ease-in-out hover:bg-gray-900 rounded text-gray-300 px-4 py-1 ml-2"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
