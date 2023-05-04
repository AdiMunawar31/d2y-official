import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-6">
          <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Our Philosophy
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Retail &amp; E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Finance &amp; Insurance
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Services</p>
              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Proofreading &amp; Editing
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Content Creation
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>
              <div className="mt-5 flex flex-col items-start space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  +880 768 473 4978
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400"
                >
                  info@merakiui.com
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />
          <div className="flex flex-col items-center justify-between sm:flex-row">
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
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
              © Copyright 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
