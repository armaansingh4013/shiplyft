import React from 'react'
import { DashboardFilterProvider } from '../hooks/DashboardCOntext'
import Dashboard from '../screens/Dashboard'
const DashboardLayout = () => {
  return (
    <>
    <DashboardFilterProvider>
        <Dashboard/>
    </DashboardFilterProvider>
    </>
  )
}

export default DashboardLayout
