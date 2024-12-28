import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import SingleOrder from "../components/addOrder/SingleOrder";

const DomesticAddOrder = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <div className="p-2 bg-white inline text-sm ">
          <div
            className={`px-3 py-1 bg-[var(--secondary-color)] inline ${
              location.pathname == "/add-order/single-order"
                ? "bg-[var(--secondary-color)]"
                : "bg-white"
            }`}
          >
            <Link
              to="/add-order/single-order"
              className={`text-decoration-none ${
                location.pathname == "/add-order/single-order"
                  ? " text-[var(--primary-color)]"
                  : "bg-white text-gray-900"
              }`}
            >
              Single Order
            </Link>
          </div>
          <div className={`px-3 py-1 bg-[var(--secondary-color)] inline ${
              location.pathname == "/add-order/bulk-order"
                ? "bg-[var(--secondary-color)]"
                : "bg-white"
            }`}>
          <Link
            to="/add-order/bulk-order"
            className={`text-decoration-none ${
              location.pathname == "/add-order/bulk-order"
                ? "text-[var(--primary-color)]"
                : "bg-white text-gray-900"
            }`}
          >
            Bulk Order
          </Link>
          </div>
          <div className={`px-3 py-1 bg-[var(--secondary-color)] inline ${
              location.pathname == "/add-order/quick-shipment"
                ? "bg-[var(--secondary-color)]"
                : "bg-white"
            }`}>
          <Link
            to="/add-order/quick-shipment"
            className={`text-decoration-none ${
              location.pathname == "/add-order/quick-shipment"
                ? " text-[var(--primary-color)]"
                : "bg-white text-gray-900"
            }`}
          >
            Quick Shipment
          </Link>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="single-order" element={<SingleOrder />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DomesticAddOrder;
