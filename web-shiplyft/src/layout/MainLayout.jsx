import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div class="flex flex-col flex-1 h-screen bg-gray-100 overflow-y-scroll w-5/6">
        <Navbar/>

    
        {children}

      </div>
    </div>
  );
};

export default MainLayout;
