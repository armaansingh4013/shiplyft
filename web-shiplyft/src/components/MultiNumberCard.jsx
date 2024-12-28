import React from 'react'

const MultiNumberCard = ({data,title}) => {
   
  return (
    <>
    <div className='p-2 h-full'>
    <div class="relative bg-white rounded-xl h-full flex flex-col justify-center p-4">
        <div class="flex flex-row">
                <p class="text-sm font-semibold">{title}</p>

            <div class="absolute top-0 right-0 px-2">
                <img src="https://app.shiprocket.in/seller/assets/images/Real-time-data.svg" alt="Real-time data" class="mt-6 w-7 h-7"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-evenly mt-4">
        {data.length !== 0 ? data.map(({ title, qty }, index) => (
    <div key={index} className="md:w-1/6 w-1/3 p-2">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="text-xl font-bold">{qty}</div>
            <div className="text-xs text-gray-600">{title}</div>
        </div>
    </div>
)) : ""}

         
           
           
        </div>
    </div>
</div>

    </>
  )
}

export default MultiNumberCard
