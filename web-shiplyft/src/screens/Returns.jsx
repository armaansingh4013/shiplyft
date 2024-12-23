import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"; // Import Link from react-router-dom

import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowPathIcon as SyncIcon,
  CubeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import ReturnRequests from "../components/return/ReturnRequests";
import { useReturnFilter } from "../hooks/ReturnContext";
import ReturnNew from "../components/return/ReturnNew";
import ReturnPickupScheduled from "../components/return/ReturnPickupScheduled";
import ReturnInTransit from "../components/return/ReturnInTransit";
import ReturnRecieved from "../components/return/ReturnRecieved";
import ReturnAll from "../components/return/ReturnAll";
import ReturnPendingForRefund from "../components/return/ReturnPendingForRefund";
export default function Returns() {
  const location = useLocation()
  const { filters, updateFilter } = useReturnFilter()

  return (
    <>
      <main>
        <div class="py-6 bg-gray-100">
          <div class="px-4 mx-auto sm:px-6 md:px-8 flex flex-row justify-between ">
            <div className="flex flex-col justify-start items-baseline">
              <h1 class="text-lg font-normal text-gray-900 mr-3">Returns</h1>
              <p className="text-xs">FAQs </p>
             
            </div>

            <div className="flex items-center bg-white rounded-md border border-gray-300 px-3 h-8 w-full md:w-96">
              <SearchIcon className="w-3 h-3 mx-2" />

              <input
                value={filters.keyword}
                onChange={(e) => { updateFilter("keyword", e.target.value) }}
                type="text"
                placeholder="Search for AWB, Order Id, Mobile Number"
                className="flex-1 outline-none text-xs placeholder-gray-500 "
              />
            </div>

            <div className="flex flex-row  items-center justify-end">
              <div class="mx-2 relative px-2 text-gray-700 transition-all duration-200 bg-[#e0caeb] rounded-md hover:text-gray-900 focus:outline-none hover:bg-[#FFEFED] hover:shadow-2xl  justify-center md:block hidden">
                <button
                  type="button"
                  class="p-1 text-[#af92d6] text-sm transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none font-semibold"
                >
                  + Add Order
                </button>
              </div>
             
            </div>
          </div>

          <div class="px-4 mx-auto text-sm sm:px-6 md:px-8">
            <div class="w-full pb-1 mt-3 overflow-x-auto">
              <div class="border-b border-gray-200">
                <nav class="flex -mb-px space-x-6">
                  <Link
                    to="/return"
                    className={`py-2 transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                  >
                    Return Requests
                  </Link>

                  <Link
                    to="/return/new-returns"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return/new-returns"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    New Returns
                  </Link>

                  <Link
                    to="/return/return-pickup-scheduled"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return/return-pickup-scheduled"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Return Pickup Scheduled
                  </Link>

                  <Link
                    to="/return/in-transit"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return/in-transit"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    In Transit
                  </Link>

                  <Link
                    to="/return/return-recieved"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return/return-recieved"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Return Recieved
                  </Link>

                  <Link
                    to="/return/all"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return/all"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    All
                  </Link>
                  <Link
                    to="/return/pending-for-refund"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/return/pending-for-refund"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Pending For Refund
                  </Link>
                </nav>
              </div>
            </div>



            <div class="px-2  mt-3 mx-auto sm:px-6 md:px-8 flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-3">
                <div class="relative text-gray-700 transition-all duration-200 rounded-md hover:text-gray-900 focus:outline-none hover:shadow-2xl  justify-center ">
                  <select className="bg-white px-2 py-1 rounded-sm"
                    value={filters.orderTime}
                    onChange={(e) => { updateFilter("orderTime", e.target.value) }}
                  >
                    <option value="1">1 Months</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 MOnths</option>
                  </select>
                </div>
                <div class=" relative p-1 flex items-center text-gray-700 bg-white transition-all duration-200 rounded-sm hover:text-gray-900 focus:outline-none hover:bg-[#FFEFED] hover:shadow-2xl md:block hidden">
                  <button
                    type="button"
                    class="transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none"
                  >
                    More Filters
                  </button>
                </div>
              </div>

              <div className="flex flex-row">
                <div class="relative flex items-center text-gray-700 transition-all bg-white duration-200 rounded-md hover:text-gray-900 focus:outline-none hover:shadow-2xl justify-center ">
                  <select className="px-2 py-1 rounded-sm bg-white text-sm">
                    <option value="" disable>Select Bulk Actions</option>
                    <option value="1 Months">1 Months</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="12 Months">12 MOnths</option>
                  </select>
                </div>
              </div>
            </div>

            <Routes>
              <Route path="" element={<ReturnRequests/>} />
              <Route path="new-returns" element={<ReturnNew />} />
              <Route path="return-pickup-scheduled" element={<ReturnPickupScheduled />} />
              <Route path="in-transit" element={<ReturnInTransit />} />
              <Route path="return-recieved" element={<ReturnRecieved/>} />
              <Route path="all" element={<ReturnAll />} />
              <Route path="pending-for-refund" element={<ReturnPendingForRefund />} />
            </Routes>


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
