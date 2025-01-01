import React, { useState } from "react";

const PickupDetails = () => {
  const [showRtoSupplier,setShowRtoSupplier] = useState(false);
  return (
    <>
      <div className="addletterspacing ng-star-inserted">
        <h6 className="">
          {" "}
          Add New Pick Up Address
          <span className="float-end">
            <img
              apppathcorrection=""
              width={12}
              height={12}
              data-src="/assets/images/cross.svg"
              alt=""
              className="cursor-pointer"
              src="https://app.shiprocket.in/seller//assets/images/cross.svg"
            />
          </span>
        </h6>
        <hr className="custom_hr" />
        <form className="ng-untouched ng-pristine ng-invalid bg-white p-4">
          <div>
            <div className="row">
              <div className="col-lg-3 custom_margin_b">
                <p className="mb-2 flex">
                  {" "}
                  Tag this address as{" "}
                  <img
                    appsrpopover=""
                    apppathcorrection=""
                    width={12}
                    height={12}
                    data-src="/assets/images/text_info.svg"
                    alt=""
                    className="ms-2"
                    data-bs-original-title=""
                    title=""
                    src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                  />
                </p>
              </div>
              <div className="col-lg-8">
                <ul className="flex justify-evenly   ">
                  <li className="w-1/5">
                    <button type="button" className="w-full rounded-3xl border">
                      Home
                    </button>
                  </li>
                  <li className="w-1/5">
                    <button
                      type="button"
                      className="w-full rounded-full border"
                    >
                      Work
                    </button>
                  </li>
                  <li className="w-1/5">
                    <button type="button" className="w-full rounded-3xl border">
                      {" "}
                      Warehouse{" "}
                    </button>
                  </li>
                  <li className="w-1/5">
                    <button type="button" className="w-full rounded-3xl border">
                      {" "}
                      Other{" "}
                    </button>
                  </li>
                  <li>
                    <div className="form-group"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="custom_hr mt-3" />
          <div>
            <h6 className="mb-3 mt-4">
              Contact information for this location{" "}
            </h6>
            <div className="row mt-2">
              <div className="col-md-3 mb-3">
                <label>Contact Person</label>
                <input
                  type="text"
                  placeholder="Name of the person to be contacted"
                  formcontrolname="name"
                  oninput="this.value=this.value.replace(/[^A-Za-z. ]/g,'')"
                  maxLength={30}
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-invalid"
                />
              </div>
              <div className="col-md-3">
                <label className="flex">
                  Contact Number{" "}
                  <img
                    appsrpopover=""
                    apppathcorrection=""
                    width={12}
                    height={12}
                    data-src="/assets/images/text_info.svg"
                    alt=""
                    className="ms-2"
                    data-bs-original-title=""
                    title=""
                    src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Enter 10 digit mobile number"
                  formcontrolname="phone"
                  maxLength={10}
                  onkeypress="if(this.value.length==10) return false;"
                  oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-invalid"
                />
              </div>
              <div className="col-md-3">
                <label>Email Address</label>
                <input
                  type="text"
                  placeholder="i.e acd@gmail.com"
                  formcontrolname="email"
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-invalid"
                />
              </div>
              <div className="col-md-3">
                <label className="flex">
                  Alternate Phone No.{" "}
                  <span className="text-gray-400">(Optional)</span>
                  <img
                    appsrpopover=""
                    apppathcorrection=""
                    width={12}
                    height={12}
                    data-src="/assets/images/text_info.svg"
                    alt=""
                    className="ms-2"
                    data-bs-original-title=""
                    title=""
                    src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Enter 10 digit mobile number"
                  formcontrolname="alternate_phone"
                  onkeypress="if(this.value.length==10) return false;"
                  oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-valid"
                />
              </div>
            </div>
            <hr className="custom_hr" />
            <h6 className="mt-4 mb-3">
              {" "}
              How can the delivery person reach the address?{" "}
            </h6>
            <div className="row">
              <div className="col-md-6 my-2">
                <label>Complete address</label>
                <input
                  type="text"
                  placeholder="House/Floor No., Building Name or Street, Locality  "
                  formcontrolname="address"
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-invalid"
                />
              </div>
              <div className="col-md-6 my-2">
                <label>Landmark</label>
                <input
                  type="text"
                  placeholder="Any nearby post office, market,Hospital as the landmark "
                  formcontrolname="address_2"
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-valid"
                />
              </div>
              <div className="col-md-3 my-2">
                <label>Pincode</label>
                <input
                  type="text"
                  placeholder="Add Pincode"
                  formcontrolname="pin_code"
                  onkeypress="if(this.value.length==6) return false;"
                  oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                  className="form-control plcholdercolor ng-untouched ng-pristine ng-invalid"
                />
              </div>
              <div className="col-md-3  my-2">
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  formcontrolname="city"
                  className="form-control plcholdercolor custom_input_bg_color ng-untouched ng-pristine ng-invalid"
                  readOnly=""
                />
              </div>
              <div className="col-md-3 my-2">
                <label>State</label>
                <input
                  type="text"
                  placeholder="State"
                  formcontrolname="state"
                  className="form-control plcholdercolor custom_input_bg_color ng-untouched ng-pristine ng-invalid"
                  readOnly=""
                />
              </div>
              <div className="col-md-3 my-2">
                <label>Country</label>
                <input
                  type="text"
                  placeholder="country"
                  formcontrolname="country"
                  className="form-control plcholdercolor custom_input_bg_color ng-untouched ng-pristine ng-valid"
                  readOnly=""
                />
              </div>
            </div>

            <hr className="custom_hr" />
            <div className="border-radius-6px my-3 back-fa p-20px">
              <p onClick={()=>{setShowRtoSupplier(!showRtoSupplier)}} className=" cursor-pointer text-xs flex text-[var(--primary-color)]">
                {" "}
                + Add RTO Address and Supplier{" "}
                <img
                  src="assets/images/arrow_blue_down.svg"
                  alt="arrow-down"
                  className="rotate-img"
                />
              </p>
              <div className={`${showRtoSupplier?"":"hidden"} `}>
                <div className="row">
                  <div className="">
                    <div>
                      <p className="sfpro-medium mb-1 mt-3">Add Supplier</p>
                      <label htmlFor="addsupplier" className="flex space-x-2">
                        <input
                          type="checkbox"
                          id="addsupplier"
                          formcontrolname="isAddressTypeVendor"
                          className="form-check-input ng-untouched ng-pristine ng-valid"
                        />
                        <span className="checkmark customcheck" /> Add this
                        address as supplier/vendor address{" "}
                        <img
                          appsrpopover=""
                          apppathcorrection=""
                          width={12}
                          height={12}
                          data-src="/assets/images/text_info.svg"
                          alt=""
                          className="ms-2"
                          data-bs-original-title=""
                          title=""
                          src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8"></div>
                </div>
                <div className="row">
                  <div className="">
                    <div>
                      <p className="mt-3 flex">
                        {" "}
                        Add RTO Address{" "}
                        <img
                          appsrpopover=""
                          apppathcorrection=""
                          width={12}
                          height={12}
                          data-src="/assets/images/text_info.svg"
                          alt=""
                          className="ms-2"
                          data-bs-original-title=""
                          title=""
                          src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                        />
                      </p>
                      <label htmlFor="addrto" className=" space-x-2">
                        <input
                          type="checkbox"
                          id="addrto"
                          formcontrolname="rtoaddress"
                          className="form-check-input ng-untouched ng-pristine ng-valid"
                        />
                        <span className="checkmark customcheck" /> Use a
                        different RTO Address
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row pickBtns">
            <div className="text-end mt-3">
              <button
                mat-dialog-close=""
                type="button"
                className="cancelBTN custom_btn_margin"
              >
                {" "}
                Cancel{" "}
              </button>
              <button type="submit" className="submitBTN">
                {" "}
                Verify and Save Address{" "}
              </button>
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default PickupDetails;
