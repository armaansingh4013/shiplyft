import React, { useState } from 'react'
import { useAddSingleOrder } from '../../hooks/AddSIngleOrderContext'

const OrderDetailProduct = ({idx}) => {
    const {order,updateAddSingleOrder} = useAddSingleOrder()
    const [tax,setTax]= useState(false)
  return (
    <div
          className="pt-2 "
        >
          {/**/}
          {/**/}
          <div className="border-bottom clearfix mb-17rem ng-star-inserted ng-invalid ng-touched ng-dirty">
            <div className="row flex items-end">
              <div className="col-xl-4 col-12 mb-3 mb-xl-0 ">
                <label className="mb-2">Product {idx+1} Name </label>
                <div className="border-1 p-2 rounded">
                  <input
                    type="text"
                    placeholder="Enter or search your product name"
                    autoComplete="off"
                    name="productname0"
                    id="productname0"
                    data-gtm-form-interact-field-id={13}
                  />
                </div>
              </div>

              <div className="col-xl-2 col-sm-6 col-12 mb-3 mb-xl-0 ">
                <label className="sfpro-medium fs-12px text-grayish-brown lh-16px letterspacing024px mb-2">
                  Unit Price
                </label>
                <div className="flex border-1 rounded">
                  <span className="p-2 bg-gray-200 w-1/5 rounded-s">₹</span>
                  <input
                    apptwodigitdecimanumber=""
                    type="text"
                    placeholder={0.0}
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    maxLength={10}
                    className="w-4/5 rounded-e"
                    id="selling_price0"
                    data-gtm-form-interact-field-id={14}
                  />
                </div>
              </div>
              {/**/}
              <div className="col-xl-2 col-sm-6 col-12 mb-3 mb-xl-0">
                <label className="mb-2">Quantity</label>
                <div className="flex border-1 rounded">
                  <span className="bg-gray-200 p-2 w-1/5 rounded-s">-</span>

                  <input
                    type="text"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                    maxLength={10}
                    className="p-2 w-3/5"
                    id="quantity0"
                  />
                  <span className="cursor-pointer w-1/5 p-2 bg-gray-200 rounded-e">
                    +
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-10 pe-0 position-relative ng-star-inserted">
                <label className="sfpro-medium fs-12px text-grayish-brown lh-16px letterspacing024px mb-2">
                  Product Category
                </label>
                <div className="border-red">
                  <input
                    type="text"
                    placeholder="Edit Product Category"
                    autoComplete="off"
                    className="form-control"
                    name="productcategory0"
                    id="productcategory0"
                    data-gtm-form-interact-field-id={15}
                  />
                  <div
                    className="suggestions"
                    style={{ display: "none" }}
                    id="isShowCategoryAutoSuggestion0"
                  >
                    <ul className="searchlist">{/**/}</ul>
                  </div>
                </div>
              </div>
              {/**/}
              <div className="col-2 col-lg-1">
                <button
                  className="m-2"
                  onClick={(e)=>{e.preventDefault();updateAddSingleOrder("products",order.products.filter((_, index) => index !== idx))}}
                >
                  <img
                    apppathcorrection=""
                    data-src="assets/images/trash_red.svg"
                    alt=""
                    src="https://app.shiprocket.in/seller/assets/images/trash_red.svg"
                  />
                </button>
              </div>
              {/**/}
              {/**/}
            </div>
            <div
              className="py-6"
            
            >
              <p onClick={()=>{setTax(!tax)}} className="flex text-xs cursor-pointer">
                <span className="text-[var(--primary-color)]">
                  + Add HSN Code, SKU, Tax Rate and Discount
                </span>
                {/**/}
                {/**/}
                <img
                  apppathcorrection=""
                  data-src="assets/images/arrow_blue_down.svg"
                  alt="arrow-down"
                  style={{
                    marginTop: "-4px",
                    marginLeft: "-2px",
                    transform: "rotate(180deg)",
                  }}
                  className="me-2 mt-0 rotate-img0"
                  src="https://app.shiprocket.in/seller/assets/images/arrow_blue_down.svg"
                />
                <span className="text-gray-400">(Optional)</span>
              </p>
              <div
                className={`mt-3 w-full ${tax?"":"hidden"}`}
                
              >
                <div className="flex flex-wrap w-full">
                  <div className="col-lg-4 me-4 my-2">
                    <label className="mb-2 flex">
                      HSN Code
                      <img
                        appsrpopover=""
                        apppathcorrection=""
                        data-src="/assets/images/text_info.svg"
                        alt="info"
                        className="info_icon_margin"
                        data-bs-original-title=""
                        title=""
                        src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                      />
                      <span className="text-xs">
                        <a
                          href="https://support.shiprocket.in/support/solutions/articles/43000480752-what-is-a-hsn-code-why-do-we-require-it-?_gl=1*1823m00*_gcl_aw*R0NMLjE3MzQyNTgwNTcuQ2p3S0NBaUFtZnE2QmhBc0Vpd0FYMWpzWjVxZkp4NmJ1NUJQd2dsMFY4U1RlWU1LQ3ZyZzhzNHBUTHlibGxLcTlybDZreHgxZE9LLXp4b0NMc3NRQXZEX0J3RQ..*_gcl_au*MTg3MzU0MTM3NS4xNzMzODQyMjU3LjEzMzc0NjAxMDYuMTczNTQwOTUyNi4xNzM1NDA5NjU1"
                          target="_blank"
                          className="text-blue text-decoration-none"
                        >
                          Why is it important?
                        </a>
                      </span>
                    </label>
                    <div className="border-red">
                      <input
                        type="text"
                        name="hsn"
                        autoComplete="new-text"
                        oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                        maxLength={15}
                        placeholder="Enter your product HSN code"
                        className="form-control"
                        id="hsn0"
                      />
                    </div>
                    <label className="mt-2 text-xs">
                      Don't know your HSN Code?{" "}
                      <a
                        href="https://cleartax.in/s/gst-hsn-lookup"
                        target="_blank"
                        className="sfpro-medium hyperlink-purple fs-10px lh-16px"
                      >
                        Know here
                      </a>
                    </label>
                  </div>
                  {/**/}
                  <div className="col-lg-3 me-4 my-2">
                    <label className="mb-2 flex ">
                      SKU
                      <img
                        data-src="/assets/images/text_info.svg"
                        alt="info"
                        className="mx-2"
                        data-bs-original-title=""
                        title=""
                        src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                      />
                      <span style={{ color: "#a0a0a0" }} />
                    </label>
                    <div className="border-red">
                      <input
                        type="text"
                        autoComplete="new-text"
                        placeholder="Enter Product SKU"
                        className="form-control"
                        id="sku0"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 me-4 my-2">
                    <label className="sfpro-medium fs-12px text-grayish-brown lh-16px letterspacing024px mb-2">
                      Tax Rate{" "}
                    </label>
                    <div className="border-red">
                      <input
                        type="text"
                        oninput="this.value=this.value.replace(/[^0-9.]/g, '')"
                        autoComplete="new-text"
                        placeholder="%"
                        maxLength={15}
                        className="form-control"
                        id="tax0"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 me-4 my-2">
                    <label className="mb-2 flex">
                      Product Discount
                      <img
                        data-src="/assets/images/text_info.svg"
                        alt="info"
                        className="mx-2
                              "
                        data-bs-original-title=""
                        title=""
                        src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                      />
                    </label>
                    <div className="border-red">
                      <input
                        apptwodigitdecimanumber=""
                        type="text"
                        autoComplete="new-text"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        placeholder={0.0}
                        maxLength={15}
                        className="form-control"
                        id="discount0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**/}
          </div>
          {/**/}
        </div>
  )
}

export default OrderDetailProduct
