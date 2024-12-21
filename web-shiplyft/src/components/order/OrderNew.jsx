import React, { useEffect, useState } from 'react'
import { useOrderFilter } from '../../hooks/OrderContext';
import { orderDetails } from '../../modules';
import {CubeIcon} from "@heroicons/react/24/solid";

import { toast } from'react-toastify';
const OrderNew = () => {
  const {filters,updateFilter} = useOrderFilter()
  const [data,setData] = useState([]);
  useEffect(()=>{
    const fetchOrderDetails = async () => {
      try {
        console.log(filters);
        const response = await orderDetails("New", filters.orderTime, filters.keyword, filters.category,setData);
        console.log(response);
        // setData(response);
  
        if (response.success_key === 1) {
          // Success Logic
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        // toast.error("An error occurred while processing the request.");
      }
    };
  
    fetchOrderDetails(); // Call the async function
  },[filters.orderTime, filters.keyword, filters.category])
  return (
    <div className="py-6 w-full overflow-x-scroll">
    {/* Table */}
    <table className="table-fixed w-full border-collapse">
      {/* Header */}
      <thead>
        <tr className="bg-white text-black text-sm shadow-lg rounded-md">
          <th className="p-2 md:p-3 text-left font-normal border-b w-36 rounded-s-xl">Order Details</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b">Customer Details</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b">Product Details</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b">Package Details</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b">Payment</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b">Pickup Address</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b">Status</th>
          <th className="p-2 md:p-3 text-left font-normal w-36 border-b rounded-e-md">
           Action
          </th>
        </tr>
      </thead>

        <div className="h-8"></div>
      {/* Body */}
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr
              key={index}
              className="text-black text-sm shadow-m transition even:bg-[var(--lightSecondary-color)] odd:bg-white"
            >
              <td className="p-2 md:p-3">{row.name}</td>
              <td className="p-2 md:p-3">{row.customer_name}</td>
              <td className="p-2 md:p-3">{row.items[0].item_name}</td>
              <td className="p-2 md:p-3">{row.items[0].item_code}</td>
              <td className="p-2 md:p-3">{row.grand_total}</td>
              <td className="p-2 md:p-3" dangerouslySetInnerHTML={{ __html: row.shipping_address }}></td>
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

export default OrderNew
