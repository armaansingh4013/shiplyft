import React from 'react'
import Sidebar from '../components/Sidebar';

const HomePage = () => {
   return (
    <>
      {/* Hero Section: Image Side with Social Proof */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
        {/* Main Header */}
        <header
          id="page-header"
          className="relative flex flex-none items-center py-8"
        >
          {/* Main Header Content */}
          <div className="container mx-auto flex flex-col gap-4 px-4 text-center md:flex-row md:items-center md:justify-between md:gap-0 lg:px-8 xl:max-w-7xl">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between lg:gap-10">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
              >
                <svg
                  className="hi-mini hi-rocket-launch inline-block size-5 text-pink-600 transition duration-200 group-hover:-rotate-45 group-active:-translate-y-2 dark:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>IndieRocket</span>
              </a>
              <nav className="space-x-3 md:space-x-6">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-950 decoration-pink-500 decoration-2 underline-offset-8 hover:underline dark:text-gray-50 dark:decoration-pink-400"
                >
                  <span>Features</span>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-950 decoration-pink-500 decoration-2 underline-offset-8 hover:underline dark:text-gray-50 dark:decoration-pink-400"
                >
                  <span>Integrations</span>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-950 decoration-pink-500 decoration-2 underline-offset-8 hover:underline dark:text-gray-50 dark:decoration-pink-400"
                >
                  <span>Pricing</span>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-950 decoration-pink-500 decoration-2 underline-offset-8 hover:underline dark:text-gray-50 dark:decoration-pink-400"
                >
                  <span>FAQ</span>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0">
              <div className="flex items-center justify-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                >
                  <span>Sign in</span>
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                >
                  <span>Sign up</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 opacity-50 transition group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* END Main Header Content */}
        </header>
        {/* END Main Header */}

        {/* Hero Content */}
        <div className="container relative mx-auto grid grid-cols-1 gap-16 px-4 py-16 text-center lg:grid-cols-2 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:items-center">
            <div>
              <h1 className="mb-4 text-5xl font-black tracking-tight text-black xl:text-6xl dark:text-white">
                Rocket start your indie business
              </h1>
              <h2 className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                Stop worrying about marketing and let us know guide you through.
                Start today and reach 20,000+ people in the next month.
              </h2>
              <div className="flex items-center justify-center gap-2 pb-10 pt-5 leading-4 lg:justify-start">
                <div className="flex-none">
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
                    alt="User Avatar"
                    className="inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-160x160.jpg"
                    alt="User Avatar"
                    className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/avatar-8PMvB4VyVXA-160x160.jpg"
                    alt="User Avatar"
                    className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg"
                    alt="User Avatar"
                    className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                  <img
                    src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg"
                    alt="User Avatar"
                    className="-ml-6 inline-block size-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                </div>
                <div className="text-left">
                  <div className="inline-flex items-center text-amber-500">
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-2 font-bold text-gray-950 dark:text-gray-50">
                      4.9
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Join 5,000+ indie makers
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-pink-700 bg-pink-700 px-7 py-3.5 text-sm font-semibold text-white hover:border-pink-600 hover:bg-pink-600 hover:text-white focus:ring focus:ring-pink-400/50 active:border-pink-700 active:bg-pink-700 dark:focus:ring-pink-400/90"
                >
                  <span>Start for free today</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 opacity-50 transition group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                >
                  <span>Learn more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:flex lg:items-center lg:justify-center">
            <div className="absolute left-0 top-20 size-16 rounded-3xl bg-gradient-to-br from-gray-200 dark:from-gray-800" />
            <div className="absolute bottom-20 right-0 size-16 rotate-12 rounded-3xl bg-gradient-to-tl from-pink-200 dark:from-pink-900" />
            <div className="absolute right-0 top-0 size-16 -rotate-6 rounded-full bg-gradient-to-bl from-orange-200 dark:from-orange-800" />
            <div className="absolute bottom-0 left-0 size-16 rotate-12 rounded-full bg-gradient-to-tr from-sky-200 dark:from-sky-800" />
            <div className="absolute right-0 top-0 size-40 rounded-full border-2 border-orange-200 bg-white sm:size-72 dark:border-orange-900 dark:bg-gray-900" />
            <div className="absolute bottom-0 left-0 size-40 rounded-full border-2 border-sky-200 bg-white sm:size-72 dark:border-sky-900 dark:bg-gray-900" />
            <div className="relative w-full">
              <div className="aspect-h-1 aspect-w-1">
                <img
                  src="https://cdn.tailkit.com/media/placeholders/photo-indie-hacker-desk-1024x1024.png"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Image Side with Social Proof */}
    </>
  );
};

export default HomePage;
