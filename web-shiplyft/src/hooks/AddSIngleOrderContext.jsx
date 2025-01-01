import React, { createContext, useContext, useState } from "react";

// Create Context
const AddSingleOrderContext = createContext();

// Provider Component
export const AddSingleOrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
   "status":0,
   "products":[{"name":""}],        
    "order_id": "5522584486",
    "isd_code": "+91",
    "billing_isd_code": "",
    "order_date": "2024-12-28",
    "channel_id": "5865955",
    "billing_customer_name": "Rakesh",
    "billing_last_name": "Singh",
    "billing_address": "Billing address",
    "billing_address_2": "Billing address 2",
    "billing_city": "Kangra",
    "billing_state": "Himachal",
    "billing_country": "India",
    "billing_pincode": "177034",
    "billing_email": "rakesh@gmail.com",
    "billing_phone": "7876178761",
    "landmark": "test",
    "latitude": "214612132",
    "longitude": "565353535",
    "shipping_is_billing": "1",
    "shipping_customer_name": "Armaan Singh",
    "shipping_last_name": "Pal",
    "shipping_address": "4T Nangal Township",
    "shipping_address_2": "Shipping address 2",
    "shipping_city": "Rupnagar",
    "order_type": "Sales",
    "shipping_country": "India",
    "shipping_pincode": "140124",
    "shipping_state": "Punjab",
    "shipping_email": "noreply@shiprocket.com",
    "product_category": "product category",
    "shipping_phone": "8091104621",
    "shipping_alternate_phone":"12312311231",
    "billing_alternate_phone": "9817098170",
    "order_items": [
      {
        "name": "Iphone",
        "units":"5",
        "selling_price": "12000000",
        "category_name": "Others",
        "hsn": "15622",
        "sku": "YBHL1734625",
        "tax_amount": "123",
        "discount": "400",
        "product_description": "360",
        "optionalvaluestatus": "Fetched from product tshirt",
        "product_id":"Iphone",
        "caetgroy_code": "21454545454",
        "category_id": "1234685"
    }
    ],
    "payment_method": "prepaid",
    "shipping_charges": "123",
    "giftwrap_charges": "460",
    "transaction_charges": "20",
    "total_discount": "20",
    "sub_total": "120",
    "weight": "12",
    "length": "10",
    "breadth": "101",
    "height": "101",
    "pickup_location_id": "6798865",
    "reseller_name": "ajay",
    "company_name": "shiplyft",
    "ewaybill_no": "2323232",
    "customer_gstin": "32356563232",
    "is_order_revamp": "1",
    "is_document": "1",
    "order_tag": "order tag",
    "delivery_challan": "1",
    "is_web": "1",
    "is_insurance_opt": "1",
    "purpose_of_shipment": "purpose of shipment",
    "currency": "INR"
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
