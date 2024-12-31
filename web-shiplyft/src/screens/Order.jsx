import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom"; // Import Link from react-router-dom

import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowPathIcon as SyncIcon,
  CubeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import OrderNew from "../components/order/OrderNew";
import OrderReadyToShip from "../components/order/OrderReadyToShip";
import OrderPickupsManifests from "../components/order/OrderPickupsMnifest";
import OrderInTransit from "../components/order/OrderInTransit";
import OrderDelivered from "../components/order/OrderDelivered";
import OrderAll from "../components/order/OrderAll";
import OrderRTO from "../components/order/OrderRTO";
import { OrderFilterProvider, useOrderFilter } from "../hooks/OrderContext"
export default function Order() {
  const location = useLocation()
  const { filters, updateFilter } = useOrderFilter()

  return (
    <>
      <main>
        <div class="py-6 bg-gray-100">
          <div class="px-4 mx-auto sm:px-6 md:px-8 flex flex-row justify-between ">
            <div className="flex flex-row justify-start items-baseline">
              <h1 class="text-lg font-bold text-gray-900 mr-3">Orders</h1>
              <div class="relative ps-1 bg-white text-gray-700 transition-all duration-200 hover:text-gray-900 focus:outline-none hover:shadow-inner justify-center ">
                <select
                  className="w-full h-full rounded-sm text-sm  bg-white"
                  value={filters.category}
                  onChange={(e) => { updateFilter("category", e.target.value) }}
                >
                  <option value="All">All</option>
                  <option value="Domestic">Domestic</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>

            <div className="flex items-center bg-white rounded-md border border-gray-300 px-3 w-full md:w-96">
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
                <Link to="/add-order/single-order">
                <button
                  type="button"
                  class="p-1 text-[#af92d6] text-sm transition-all duration-200  rounded-sm hover:text-gray-900 focus:outline-none font-semibold"
                >
                  + Add Order
                </button>
                </Link>
              </div>
              <div class="relative p-1 text-gray-700 transition-all duration-200 bg-white rounded-md hover:text-gray-900 focus:outline-none hover:bg-gray-100 hover:shadow-2xl">
                <button
                  type="button"
                  class="ps-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100 flex flex-row  items-center"
                >
                  <svg
                    class="w-4 h-4"
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
                  <span className="px-2 text-sm">
                    Sync Orders</span>
                </button>
              </div>
            </div>
          </div>

          <div class="px-4 mx-auto text-sm sm:px-6 md:px-8">
            <div class="w-full pb-1 mt-3 overflow-x-auto">
              <div class="border-b border-gray-200">
                <nav class="flex -mb-px space-x-6">
                  <Link
                    to="/order"
                    className={`py-2 transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                  >
                    New
                  </Link>

                  <Link
                    to="/order/ready-to-ship"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/ready-to-ship"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Ready to Ship
                  </Link>

                  <Link
                    to="/order/pickups&manifests"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/pickups&manifests"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Pickups and Manifests
                  </Link>

                  <Link
                    to="/order/in-transit"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/in-transit"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    In Transit
                  </Link>

                  <Link
                    to="/order/delivered"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/delivered"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Delivered
                  </Link>

                  <Link
                    to="/order/rto"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/rto"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    RTO
                  </Link>
                  <Link
                    to="/order/all"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/all"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    All
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
              <Route path="" element={<OrderNew />} />
              <Route path="ready-to-ship" element={<OrderReadyToShip />} />
              <Route path="Pickups&manifests" element={<OrderPickupsManifests />} />
              <Route path="in-transit" element={<OrderInTransit />} />
              <Route path="delivered" element={<OrderDelivered />} />
              <Route path="rto" element={<OrderRTO />} />
              <Route path="all" element={<OrderAll />} />
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
