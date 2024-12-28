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
import { useDashboardFilter } from "../hooks/DashboardCOntext";
import Overview from "../components/dashboard/Overview";
import NDR from "../components/dashboard/NDR";

export default function Dashboard() {
  const location = useLocation()
  const { filters, updateFilter } = useDashboardFilter()

  return (
    <>
     <main>
        <div class="py-6 bg-gray-100">
          <div class="px-4 mx-auto sm:px-6 md:px-8 flex flex-row justify-between ">
            <div className="flex flex-row justify-start items-baseline">
              <h1 class="text-lg font-bold text-gray-900 mr-3">Dashboard</h1>
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
                    Overview
                  </Link>

                  <Link
                    to="/order/ready-to-ship"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/ready-to-ship"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Orders
                  </Link>

                  <Link
                    to="/order/pickups&manifests"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/pickups&manifests"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Shipments
                  </Link>

                  <Link
                    to="/dashboard/ndr"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/in-transit"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    NDR
                  </Link>

                  <Link
                    to="/order/delivered"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/delivered"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    WhatsApp Comm
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
                    Courier
                  </Link>
                  <Link
                    to="/order/all"
                    className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${location.pathname === "/order/all"
                      ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                      : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                      }`}                     >
                    Delays
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
              <Route path="" element={<Overview />} />
              <Route path="ready-to-ship" element={<OrderReadyToShip />} />
              <Route path="Pickups&manifests" element={<OrderPickupsManifests />} />
              <Route path="ndr" element={<NDR/>} />
              <Route path="delivered" element={<OrderDelivered />} />
              <Route path="rto" element={<OrderRTO />} />
              <Route path="all" element={<OrderAll />} />
            </Routes>


        
          </div>
        </div>
      </main>
    
    </>
  );
}
