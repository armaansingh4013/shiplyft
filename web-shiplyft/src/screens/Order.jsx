import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowPathIcon as SyncIcon,
  CubeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
export default function Dashboard() {
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
      <main>
        <div class="py-6 bg-gray-100 min-h-screen overflow-x-scroll">
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
                    <th className="p-2 md:p-3 text-left border-b">Column 2</th>
                    <th className="p-2 md:p-3 text-left border-b">Column 3</th>
                    <th className="p-2 md:p-3 text-left border-b">Column 4</th>
                    <th className="p-2 md:p-3 text-left border-b">Column 5</th>
                    <th className="p-2 md:p-3 text-left border-b">Column 6</th>
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
    </>
  );
}
