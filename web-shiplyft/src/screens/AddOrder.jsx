import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import DomesticAddOrder from "../layout/DomesticAddOrder";
import InternationalAddOrder from "../layout/InternationalAddOrder";

const AddOrder = () => {
  const location = useLocation();
  return (
    <>
      <div className="">
        <div className="text-xl p-4 font-bold">
          <Link
            to="/order"
            className="text-decoration-none text-black pe-2 text-2xl"
          >
            {"<"}
          </Link>
          Add Order
        </div>

        <div class="w-full pb-1  mt-3 overflow-x-auto">
          <div class="border-b border-gray-200 px-4">
            <nav class="flex -mb-px space-x-6">
              <Link
                to="/add-order"
                className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${
                  location.pathname === "/add-order"
                    ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                    : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                }`}
              >
                Domestic
              </Link>

              <Link
                to="/add-order/international"
                className={`py-2  transition-all duration-200 whitespace-nowrap text-decoration-none ${
                  location.pathname === "/add-order/international"
                    ? "text-md text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                    : "text-sm text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                }`}
              >
                International
              </Link>
            </nav>
          </div>
        </div>

        <div className="p-4">
          <Routes>
            <Route path="/*" element={<DomesticAddOrder />} />
            <Route path="international/*" element={<InternationalAddOrder />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AddOrder;
