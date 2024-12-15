import React from "react";
import homeicon from "../assets/svg/home.svg";
import dashboardicon from "../assets/svg/dashboard.svg";
import ordericon from "../assets/svg/order.svg";
import returnicon from "../assets/svg/return.svg";
import settingicon from "../assets/svg/setting.svg";
import toolicon from "../assets/svg/tool.svg";
import weightManagementicon from "../assets/svg/weightmanagement.svg";
import billingicon from "../assets/svg/billing.svg";
import customersupporticon from "../assets/svg/customersupport.svg"

import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="hidden w-1/5 xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-[var(--primary-dashboard-color)]">
        <div className="flex items-center flex-shrink-0 px-4 text-3xl font-bold text-white">
          LOGO HERE
        </div>

        <div className="flex flex-col flex-1 px-3 mt-8 ">
          <div className="space-y-4">
            <nav className="flex-1 space-y-2">
              <Link
                to="/home"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={homeicon} alt="Home Icon" className="w-5 h-5 mr-3" />
                Home
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={dashboardicon} alt="Dashboard Icon" className="w-5 h-5 mr-3" />
                Dashboard
              </Link>

              <Link
                to="/order"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <ShoppingCartIcon className="w-5 h-5 fill-white group-hover:fill-[#DD675B] mr-3" />
                Orders
              </Link>

              <Link
                to="/return"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={returnicon} alt="Return Icon" className="w-5 h-5 mr-3" />
                Returns
              </Link>

              <Link
                to="/weight-management"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img
                  src={weightManagementicon}
                  alt="Weight Management Icon"
                  className="w-5 h-5 mr-3"
                />
                Weight Management
              </Link>

              <Link
                to="/tools"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={toolicon} alt="Tools Icon" className="w-5 h-5 mr-3" />
                Tools
              </Link>

              <Link
                to="/billing"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={billingicon} alt="Billing Icon" className="w-5 h-5 mr-3" />
                Billing
              </Link>

              <Link
                to="/setting"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={settingicon} alt="Setting Icon" className="w-5 h-5 mr-3" />
                Setting
              </Link>

              <Link
                to="/customer-support"
                className="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group text-decoration-none"
              >
                <img src={customersupporticon} alt="Setting Icon" className="w-5 h-5 mr-3" />
                CustomerSupport
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;






// import React from "react";
// import homeicon from "../assets/svg/home.svg";
// import dashboardicon from "../assets/svg/dashboard.svg";
// import ordericon from "../assets/svg/order.svg";
// import returnicon from "../assets/svg/return.svg";
// import settingicon from "../assets/svg/setting.svg";
// import toolicon from "../assets/svg/tool.svg";
// import weightManagementicon from "../assets/svg/weightmanagement.svg";
// import billingicon from "../assets/svg/billing.svg";

// import { Link } from "react-router-dom";
// import {
//   HomeIcon,
//   MagnifyingGlassIcon as SearchIcon,
//   ArrowPathIcon as SyncIcon,
//   ShoppingCartIcon,
//   CubeIcon,
//   EyeSlashIcon,
// } from "@heroicons/react/24/solid";
// const Sidebar = () => {
//   return (
//     <div class="hidden xl:flex xl:w-64 xl:flex-col xl:fixed xl:inset-y-0">
//       <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-[var(--primary-dashboard-color)]">
//         <div class="flex items-center flex-shrink-0 px-4 text-3xl font-bold text-white">
//           {/* <img class="w-auto h-8 text-white" src="" alt="Logo Here" /> */}
//           LOGO HERE
//         </div>

//         <div class="flex flex-col flex-1 px-3 mt-8 ">
//           <div class="space-y-4">
//             <nav class="flex-1 space-y-2 ">
//               <Link
//                 to="/home"
//                 href="#"
//                 title=""
//                 class="flex items-center text-decoration-none px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <homeicon />
//                 Home
//               </Link>

//               <Link
//                 to="/dashboard"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <dashboardicon />
//                 Dashboard
//               </Link>
//               <Link
//                 to="/order"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <ShoppingCartIcon className="w-5 h-5 fill-white group-hover:fill-[#DD675B]"/>
//                 Orders
//               </Link>

//               <Link
//                to="/return"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 Returns
//               </Link>

//               <Link
//                to="/weight-management"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <div className="flex justify-between w-full">
//                   <p>Weight Management</p>
//                   <p className="text-sm leading-none">&#11167;</p>
//                 </div>
//               </Link>

//               <Link
//                to="/tools"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <div className="flex justify-between w-full">
//                   <p>Tools</p>
//                   <p className="text-sm leading-none">&#11167;</p>
//                 </div>
//               </Link>

//               <Link
//                to="/billing"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <div className="flex justify-between w-full">
//                   <p>Billing</p>
//                   <p className="text-sm leading-none">&#11167;</p>
//                 </div>
//               </Link>

//               <Link
//                to="/setting"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 <div className="flex justify-between w-full">
//                   <p>Setting</p>
//                   <p className="text-sm leading-none">&#11167;</p>
//                 </div>
//               </Link>
//               <Link
//                to="/customer-support"
//                 href="#"
//                 class="flex items-center px-4 py-2.5 text-sm font-medium text-[#FFFFFF] hover:text-[var(--primary-dashboard-color)] transition-all duration-200 hover:bg-white rounded-lg group"
//               >
//                 Customer Support
//               </Link>
//             </nav>
//           </div>

//           {/* <div class="pb-4 mt-auto">
//           <button
//             type="button"
//             class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700"
//           >
//             <img
//               class="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
//               src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-female.png"
//               alt=""
//             />
//             Mariana Jones
//             <svg
//               class="w-5 h-5 ml-auto"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//               />
//             </svg>
//           </button>
//         </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
