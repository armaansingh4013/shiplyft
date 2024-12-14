import React from "react";

import { Link } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowPathIcon as SyncIcon,
  CubeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <div class="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
      <div class="flex flex-1 px-4 sm:px-6 md:px-8">
        <div class="flex items-center justify-between flex-1 lg:justify-end">
          <div class="flex items-center -m-2 xl:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div class="flex ml-4 mr-auto xl:ml-0">
            <div class="flex items-center flex-shrink-0">
              <img
                class="block w-auto h-8 xl:hidden"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
                alt=""
              />
            </div>
          </div>

          {/* <div class="flex-1 hidden max-w-xs ml-auto lg:block">
          <label for="" class="sr-only">
            {" "}
            Search{" "}
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <input
              type="search"
              name=""
              id=""
              class="border block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              placeholder="Search here"
            />
          </div>
        </div> */}

          <div class="flex items-center space-x-6 sm:ml-4">
            <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl ml-[10px] !important">
              <button
                type="button"
                class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1125_8710)">
                    <path
                      d="M18.8571 8.44597H5.74614C5.6322 8.45036 5.51943 8.42158 5.42152 8.36312C5.32362 8.30466 5.24479 8.21904 5.1946 8.11665C5.14441 8.01426 5.12502 7.89951 5.13879 7.78631C5.15255 7.67312 5.19888 7.56635 5.27214 7.47897C5.32596 7.41386 5.39369 7.36164 5.47036 7.32616C5.54703 7.29069 5.63067 7.27285 5.71514 7.27397H16.6151C17.0635 7.26818 17.4911 7.08457 17.8041 6.76353C18.1171 6.44249 18.2897 6.01029 18.2841 5.56197C18.2842 5.48296 18.2677 5.40481 18.2359 5.33249C18.204 5.26018 18.1575 5.1953 18.0991 5.14197C18.0417 5.08955 17.9737 5.05017 17.8996 5.02652C17.8256 5.00288 17.7473 4.99552 17.6701 5.00497L5.17714 6.54297C4.84885 6.58754 4.54811 6.75041 4.33139 7.001C4.11467 7.2516 3.99689 7.57268 4.00014 7.90397V16.898C3.99374 17.4481 4.20593 17.9782 4.59011 18.3719C4.9743 18.7657 5.49906 18.9909 6.04914 18.998H17.9491C18.4996 18.9914 19.0248 18.7665 19.4095 18.3726C19.7941 17.9788 20.0065 17.4484 20.0001 16.898V9.61897C20.0021 9.4669 19.9741 9.31592 19.9178 9.17467C19.8614 9.03342 19.7777 8.90465 19.6716 8.79572C19.5655 8.6868 19.4389 8.59985 19.2992 8.53984C19.1594 8.47983 19.0092 8.44793 18.8571 8.44597ZM17.7141 14.931C17.4811 14.9369 17.2516 14.8733 17.0549 14.7483C16.8582 14.6233 16.7032 14.4425 16.6097 14.2289C16.5162 14.0154 16.4884 13.7789 16.5299 13.5495C16.5714 13.3202 16.6803 13.1084 16.8426 12.9412C17.005 12.7739 17.2136 12.6589 17.4416 12.6107C17.6697 12.5625 17.9069 12.5834 18.1231 12.6706C18.3392 12.7578 18.5245 12.9074 18.6552 13.1004C18.786 13.2933 18.8563 13.5209 18.8571 13.754C18.8597 13.9064 18.8321 14.0578 18.7759 14.1995C18.7198 14.3412 18.6362 14.4705 18.53 14.5798C18.4238 14.6892 18.2971 14.7765 18.1571 14.8367C18.0171 14.897 17.8666 14.929 17.7141 14.931Z"
                      fill="#90949D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1125_8710">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl ml-[10px] !important">
              <button
                type="button"
                class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
              >
                ₹0
              </button>
            </div>
            <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl ml-[10px]">
              <button
                type="button"
                class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.36 4.12077C12.6696 3.2437 11.7795 2.54444 10.7639 2.08134C9.74836 1.61823 8.63676 1.4047 7.52187 1.45857C6.27415 1.54825 5.0782 1.99336 4.07547 2.74128C3.07273 3.48919 2.30515 4.50862 1.86349 5.679C1.42183 6.84939 1.32458 8.12177 1.58323 9.34568C1.84187 10.5696 2.44561 11.6938 3.32302 12.5855C4.20044 13.4771 5.31484 14.0988 6.53444 14.3771C7.75404 14.6553 9.02782 14.5785 10.2052 14.1557C11.3825 13.7329 12.4141 12.9818 13.178 11.9912C13.9419 11.0006 14.4062 9.81198 14.5159 8.56586C14.5458 8.30857 14.5523 8.04911 14.5355 7.79064"
                    stroke="#B4B4B4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.2656 4.80664L13.7426 4.56276L13.4988 1.08575"
                    stroke="#B4B4B4"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class=" relative p-1 text-gray-700 transition-all duration-200 bg-[#FFEFED] rounded-md hover:text-gray-900 focus:outline-none hover:bg-[#FFEFED] hover:shadow-2xl w-[140px] h-[37px] justify-center md:block hidden">
              <button
                type="button"
                class="p-1 text-[#FA7669] transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none font-bold"
              >
                Recharge Wallet
              </button>
            </div>

            <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl">
              <button
                type="button"
                class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
              >
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>
              <span class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-[#FF0000] text-white">
                {" "}
                2{" "}
              </span>
            </div>

            <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl">
              <button
                type="button"
                class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20C20 16.318 16.418 13.333 12 13.333C7.582 13.333 4 16.318 4 20H20Z"
                    fill="#90949D"
                  />
                  <path
                    d="M11.9805 12C14.1896 12 15.9805 10.2091 15.9805 8C15.9805 5.79086 14.1896 4 11.9805 4C9.77133 4 7.98047 5.79086 7.98047 8C7.98047 10.2091 9.77133 12 11.9805 12Z"
                    fill="#90949D"
                  />
                </svg>
              </button>
            </div>

            {/* <button
            type="button"
            class="flex items-center max-w-xs rounded-full xl:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            <img
              class="object-cover bg-gray-300 rounded-full w-9 h-9"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/2/avatar-male.png"
              alt=""
            />
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
