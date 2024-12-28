import React from 'react'

const SummaryCards = () => {
  return (
 <>
 <div className="row mt-6 flex">
      <div className="col-md-12">
        <div className="pb-0 rounded-lg h-full bg-white shadow-lg relative">
          {/* Header Row */}
          <div className="row p-4">
            <div className="col-xs-6 col-md-8">
              <p className="text-lg font-bold">NDR Summary</p>
            </div>
            <div className="col-xs-6 col-md-4">
              <span className="float-end">
                <img
                  src="https://app.shiprocket.in/seller/assets/images/Real-time-data.svg"
                  alt="Real-time data"
                  width="28"
                  height="28"
                />
              </span>
            </div>
          </div>

          {/* Data Rows */}
          <div className="row flex-sb-sm justify-between">
            <div className="col-sm-6 col-md-3 col-2xl-2 m-l4 text-center px-4 py-2">
              <div className="flex flex-col border bg-gray-100">
                  <p className="font-normal bg-white border-b p-2">NDR Raised</p>
                  <p className="text-gray-900 font-bold text-xl">0</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-2xl-2 m-l4 text-center px-4 py-2">
              <div className="flex flex-col border bg-gray-100">
                  <p className="font-normal bg-white border-b p-2">NDR Raised</p>
                  <p className="text-gray-900 font-bold text-xl">0</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-2xl-2 m-l4 text-center px-4 py-2">
              <div className="flex flex-col border bg-gray-100">
                  <p className="font-normal bg-white border-b p-2">NDR Raised</p>
                  <p className="text-gray-900 font-bold text-xl">0</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-2xl-2 m-l4 text-center px-4 py-2">
              <div className="flex flex-col border bg-gray-100">
                  <p className="font-normal bg-white border-b p-2">NDR Raised</p>
                  <p className="text-gray-900 font-bold text-xl">0</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-2xl-2 m-l4 text-center px-4 py-2">
              <div className="flex flex-col border bg-gray-100">
                  <p className="font-normal bg-white border-b p-2">NDR Raised</p>
                  <p className="text-gray-900 font-bold text-xl">0</p>
                </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default SummaryCards
