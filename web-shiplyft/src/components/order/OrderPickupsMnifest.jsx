import React, { useEffect, useState } from 'react'
import { useOrderFilter } from '../../hooks/OrderContext';

import {CubeIcon} from "@heroicons/react/24/solid";

import { toast } from'react-toastify';
const OrderPickupsManifests = () => {
  const {filters,updateFilter} = useOrderFilter()
  const [data,setData] = useState({});
  useEffect(()=>{
    const fetchOrderDetails = async () => {
      try {
        console.log(filters);
        const response = await orderDetails("Pickups & Manifests", filters.orderTime, filters.keyword, filters.category,setData);
        console.log(response);
        // setData(response);
  
        if (response.success_key === 1) {
          // Success Logic
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("An error occurred while processing the request.");
      }
    };
  
    fetchOrderDetails(); // Call the async function
  },[filters.orderTime, filters.keyword, filters.category])
  return (
    <div className="p-6 w-full overflow-x-scroll">
    {/* Table */}
    <table className="table-fixed w-full border-collapse">
      {/* Header */}
      <thead>
        <tr className="bg-white text-black shadow-lg rounded-xl">
          <th className="p-2 md:p-3 text-left border-b w-40 rounded-s-3xl">
            Pickup ID/Pickup Request Date
          </th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Shipment Count</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Pickup Address</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Parent Courier</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Pickup Status</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Manifest Details</th>
          <th className="p-2 md:p-3 text-left w-40 border-b rounded-e-3xl">
           Action
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
             <td className="p-2 md:p-3">{row.name}</td>
              <td className="p-2 md:p-3">{row.customer_name}</td>
              <td className="p-2 md:p-3">{row.items[0].item_name}</td>
              <td className="p-2 md:p-3">{row.grand_total}</td>
              <td className="p-2 md:p-3">{row.shipping_address}</td>
              <td className="p-2 md:p-3">{row.custom_custom_status}</td>
              <td className="p-2 md:p-3">{row.custom_order_category}</td>
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
  )
}

export default OrderPickupsManifests
