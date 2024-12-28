import React from 'react'
import NumberCard from '../NumberCard'
import MultiNumberCard from '../MultiNumberCard'
const Overview = () => {
  const shipmentData = [{ title: "Total Shipments", qty: 0 }, { title: "Pickup Pending", qty: 0 }, { title: "IN-Transit", qty: 0 }, { title: "Delivered", qty: 0 }, { title: "NDR Pending", qty: 0 }, { title: "RTO", qty: "0" }]
  const NDRData = [{ title: "Total NDR", qty: 0 }, { title: "Your Reattempt Request", qty: 0 }, { title: "Buyer Reattempt Request", qty: 0 }, { title: "NDR Delivered", qty: 0 }]
  const codData = [{ title: "Total COD (Last 30 Days)", qty: 0 }, { title: "COD Available", qty: 0 }, { title: "COD Pending (Greater than 8 days)", qty: 0 }, { title: "Last COD Remitted", qty: 0 }]
  return (
    <>  
    
      <header className='h-svhaa bg-gray-200'>
      <div className='flex flex-row items-center '>
        <div className='w-1/3'>
          <NumberCard bg={"--secondary-color"} />

        </div>
        <div className='w-2/3'>
          <MultiNumberCard data={shipmentData} title={"Shipment Details"} />
        </div>
      </div>

      <div className='flex flex-row  items-center'>
        <div className='w-1/3'>
          <NumberCard bg={"--secondary-color"} />

        </div>
        <div className='w-2/3'>
          <MultiNumberCard data={NDRData} title={"NDR Details"} />
        </div>
      </div>
      <div className='flex flex-row h-1/3'>
        <div className='w-1/3 h-full bg-gray-400'>
          <NumberCard bg={"--secondary-color"} />

        </div>
        <div className='w-2/3 h-full max-h-56 bg-gray-400'>
          <MultiNumberCard data={codData} title={"COD Status"} />
        </div>
      </div>






    </header>

    
    </>
  )
}

export default Overview
