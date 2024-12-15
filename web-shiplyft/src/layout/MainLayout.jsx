import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { OrderFilterProvider } from '../hooks/OrderContext';

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div class="flex flex-col flex-1 xl:pl-64 w-4/5">
        <Navbar/>

    <OrderFilterProvider>
        {children}

    </OrderFilterProvider>
      </div>
    </div>
  );
};

export default MainLayout;
