import React, { createContext, useContext, useState } from "react";

// Create Context
const OrderFilterContext = createContext();

// Provider Component
export const OrderFilterProvider = ({ children }) => {
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
    <OrderFilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </OrderFilterContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOrderFilter = () => useContext(OrderFilterContext);
