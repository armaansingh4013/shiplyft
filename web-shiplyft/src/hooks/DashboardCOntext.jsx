import React, { createContext, useContext, useState } from "react";

// Create Context
const DashboardFilterContext = createContext();

// Provider Component
export const DashboardFilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "All",
    orderTime:"1"
  });
  
  // Function to update filters
  const updateFilter = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <DashboardFilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </DashboardFilterContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDashboardFilter = () => useContext(DashboardFilterContext);
