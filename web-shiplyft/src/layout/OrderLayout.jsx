import React from 'react'
import { OrderFilterProvider } from '../hooks/OrderContext'
import Order from '../screens/Order'

const OrderLayout = () => {
  return (
    <>
    
        <OrderFilterProvider>
        <Order/>
        </OrderFilterProvider>
    </>
  )
}

export default OrderLayout
