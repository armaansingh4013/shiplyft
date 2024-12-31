import React, { createContext, useContext, useState } from "react";

// Create Context
const AddSingleOrderContext = createContext();

// Provider Component
export const AddSingleOrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
   "status":0,
   "products":[{"name":""}]
  });
  
  // Function to update filters
  const updateAddSingleOrder = (name, value) => {
    setOrder((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <AddSingleOrderContext.Provider value={{ order, updateAddSingleOrder }}>
      {children}
    </AddSingleOrderContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAddSingleOrder = () => useContext(AddSingleOrderContext);
