import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-6xl text-center text-gray-800">
          <span className="pb-2 font-black text-slate-900 ">The React Framework for the Web</span>
        </h1>
        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
          A professonal website drives sales. Create a beautiful website to impress and engage new customers and
          establish your business online{" "}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black transition duration-150 ease-in-out hover:bg-transparent lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border hover:border-gray-900 hover:text-black py-2 sm:py-4 text-sm">
          Get Started
        </button>
        <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-transparent transition duration-150 ease-in-out hover:border-gray-900 lg:text-xl lg:font-bold  hover:text-gray-900 rounded border border-gray-300 text-gray-900 px-4 sm:px-10 py-2 sm:py-4 text-sm">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
