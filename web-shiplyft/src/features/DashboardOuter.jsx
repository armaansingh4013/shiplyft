import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowPathIcon as SyncIcon,
  CubeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";

const DashboardOuter = () => {
  const data = [
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
      col6: "Data 6",
      col7: "Data 7",
    },
    {
      col1: "Row 2",
      col2: "Row 2",
      col3: "Row 2",
      col4: "Row 2",
      col5: "Row 2",
      col6: "Row 2",
      col7: "Row 2",
    },
  ];
  return (
    <>
      <div>
        <div class="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
          <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-[var(--primary-dashboard-color)]">
            <div class="flex items-center flex-shrink-0 px-4 text-3xl font-bold text-white">
              {/* <img class="w-auto h-8 text-white" src="" alt="Logo Here" /> */}
              LOGO HERE
            </div>

            <div class="flex flex-col flex-1 px-3 mt-8">
              <div class="space-y-4">
                <nav class="flex-1 space-y-2">
                  <a
                    href="#"
                    title=""
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    <HomeIcon className="w-5 h-5 text-white hover:text-[#DD675B] pr-1" />
                    Home
                  </a>

                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    Dashboard
                  </a>
                  <Link
                    to="/dashboard/order"
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    Orders
                  </Link>

                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    Returns
                  </a>

                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    <div className="flex justify-between w-full">
                      <p>Weight Management</p>
                      <p className="text-sm leading-none">&#11167;</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    <div className="flex justify-between w-full">
                      <p>Tools</p>
                      <p className="text-sm leading-none">&#11167;</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    <div className="flex justify-between w-full">
                      <p>Billing</p>
                      <p className="text-sm leading-none">&#11167;</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    <div className="flex justify-between w-full">
                      <p>Setting</p>
                      <p className="text-sm leading-none">&#11167;</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
                  >
                    Customer Support
                  </a>
                </nav>
              </div>

              {/* <div class="pb-4 mt-auto">
                <button
                  type="button"
                  class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700"
                >
                  <img
                    class="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-female.png"
                    alt=""
                  />
                  Mariana Jones
                  <svg
                    class="w-5 h-5 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div class="flex flex-col flex-1 xl:pl-64">
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

          <main>
            <div class="py-6">
              <div class="px-4 mx-auto sm:px-6 md:px-8 flex flex-row justify-between ">
                <div className="flex flex-row justify-start">
                  <h1 class="text-2xl font-bold text-gray-900 mr-3">Orders</h1>
                  <div class="relative text-gray-700 transition-all duration-200 rounded-md hover:text-gray-900 focus:outline-none hover:shadow-2xl w-[140px] h-[37px] justify-center ">
                    <select className="w-full  h-full rounded-md">
                      <option value="New York">All</option>
                      <option value="London">1 Months</option>
                      <option value="Paris">3 Months</option>
                      <option value="Tokyo">6</option>
                      <option value="Mumbai">12 MOnths</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center rounded-md border border-gray-300 p-2 w-full md:w-80">
                  <SearchIcon className="w-4 h-4" />

                  <input
                    type="text"
                    placeholder="Search for AWB, Order Id, Mobile Number"
                    className="flex-1 outline-none text-sm placeholder-gray-500"
                  />
                </div>

                <div className="flex flex-row justify-end">
                  <div class=" relative p-1 text-gray-700 transition-all duration-200 bg-[#e0caeb] rounded-md hover:text-gray-900 focus:outline-none hover:bg-[#FFEFED] hover:shadow-2xl w-[110px] h-[32px] justify-center md:block hidden">
                    <button
                      type="button"
                      class="p-1 text-[#af92d6] transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none font-bold"
                    >
                      + Add Order
                    </button>
                  </div>
                  <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl">
                    <button
                      type="button"
                      class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 flex flex-row"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.75517 10.0589C5.82723 6.0579 9.93976 3.68353 13.9408 4.75559C15.2617 5.10955 16.4035 5.79374 17.3034 6.69528L19.2065 8.59835H16.0228C15.6085 8.59835 15.2728 8.93414 15.2728 9.34835C15.2728 9.76256 15.6085 10.0984 16.0228 10.0984H21.0154C21.2143 10.0984 21.4051 10.0193 21.5457 9.87864C21.6864 9.73797 21.7654 9.54717 21.7654 9.34824V4.35575C21.7654 3.94153 21.4296 3.60575 21.0154 3.60575C20.6011 3.60575 20.2654 3.94153 20.2654 4.35575V7.53591L18.3651 5.63561C17.2839 4.55253 15.9114 3.73071 14.329 3.3067C9.52779 2.02023 4.59276 4.86947 3.30628 9.67067C3.19908 10.0708 3.43651 10.482 3.83661 10.5892C4.23671 10.6964 4.64796 10.459 4.75517 10.0589ZM20.1626 13.4108C19.7625 13.3036 19.3513 13.5411 19.2441 13.9412C18.172 17.9422 14.0595 20.3165 10.0585 19.2445C8.73749 18.8905 7.5957 18.2063 6.69585 17.3048L4.79396 15.4017H7.97677C8.39099 15.4017 8.72677 15.0659 8.72677 14.6517C8.72677 14.2375 8.39099 13.9017 7.97677 13.9017L2.98413 13.9017C2.56992 13.9017 2.23413 14.2375 2.23413 14.6517V19.6443C2.23413 20.0585 2.56992 20.3943 2.98413 20.3943C3.39834 20.3943 3.73413 20.0585 3.73413 19.6443V16.4632L5.6342 18.3645C6.71539 19.4477 8.08772 20.2693 9.67024 20.6934C14.4714 21.9798 19.4065 19.1306 20.6929 14.3294C20.8001 13.9293 20.5627 13.5181 20.1626 13.4108Z"
                          fill="#0F172A"
                        />
                      </svg>
                      Sync Orders
                    </button>
                  </div>
                </div>
              </div>

              <div class="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                <div class="w-full pb-1 overflow-x-auto">
                  <div class="border-b border-gray-200">
                    <nav class="flex -mb-px space-x-10">
                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                      >
                       New
                      </a>

                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                      >
                        Ready to Ship
                      </a>

                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                      >
                        Pickups and Manifests
                      </a>

                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                      >
                        In Transit
                      </a>

                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600 whitespace-nowrap"
                      >
                        Delivered
                      </a>

                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                      >
                        RTO
                      </a>
                      <a
                        href="#"
                        class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                      >
                        All
                      </a>
                    </nav>
                  </div>
                </div>
                <div class="px-4 mx-auto sm:px-6 md:px-8 flex flex-row justify-between">
                <div className="flex flex-row justify-start">
                
                  <div class="relative text-gray-700 transition-all duration-200 rounded-md hover:text-gray-900 focus:outline-none hover:shadow-2xl w-[140px] h-[37px] justify-center ">
                    <select className="w-full  h-full rounded-md">
                      <option value="New York">Last 30 Days</option>
                      <option value="London">1 Months</option>
                      <option value="Paris">3 Months</option>
                      <option value="Tokyo">6</option>
                      <option value="Mumbai">12 MOnths</option>
                    </select>
                  </div>
                  <div class=" relative p-1 text-gray-700 transition-all duration-200 rounded-md hover:text-gray-900 focus:outline-none hover:bg-[#FFEFED] hover:shadow-2xl w-[110px] h-[32px] justify-center md:block hidden">
                    <button
                      type="button"
                      class="p-1 transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none font-bold"
                    >
                      More Filters
                    </button>
                  </div>
                </div>

                <div className="flex flex-row justify-end">
                  <div class=" relative p-1 text-gray-700 transition-all duration-200 bg-[#e0caeb] rounded-md hover:text-gray-900 focus:outline-none hover:bg-[#FFEFED] hover:shadow-2xl w-[110px] h-[32px] justify-center md:block hidden">
                    <button
                      type="button"
                      class="p-1 text-[#af92d6] transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none font-bold"
                    >
                      + Add Order
                    </button>
                  </div>
                  <div class="relative text-gray-700 transition-all duration-200 rounded-md hover:text-gray-900 focus:outline-none hover:shadow-2xl w-[190px] h-[37px] justify-center ">
                    <select className="w-full  h-full rounded-md">
                      <option value="New York">Select Bulk Actions</option>
                      <option value="London">1 Months</option>
                      <option value="Paris">3 Months</option>
                      <option value="Tokyo">6</option>
                      <option value="Mumbai">12 MOnths</option>
                    </select>
                  </div>
                </div>
              </div>

                <div className="p-6">
                  {/* Table */}
                  <table className="table-auto w-full border-collapse">
                    {/* Header */}
                    <thead className="p-4 m-4">
                      <tr className="bg-white text-black shadow-lg rounded-xl">
                        <th className="p-2 md:p-3 text-left border-b rounded-s-3xl">
                          Column 1
                        </th>
                        <th className="p-2 md:p-3 text-left border-b">
                          Column 2
                        </th>
                        <th className="p-2 md:p-3 text-left border-b">
                          Column 3
                        </th>
                        <th className="p-2 md:p-3 text-left border-b">
                          Column 4
                        </th>
                        <th className="p-2 md:p-3 text-left border-b">
                          Column 5
                        </th>
                        <th className="p-2 md:p-3 text-left border-b">
                          Column 6
                        </th>
                        <th className="p-2 md:p-3 text-left border-b rounded-e-3xl">
                          Column 7
                        </th>
                      </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                      <div className="h-8"></div>
                      {data.length > 0 ? (
                        data.map((row, index) => (
                          <tr
                            key={index}
                            className="text-black text-sm shadow-m transition even:bg-[var(--lightSecondary-color)] odd:bg-white"
                          >
                            <td className="p-2 md:p-3">{row.col1}</td>
                            <td className="p-2 md:p-3">{row.col2}</td>
                            <td className="p-2 md:p-3">{row.col3}</td>
                            <td className="p-2 md:p-3">{row.col4}</td>
                            <td className="p-2 md:p-3">{row.col5}</td>
                            <td className="p-2 md:p-3">{row.col6}</td>
                            <td className="p-2 md:p-3">{row.col7}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center p-10 h-96">
                            <div className="flex flex-col items-center justify-center space-y-2">
                              <CubeIcon className="w-12 h-12 text-gray-400" />
                              <span className="text-gray-600 text-lg font-medium">
                                No Data
                              </span>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* <div class="mt-8 border border-indigo-300 rounded-lg bg-indigo-50">
                  <div class="px-4 py-5 sm:p-6">
                    <div class="md:flex md:items-center md:justify-between">
                      <img
                        class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/3/avatar-female.png"
                        alt=""
                      />
                      <div class="flex-1 max-w-xs mt-4 md:mt-0 md:ml-6">
                        <p class="text-base font-bold text-gray-900">
                          Learn how to connect new apps with Rareblocks API
                        </p>
                        <p class="mt-1 text-sm font-medium text-gray-500">
                          Lorem ipsum dolor sit amet, consec tetur.
                        </p>
                      </div>

                      <div class="flex items-center justify-start mt-6 space-x-6 md:ml-auto md:justify-end md:mt-0 md:space-x-reverse">
                        <button
                          type="button"
                          class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 md:order-last"
                        >
                          View Tutorial
                        </button>

                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 transition-all duration-200 hover:text-gray-900 md:order-first"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div class="mt-8 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p class="text-base font-bold text-gray-900">
                      Connect Apps
                    </p>
                    <p class="mt-1 text-sm font-medium text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipis.
                    </p>
                  </div>

                  <div class="mt-4 sm:mt-0">
                    <label for="" class="sr-only">
                      {" "}
                      Search App{" "}
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
                        placeholder="Search App"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default DashboardOuter;
