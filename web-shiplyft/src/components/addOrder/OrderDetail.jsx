import React, { useState } from "react";
import OrderDetailProduct from "./OrderDetailProduct";
import {
  useAddSingleOrder,
} from "../../hooks/AddSIngleOrderContext";

const OrderDetail = () => {
  const [orderReseller,setOrderReseller] = useState(false);
  const [taxCharges,setTaxCharges] = useState(false);
  const {order,updateAddSingleOrder} = useAddSingleOrder()
  const productTotal = order.order_items.reduce((sum, item) => sum + (item.selling_price*item.units), 0);
  const otherCharges = 
  Number(order.shipping_charges || 0) +
  Number(order.giftwrap_charges || 0) +
  Number(order.transaction_charges || 0) - 
  Number(order.total_discount || 0);
  return (
    <>
      <h5>Order Details</h5>
      <div className="p-5 bg-white textsm">
        <div className="row">
          <div className="col-lg-3 col-md-6 custom_margin_bottom">
            <label className="mb-2">
              Order ID
              <span className="text-gray-400 m-2">(Auto Generated)</span>
            </label>
            <div className="border-red">
              <input
                type="text"
                placeholder={"0000001"}
                formcontrolname="order_id"
                className="form-control"
              />
            </div>
            {/**/}
          </div>
          <div className="col-lg-3 col-md-6 custom_margin_bottom position-relative">
            <label className="sfpro-medium fs-12px text-grayish-brown lh-16px letterspacing024px mb-2">
              Order Date
            </label>
            <input
              type="date"
              placeholder="Default Today's date"
              formcontrolname="order_date"
              onkeydown="return false"
              className="form-control ng-pristine ng-valid ng-touched"
              max="2024-12-28"
              min="2024-06-28"
              value={order.order_date}
              onChange={(e)=>{updateAddSingleOrder("order_date",e.target.value)}}
            />
            <img src="assets/images/calenderr.svg" alt="" className="" />
          </div>
          <div className="col-lg-3 col-md-6 custom_margin_bottom ition-relative">
            <div className="flex items-center mb-2">
              <label>Order Channel</label>
              <img
                data-src="assets/images/text_info.svg"
                className="ms-2"
                src="https://app.shiprocket.in/seller/assets/images/text_info.svg"
              />
            </div>
            <select
              name="channel_id"
              id="channel_id"
              formcontrolname="channel_id"
              className="form-control"
              data-gtm-form-interact-field-id={18}
            >
              {/**/}
              <option value={5865955} className="ng-star-inserted" disabled>
                --Select--
              </option>
              <option
                value={0}
                className="hyperlink-purple ng-star-inserted"
                style={{}}
              >
                {" "}
                Add Custom Channel : Instagram{" "}
              </option>
              <option
                value={-1}
                className="hyperlink-purple ng-star-inserted"
                style={{}}
              >
                {" "}
                Add Custom Channel : Facebook{" "}
              </option>
              <option
                value={-2}
                className="hyperlink-purple ng-star-inserted"
                style={{}}
              >
                {" "}
                Add Custom Channel : WhatsApp{" "}
              </option>
              {/**/}
            </select>
            {/**/}
          </div>
          {/**/}
          {/**/}
        </div>
        <div>
          <p onClick={()=>{setOrderReseller(!orderReseller)}} className=" cursor-pointer text-xs my-4">
            <span className="text-[var(--primary-color)]">
              + Add Order Tag, Reseller's Name
            </span>
            {/**/}
            {/**/}
            <img
              data-src="assets/images/bluedownarrow.svg"
              alt="v"
              className="inline me-2 mt-0 rotate-img"
              style={{ marginTop: "-4px", marginLeft: "-2px" }}
              src="https://app.shiprocket.in/seller/assets/images/bluedownarrow.svg"
            />
            <span className="text-gray-400">(Optional)</span>
          </p>
          <div className={`flex space-x-6 mb-4 ${orderReseller?"":"hidden"}`}>
            <div className="col-xl-6 col-md-4 custom_width">
              <label className="sfpro-medium fs-12px text-grayish-brown lh-16px letterspacing024px mb-2">
                Order Tag
              </label>
              <br />
              <input
                className="form-control"
                autoComplete="off"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-haspopup="true"
                id="mat-chip-list-input-1"
                value={order.order_tag}
                onChange={(e)=>{updateAddSingleOrder("order_tag",e.target.value)}}
              />
            </div>
            <div className="col-xl-3 col-md-4 custom_width ng-star-inserted">
              <label className="mb-2">
                Reseller's Name{" "}
                <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                name="reseller_name"
                placeholder="Reseller's Name"
                formcontrolname="reseller_name"
                maxLength={90}
                className="form-control ng-untouched ng-pristine ng-valid"
                value={order.reseller_name}
                onChange={(e)=>{updateAddSingleOrder("reseller_nme",e.target.value)}}
              />
            </div>
          </div>
        </div>

        <div className="border-bottom" />

        <h6 className="pt-4">Product Details</h6>

          {order.order_items.map((product,idx) => (
    <OrderDetailProduct key={idx} idx={idx} />
))}
        
          <button onClick={(e)=>{e.preventDefault();updateAddSingleOrder("order_items",[...order.order_items,{}])}} className="border-2 mt-4 p-2 rounded text-white bg-[var(--primary-color)]">+ Add Another Product </button>
        {/**/}
        <div className="mt-4 ng-star-inserted">
          <div className="row">
            <p className="regular mb-1">Payment Details</p>
            <p className="text-xs text-gray-400 mb-3">
              Select mode of payment that your buyer has chosen for the order
            </p>
            {/**/}
            <div className="flex space-x-4">
                <label
                  htmlFor="prepaid"
                  className="form-check-label custom-radiobtn mb-4 label pl-2-5rem"
                  data-gtm-vis-first-on-screen9056945_42={30539990}
                >
                  <input
                    type="radio"
                    name="payment_method"
                    formcontrolname="payment_method"
                    id="prepaid"
                    defaultValue="prepaid"
                    className=""
                    data-gtm-form-interact-field-id={16}
                    checked ={order.payment_method === "prepaid"}
                    onChange={(e)=>{updateAddSingleOrder("payment_method",e.target.value)}}
                    />
                  <span className="checkmark" /> Prepaid{" "}
                  <img
                    appsrpopover=""
                    width={12}
                    height={12}
                    src="assets/images/text_info.svg"
                    alt=""
                    className="ms-2"
                    data-bs-original-title=""
                    title=""
                  />
                </label>
              
                <label
                  htmlFor="COD"
                  className="form-check-label custom-radiobtn label pl-2-5rem"
                >
                  <input
                    type="radio"
                    name="payment_method"
                    formcontrolname="payment_method"
                    id="COD"
                    defaultValue="COD"
                    className="form-check-input ng-dirty ng-valid ng-touched"
                    data-gtm-form-interact-field-id={17}
                    checked ={order.payment_method === "COD"}
                    onChange={(e)=>{updateAddSingleOrder("payment_method",e.target.value)}}
                  />
                  <span className="checkmark" /> Cash On Delivery{" "}
                  <img
                    appsrpopover=""
                    width={12}
                    height={12}
                    src="assets/images/text_info.svg"
                    alt=""
                    className="ms-2"
                    data-bs-original-title=""
                    title=""
                  />
                </label>
              {/**/}
            </div>
            {/**/}
          </div>

          <div>
            {/**/}
            <div
            >
              <p onClick={()=>{setTaxCharges(!taxCharges)}} className="cursor-pointer flex text-[var(--primary-color)]">
                
                + Add Shipping Charges, Giftwrap, Transaction fee
                <img
                  apppathcorrection=""
                  data-src="assets/images/arrow_blue_down.svg"
                  alt="arrow-down"
                  className="me-2 rotate-img"
                  src="https://app.shiprocket.in/seller/assets/images/arrow_blue_down.svg"
                />
                <span className="text-gray-400">(Optional)</span>
              </p>
              <div className={`${taxCharges?"":"hidden"}`}>
                <div className="flex flex-wrap">
                  <div className="col-md-4 col-lg-3 me-4 col-xl-2">
                    <label htmlFor="" className="mb-2 shipcharge">
                      Shipping Charges
                    </label>
                    <div className="flex border rounded">
                      <span className="w-1/5 rounded-s text-center p-2 bg-gray-200">
                        
                          ₹
                      </span>
                      <input
                        apptwodigitdecimanumber=""
                        type="text"
                        placeholder={0.0}
                        name="shipping_charges"
                        formcontrolname="shipping_charges"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        maxLength={15}
                        className="w-4/5 rounded-e p-2"
                        value={order.shipping_charges}
                        onChange={(e)=>{updateAddSingleOrder("shipping_charges",e.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 me-4 col-xl-2">
                    <label htmlFor="" className="mb-2 shipcharge">
                      Gift Wrap
                    </label>
                    <div className="flex border rounded">
                      <span className="p-2 w-1/5 rounded-s bg-gray-200">
                        
                          ₹
                        
                      </span>
                      <input
                        apptwodigitdecimanumber=""
                        type="text"
                        placeholder={0.0}
                        formcontrolname="giftwrap_charges"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        maxLength={15}
                        className="rounded-e p-2 w-4/5"
                        value={order.giftwrap_charges}
                        onChange={(e)=>{updateAddSingleOrder("giftwrap_charges",e.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 me-4 col-xl-2">
                    <label htmlFor="" className="mb-2 flex">
                      Transaction Fee{" "}
                      <img
                        appsrpopover=""
                        apppathcorrection=""
                        width={12}
                        height={12}
                        data-src="assets/images/text_info.svg"
                        alt=""
                        className="ms-2"
                        data-bs-original-title=""
                        title=""
                        src="https://app.shiprocket.in/seller/assets/images/text_info.svg"
                      />
                    </label>
                    <div className="flex rounded border">
                      <span className="rounded-s bg-gray-200 w-1/5 p-2">
                        
                          ₹
                       
                      </span>
                      <input
                        apptwodigitdecimanumber=""
                        placeholder={0.0}
                        type="text"
                        formcontrolname="transaction_charges"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        maxLength={15}
                        className="w-4/5 rounded-e p-2"
                        value={order.transaction_charges}
                        onChange={(e)=>{updateAddSingleOrder("transaction_charges",e.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 me-4 col-xl-2">
                    <label htmlFor="" className="mb-2 flex">
                      Discounts{" "}
                      <img
                        appsrpopover=""
                        apppathcorrection=""
                        width={12}
                        height={12}
                        data-src="assets/images/text_info.svg"
                        alt=""
                        className="ms-2"
                        data-bs-original-title=""
                        title=""
                        src="https://app.shiprocket.in/seller/assets/images/text_info.svg"
                      />
                    </label>
                    <div className="rounded border flex">
                      <span className="bg-gray-200 p-2 rounded-s  w-1/5">
                        
                          ₹
                        </span>
                      
                      <input
                        apptwodigitdecimanumber=""
                        placeholder={0.0}
                        type="text"
                        formcontrolname="total_discount"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        maxLength={15}
                        className="rounded-e w-4/5 p-2"
                        value={order.total_discount}
                        onChange={(e)=>{updateAddSingleOrder("total_discount",e.target.value)}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/**/}
            </div>
            <div className="bg-[var(--secondary-color)] rounded p-4 my-4">
              <div className="row">
                <div className="col-6">
                  <p className="fs-14px"> Sub-total for Product </p>
                </div>
                <div className="col-6">
                  <p className="text-end"> ₹ {productTotal}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="fs-14px">Other Charges</p>
                </div>
                <div className="col-6">
                  <p className="text-end"> ₹ {otherCharges} </p>
                </div>
              </div>
              {/**/}
              <div className="row sfpro-medium text-light-black fs-14px mt-3">
                <div className="col-6">
                  <p className="mb-0 fs-14px">Total Order Value</p>
                </div>
                <div className="col-6">
                  <p className="mb-0 text-end"> ₹ {productTotal+otherCharges} </p>
                </div>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        {/**/}
      </div>
      {/**/}
    </>
  );
};

export default OrderDetail;
