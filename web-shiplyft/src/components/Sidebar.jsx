import React from 'react'

import { Link } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowPathIcon as SyncIcon,
  CubeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";   
const Sidebar = () => {
  return (
    <div class="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
    <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-[var(--primary-dashboard-color)]">
      <div class="flex items-center flex-shrink-0 px-4 text-3xl font-bold text-white">
        {/* <img class="w-auto h-8 text-white" src="" alt="Logo Here" /> */}
        LOGO HERE
      </div>

      <div class="flex flex-col flex-1 px-3 mt-8 ">
        <div class="space-y-4">
          <nav class="flex-1 space-y-2 ">
            <a
              href="#"
              title=""
              class="flex items-center text-decoration-none px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
            >
              <HomeIcon className="w-5 h-5 text-gray-900  pr-1 group-hover:text-gray-900" />
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
  )
}

export default Sidebar
