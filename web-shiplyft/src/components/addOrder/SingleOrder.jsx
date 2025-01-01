import React, { useState } from "react";
import BuyerDetail from "./BuyerDetail";
import PickupDetail from "./OrderDetail";
import OrderDetail from "./OrderDetail";
import PickupDetails from "./PickupDetails";
import PackageDetails from "./PackageDetails";
import {
  useAddSingleOrder,
} from "../../hooks/AddSIngleOrderContext";
import { add_single_order } from "../../modules";

const SingleOrder = () => {
  const { order, updateAddSingleOrder } = useAddSingleOrder();
  let renderComponent;
  switch (order.status) {
    case 0:
      renderComponent = <BuyerDetail />;
      break;
    case 1:
      renderComponent = <PickupDetails />;
      break;
    case 2:
      renderComponent = <OrderDetail />;
      break;
    case 3:
      renderComponent = <PackageDetails />;
      break;
    default:
      renderComponent = <BuyerDetail />;
  }

  const addOrder = async()=>{
    const res = await add_single_order(order)
    console.log('====================================');
    console.log(res);
    console.log('====================================');
  }
  return (
    <>
      <div className="flex my-6">
        <sidebar className="col-2 px-2 py-4">
          <div className="">
            <div className="">
              <p className={`${order.status>=0?"":"text-gray-400"}`}>
                <span className="border border-[var(--primary-color)] rounded-full px-2 me-2 py-1"> 1 </span>
                Buyer Details
              </p>
            </div>
            <div className="">
              <p className={`${order.status>=1?"":"text-gray-400"}`}>
                <span className="border rounded-full me-2 px-2 py-1"> 2 </span>
                Pickup Details
              </p>
            </div>
            <div className="">
              <p className={`${order.status>=2?"":"text-gray-400"}`}>
                <span className="border rounded-full me-2 px-2 py-1"> 3 </span>
                Order Details
              </p>
            </div>
            <div className="">
              <p className={`${order.status>=3?"":"text-gray-400"}`}>
                <span className="border rounded-full me-2 px-2 py-1"> 4 </span>Package Details
              </p>
            </div>
          </div>
        </sidebar>

        <div className="col-10">
          <div
            cdkscrollable=""
            className="mat-tab-body-content ng-tns-c218-8 ng-trigger ng-trigger-translateTab"
            style={{ transform: "none" }}
          >
            <form className="text-sm">
              {renderComponent}

              <div className="text-end space-x-3 p-4">
              <button
                  onClick={() => {
                    updateAddSingleOrder("status", order.status-1);
                  }}
                  type="button"
                  className={`bg-[var(--primary-color)] text-white p-2 rounded ${order.status == 0?"hidden":""}`}
                >
                  
                  Back
                </button>
                <button
                  onClick={() => {
                    addOrder()
                  }}
                  type="button"
                  className={`bg-[var(--primary-color)] text-white p-2 rounded ${order.status!=3?"hidden":""}`}
                >
                  
                  Save Order
                </button>
                <button
                  onClick={() => {
                    updateAddSingleOrder("status", order.status + 1);
                  }}
                  type="button"
                  className={`bg-[var(--primary-color)] text-white p-2 rounded ${order.status==3?"hidden":""}`}
                >
                  
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOrder;
