import React from 'react'

const NumberCard = ({bg}) => {
  return (
   <>
   <div class="flex p-2 h-full flex-wrap ">
  <div class={`w-full py-4 rounded bg-[${bg}]`}>
    <div class="rounded-lg h-full relative">
      <span class="absolute top-3 right-3">
        <img class="w-7 h-7" src="https://app.shiprocket.in/seller/assets/images/Real-time-data.svg" alt="Real-time data"/>
      </span>
      <div class="flex ms-2">
        <div class="flex items-center justify-center w-1/3">
          <img class="w-16" src="https://app.shiprocket.in/seller/assets/images/international/dashboard/order-dash.svg" alt="Today's Data"/>
        </div>
        <div class="flex flex-col justify-center w-2/3 pl-4">
          <p class="text-sm">Today's Orders</p>
          <p class="text-2xl font-semibold">0</p>
          <p class="text-sm mb-0">Yesterday<br/>0</p>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default NumberCard
