import React from "react";

const NewsLetter = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="md:flex md:items-center md:justify-between -mb-8 mt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white xl:text-4xl">
          Subscribe our newsletter to get update.
        </h1>
        <div className="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
          >
            <span className="mx-2">Sign Up Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-2 h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
