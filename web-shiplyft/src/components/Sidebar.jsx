import React, { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const handleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-64" : "w-20"
      } h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className={`text-lg font-bold ${!isExpanded && "hidden"}`}>MyApp</h1>
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          {isExpanded ? "<" : ">"}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {/* Dashboard */}
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <span>Dashboard</span>
          </li>

          {/* Expandable Menu */}
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <div onClick={() => handleSubMenu("services")} className="flex justify-between">
              <span>Services</span>
              {openMenu === "services" ? "-" : "+"}
            </div>
            {/* Submenu */}
            {openMenu === "services" && (
              <ul className="ml-4">
                <li className="p-2 hover:bg-gray-600 cursor-pointer">Web Development</li>
                <li className="p-2 hover:bg-gray-600 cursor-pointer">App Development</li>
                <li className="p-2 hover:bg-gray-600 cursor-pointer">SEO Services</li>
              </ul>
            )}
          </li>

          {/* Profile */}
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <span>Profile</span>
          </li>

          {/* Settings */}
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <span>Settings</span>
          </li>

          {/* Expandable Menu */}
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <div onClick={() => handleSubMenu("projects")} className="flex justify-between">
              <span>Projects</span>
              {openMenu === "projects" ? "-" : "+"}
            </div>
            {/* Submenu */}
            {openMenu === "projects" && (
              <ul className="ml-4">
                <li className="p-2 hover:bg-gray-600 cursor-pointer">Project A</li>
                <li className="p-2 hover:bg-gray-600 cursor-pointer">Project B</li>
                <li className="p-2 hover:bg-gray-600 cursor-pointer">Project C</li>
              </ul>
            )}
          </li>

          {/* Logout */}
          <li className="p-2 hover:bg-gray-700 cursor-pointer mt-auto">
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
