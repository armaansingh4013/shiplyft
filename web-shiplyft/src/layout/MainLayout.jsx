import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div class="flex flex-col flex-1 xl:pl-64">
        <Navbar/>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
