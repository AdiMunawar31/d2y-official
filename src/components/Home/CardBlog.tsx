import React from "react";

const CardBlog = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center">
          <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Populars Blog</h1>
          <p className="mx-auto mt-4 max-w-lg text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck pie.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3">
          <div>
            <div className="relative">
              <img
                className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900">
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
              What do you want to know about UI
            </h1>
            <hr className="my-6 w-32 text-blue-500" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
              praesentium, alias nam? Tempore
            </p>
            <a href="#" className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">
              Read more
            </a>
          </div>
          <div>
            <div className="relative">
              <img
                className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900">
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">arthur melo</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
              All the features you want to know
            </h1>
            <hr className="my-6 w-32 text-blue-500" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
              praesentium, alias nam? Tempore
            </p>
            <a href="#" className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">
              Read more
            </a>
          </div>
          <div>
            <div className="relative">
              <img
                className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
              <div className="absolute bottom-0 flex bg-white p-3 dark:bg-gray-900">
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
              Which services you get from Meraki UI
            </h1>
            <hr className="my-6 w-32 text-blue-500" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
              praesentium, alias nam? Tempore
            </p>
            <a href="#" className="mt-4 inline-block text-blue-500 underline hover:text-blue-400">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBlog;
