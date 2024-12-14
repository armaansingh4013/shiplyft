import react from "react";
import Dashboard from "../screens/Dashboard";
export default function OrderPage() {
  return (
    <>
      <div>
        <Dashboard>
          <div class="py-6">
            <div class="px-4 mx-auto sm:px-6 md:px-8">
              <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
            </div>

            <div class="px-4 mx-auto mt-8 sm:px-6 md:px-8">
              <div class="w-full pb-1 overflow-x-auto">
                <div class="border-b border-gray-200">
                  <nav class="flex -mb-px space-x-10">
                    <a
                      href="#"
                      class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      Profile{" "}
                    </a>

                    <a
                      href="#"
                      class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      Password{" "}
                    </a>

                    <a
                      href="#"
                      class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      Team{" "}
                    </a>

                    <a
                      href="#"
                      class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      Notification{" "}
                    </a>

                    <a
                      href="#"
                      class="py-4 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600 whitespace-nowrap"
                    >
                      {" "}
                      Integrations{" "}
                    </a>

                    <a
                      href="#"
                      class="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      Licenses{" "}
                    </a>
                  </nav>
                </div>
              </div>

              <div class="mt-8 border border-indigo-300 rounded-lg bg-indigo-50">
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
              </div>

              <div class="mt-8 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-base font-bold text-gray-900">Connect Apps</p>
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
              </div>
            </div>
          </div>
        </Dashboard>
      </div>
    </>
  );
}
