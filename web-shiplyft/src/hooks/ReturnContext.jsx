import React, { createContext, useContext, useState } from "react";

// Create Context
const ReturnFilterContext = createContext();

// Provider Component
export const ReturnFilterProvider = ({ children }) => {
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
    <ReturnFilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </ReturnFilterContext.Provider>
  );
};

// Custom hook for consuming the context
export const useReturnFilter = () => useContext(ReturnFilterContext);
