import React from 'react'
import { useAddSingleOrder } from '../../hooks/AddSIngleOrderContext'

const PackageDetails = () => {
const {order,updateAddSingleOrder} = useAddSingleOrder();
  return (
    <>
 
          <h5
            >
            Package Details
          </h5>
          <div
            className="p-5 bg-white rounded"
          >
            {/**/}
            <div>
              <div className="row">
                <div className="col-md-3 ">
                  <label className="flex mb-2">
                    Dead Weight{" "}
                    <img
                      appsrpopover=""
                      apppathcorrection=""
                      data-src="/assets/images/text_info.svg"
                      alt="info"
                      className="mx-2"
                      data-bs-original-title=""
                      title=""
                      src="https://app.shiprocket.in/seller//assets/images/text_info.svg"
                    />
                  </label>
                  {/**/}
                  <div className="flex rounded border">
                    <input
                      apptwodigitdecimanumber=""
                      type="number"
                      placeholder={0.0}
                      formcontrolname="weight"
                      maxLength={6}
                      onwheel="return false;"
                      onkeypress="if(this.value.length==6) return false;"
                      className="w-4/5 rounded-s p-2"
                      value={order.weight}
                      onChange={(e)=>{updateAddSingleOrder("weight",e.target.value)}}
                    />
                    <span className='rounded-e bg-gray-200 p-2 w-1/5'>Kg</span>
                  </div>
                  {/**/}
                  {/**/}
                  <p className="text-xs text-gray-400">
                    {" "}
                    (Max. 3 digits after decimal place)
                    <br /> Note: The minimum chargeable weight is 0.50 Kg{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label className="flex mb-2">
                Volumetric Weight{" "}
              
              <img
                appsrpopover=""
                apppathcorrection=""
                width={12}
                height={12}
                data-src="assets/images/text_info.svg"
                alt=""
                className="mx-2"
                data-bs-original-title=""
                title=""
                src="https://app.shiprocket.in/seller/assets/images/text_info.svg"
              />
              </label>
              <div className="row">
                <div className="col-lg-5">
                  <label className="mb-10px sfpro-medium lh-16px ls-24 fs-12px text-grayish-brown">
                    Enter packages dimensions to calculate Volumetric Weight
                  </label>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="rounded flex border">
                        <input
                          apptwodigitdecimanumber=""
                          type="number"
                          placeholder={0.0}
                          formcontrolname="length"
                          maxLength={6}
                          onwheel="return false;"
                          onkeypress="if(this.value.length==6) return false;"
                          className="rounded-s p-2 w-4/5"
                          value={order.length}
                          onChange={(e)=>{updateAddSingleOrder("length",e.target.value)}}
                        />
                        <span className='bg-gray-200 rounded-e w-1/5 text-center flex items-center'>cm</span>
                      </div>
                      {/**/}
                    </div>
                    <div className="col-sm-4 custom-single-margin">
                      <div className="flex border rounded">
                        <input
                          apptwodigitdecimanumber=""
                          type="number"
                          placeholder={0.0}
                          formcontrolname="breadth"
                          onwheel="return false;"
                          onkeypress="if(this.value.length==6) return false;"
                          className="w-4/5 rounded-s p-2"
                          value={order.breadth}
                          onChange={(e)=>{updateAddSingleOrder("breadth",e.target.value)}}
                        />
                        <span className='bg-gray-200 rounded-e w-1/5 flex items-center text-center'> cm</span>
                      </div>
                      {/**/}
                    </div>
                    <div className="col-sm-4 custom-single-margin">
                      <div className="flex rounded border">
                        <input
                          apptwodigitdecimanumber=""
                          type="number"
                          placeholder={0.0}
                          formcontrolname="height"
                          onwheel="return false;"
                          onkeypress="if(this.value.length==6) return false;"
                          className="w-4/5 rounded-s p-2 "
                          value={order.height}
                          onChange={(e)=>{updateAddSingleOrder('height',e.target.value)}}
                        />
                        <span className='bg-gray-200 items-center flex text-center rounded-e'>cm</span>
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Note: Dimensions should be in centimeters only &amp; values
                    should be greater than 0.50 cm.{" "}
                  </p>
                </div>
                <div className="col-lg-1 mt-lg-5 text-light-black sfpro-medium fs-14px lh-20px ls-28 or">
                  {" "}
                  OR{" "}
                </div>
                <div className="col-lg-5">
                  <div>
                    <label className="mb-10px sfpro-medium lh-16px ls-24 fs-12px text-grayish-brown">
                      Select from your saved packages to autofill package
                      dimensions
                    </label>
                    <select
                      name="package"
                      id="package"
                      formcontrolname="package"
                      className="w-75 rounded p-2 border"
                    >
                      <option value="" selected="">
                        Select Package
                      </option>
                      {/**/}
                    </select>
                    {/**/}
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="bg-[var(--secondary-color)] p-4 rounded">
                  <p className="mb-0">
                    {" "}
                    Volumetric Weight
                    <span className="mx-4">0.00&nbsp;Kg</span>
                  </p>
                </div>
              </div>
              <div
                className="row"
               >
                {/**/}
              </div>
              <div className="row">
                <div className="hr-bottom-1" />
                <div className="my-4 bg-[var(--lightSecondary-color)] p-4">
                  <p
                    className="mb-0 d-flex font-bold"
                  >
                    <span>Applicable Weight</span>
                    <span className="mx-4"> 0.00&nbsp;Kg</span>
                    {/**/}
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    {" "}
                    *Applicable weight is the heavier among the two weights that
                    is Dead Weight V/s the Volumetric Weight, basis on which
                    freight charges are calculated. <br /> *Final chargeable
                    weight will be based on the weight slab of the courier
                    selected before shipping{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        
       

    </>
  )
}

export default PackageDetails
