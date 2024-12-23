import React from 'react'
import Returns from "../screens/Returns"
import { ReturnFilterProvider } from '../hooks/ReturnContext'
const ReturnLayout = () => {
  return (
    <>
    <ReturnFilterProvider>
    <Returns/>
    </ReturnFilterProvider>
    </>
  )
}

export default ReturnLayout
