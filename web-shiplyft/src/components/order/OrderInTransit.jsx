import React from 'react'
const data = [
    {
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      col4: "Data 4",
      col5: "Data 5",
      col6: "Data 6",
      col7: "Data 7",
    },
    {
      col1: "Row 2",
      col2: "Row 2",
      col3: "Row 2",
      col4: "Row 2",
      col5: "Row 2",
      col6: "Row 2",
      col7: "Row 2",
    },
  ];
const OrderInTransit = () => {
  return (
    <div className="p-6 w-full overflow-x-scroll">
    {/* Table */}
    <table className="table-fixed w-full border-collapse">
      {/* Header */}
      <thead>
        <tr className="bg-white text-black shadow-lg rounded-xl">
          <th className="p-2 md:p-3 text-left border-b w-40 rounded-s-3xl">
            Order Details
          </th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Customer Details</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Payment</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Shipping Details</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">EOD</th>
          <th className="p-2 md:p-3 text-left w-40 border-b">Status</th>
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
              <td className="p-2 md:p-3">{row.col1}</td>
              <td className="p-2 md:p-3">{row.col2}</td>
              <td className="p-2 md:p-3">{row.col3}</td>
              <td className="p-2 md:p-3">{row.col4}</td>
              <td className="p-2 md:p-3">{row.col5}</td>
              <td className="p-2 md:p-3">{row.col6}</td>
              <td className="p-2 md:p-3">{row.col7}</td>
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

export default OrderInTransit
