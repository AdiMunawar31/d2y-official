import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          What clients saying
        </h1>
        <div className="mx-auto mt-6 flex justify-center">
          <span className="inline-block h-1 w-40 rounded-full bg-blue-500" />
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500" />
          <span className="inline-block h-1 w-1 rounded-full bg-blue-500" />
        </div>
        <div className="mx-auto mt-16 flex max-w-6xl items-start">
          <button className="hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <p className="flex items-center text-center text-gray-500 lg:mx-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis eos
              illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus minima
              dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates fugiat
              corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis quisquam nemo,
              accusamus animi explicabo? Architecto, unde laboriosam?
            </p>
            <div className="mt-8 flex flex-col items-center justify-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 dark:text-white">Adi Munawar</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">Programmer</span>
              </div>
            </div>
          </div>
          <button className="hidden rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
