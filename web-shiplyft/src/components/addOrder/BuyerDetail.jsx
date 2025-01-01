import React, { useState } from "react";
import { useAddSingleOrder } from "../../hooks/AddSIngleOrderContext";

const BuyerDetail = () => {
  const [fillGst, setFillGst] = useState(false);
  const { order, updateAddSingleOrder } = useAddSingleOrder();

  return (
    <>
      <h5 className="mb-4 font-bold "> Add Buyer's Details </h5>
      <div
        className="p-5 bg-white"
        style={{ borderRadius: 13, marginBottom: 14 }}
      >
        <p className="">
          To whom is the order being delivered?
          <span className="text-gray-400">(Buyer's Info)</span>
        </p>
        <div className="row">
          <div className="col-md-4">
            <label>Mobile Number</label>
            <div className="flex border-1 rounded">
              <span className="col-2 p-2  rounded-s bg-[var(--lightSecondary-color)]">
                +91
              </span>
              <input
                type="text"
                name="shipping_mobile"
                className="col-10 rounded-e p-2"
                placeholder="Enter buyer's phone number"
                oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                formcontrolname="shipping_mobile"
                minLength={10}
                maxLength={10}
                pattern="[6789]{1}[0-9]{9}"
                data-gtm-form-interact-field-id={0}
                value={order.shipping_phone}
                onChange={(e) => {
                  updateAddSingleOrder("shipping_phone", e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label>Full Name</label>
            <div className="flex border-1 rounded">
              <input
                type="text"
                name="shipping_mobile"
                className="rounded p-2 w-full"
                placeholder="Enter full name"
                value={order.shipping_customer_name}
                onChange={(e) => {
                  updateAddSingleOrder(
                    "shipping_customer_name",
                    e.target.value
                  );
                }}
              />
            </div>
          </div>
          <div className="col-md-4 ">
            <label>
              Email Id <span className="text-gray-400">(Optional)</span>
            </label>
            <div className="flex border-1 rounded">
              <input
                type="email"
                name="shipping_mobile"
                className="rounded p-2 w-full"
                placeholder="i.e. abc@gmail.com"
                value={order.shipping_email}
                onChange={(e0) => {
                  "shipping_email", e.target.value;
                }}
              />
            </div>
          </div>
        </div>

        {/* optional row  */}
        <div
          onClick={() => {
            setFillGst(!fillGst);
          }}
          className="row mt-4 text-xs text-[var(--primary-color)]"
        >
          <p className="cursor-pointer pb-3">
            + Add Alternate Mobile Number, Buyer's Company Name, Buyer's GSTIN
            <img
              className="inline"
              data-src="assets/images/arrow_blue_down.svg"
              alt="arrow-down"
              src="https://app.shiprocket.in/seller/assets/images/arrow_blue_down.svg"
            />
            <span className="text-gray-400" style={{ marginLeft: 10 }}>
              (Optional)
            </span>
          </p>
        </div>

        {fillGst ? (
          <div className="row mb-8">
            <div className="col-md-4">
              <label>Alternate Mobile Number</label>
              <div className="flex border-1 rounded">
                <span className="col-2 p-2  rounded-s bg-[var(--lightSecondary-color)]">
                  +91
                </span>
                <input
                  type="text"
                  name="shipping_alternate_mobile"
                  className="col-10 rounded-e p-2"
                  placeholder="Enter buyer's phone number"
                  oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                  formcontrolname="shipping_mobile"
                  minLength={10}
                  maxLength={10}
                  pattern="[6789]{1}[0-9]{9}"
                  data-gtm-form-interact-field-id={0}
                  value={order.shipping_alternate_phone}
                />
              </div>
            </div>
            <div className="col-md-4">
              <label>Buyer's Company name</label>
              <div className="flex border-1 rounded">
                <input
                  type="text"
                  name="shipping_mobile"
                  className="rounded p-2 w-full"
                  placeholder="Enter Buyer's company name"
                  formcontrolname="shipping_mobile"
                />
              </div>
              <span className="text-xs text-gray-400">
                Note: If you're Shipping B2B, Please Enter the Company's name
              </span>
            </div>
            <div className="col-md-4 ">
              <label>Buyer's GSTIN</label>
              <div className="flex border-1 rounded">
                <input
                  type="text"
                  name="shipping_mobile"
                  className="rounded p-2 w-full"
                  placeholder="Enter Buyer's GSTIN"
                  formcontrolname="shipping_gstin"
                  value={order.customer_gstin}
                  onChange={(e) => {
                    updateAddSingleOrder("customer_gstin", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div>
          <p className="regular">
            Where is the order being delivered to?
            <span className="text-gray-400">(Buyer's Address)</span>
          </p>
          <div className="row">
            <div className="col-md-6">
              <label>Complete Address</label>

              <div className="flex border-1 rounded">
                <input
                  type="text"
                  className="rounded p-2 w-full"
                  placeholder="House/Floor No. Building Name or Street, Locality"
                  oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                  formcontrolname="shipping_mobile"
                  minLength={10}
                  maxLength={10}
                  pattern="[6789]{1}[0-9]{9}"
                  data-gtm-form-interact-field-id={0}
                  value={order.shipping_address}
                  onChange={(e) => {
                    updateAddSingleOrder("shipping_address", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <label>
                Landmark
                <span className="optionalspan">(Optional)</span>
              </label>

              <div className="flex border-1 rounded">
                <input
                  type="text"
                  className="rounded p-2 w-full"
                  placeholder="Any nearby post office, market, Hospital as the landmark"
                  value={order.shipping_address_2}
                  onChange={(e) => {
                    updateAddSingleOrder("shipping_address_2", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <label>Pincode</label>

              <div className="flex border-1 rounded">
                <input
                  type="text"
                  className="rounded p-2 w-full"
                  name="shipping_pincode"
                  placeholder="Enter Buyer's Pincode"
                  formcontrolname="shipping_pincode"
                  maxLength={15}
                  data-gtm-form-interact-field-id={3}
                  value={order.shipping_pincode}
                  onChange={(e) => {
                    updateAddSingleOrder("shipping_pincode", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-3 ">
              <label>City</label>

              <div className="flex border-1 rounded">
                <input
                  type="text"
                  className="rounded p-2 w-full"
                  name="shipping_city"
                  placeholder="Enter Buyer's City"
                  formcontrolname="shipping_city"
                  data-gtm-form-interact-field-id={4}
                  disabled=""
                  value={order.shipping_city}
                  onChange={(e) => {
                    updateAddSingleOrder("shipping_city", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-3  ng-star-inserted">
              <label>State</label>

              <div className="flex border-1 rounded">
                <select
                  name="shipping_state"
                  id="shipping_state"
                  formcontrolname="shipping_state"
                  className="p-2 bg-white rounded w-full"
                  data-gtm-form-interact-field-id={5}
                  disabled=""
                >
                  <option value="">Please Select State</option>
                  <option value={1475} className="ng-star-inserted">
                    Andaman and Nicobar Islands
                  </option>
                  <option value={1476} className="ng-star-inserted">
                    Andhra Pradesh
                  </option>
                  <option value={1477} className="ng-star-inserted">
                    Arunachal Pradesh
                  </option>
                  <option value={1478} className="ng-star-inserted">
                    Assam
                  </option>
                  <option value={1479} className="ng-star-inserted">
                    Bihar
                  </option>
                  <option value={1480} className="ng-star-inserted">
                    Chandigarh
                  </option>
                  <option value={1481} className="ng-star-inserted">
                    Dadra and Nagar Haveli
                  </option>
                  <option value={1482} className="ng-star-inserted">
                    Daman and Diu
                  </option>
                  <option value={1483} className="ng-star-inserted">
                    Delhi
                  </option>
                  <option value={1484} className="ng-star-inserted">
                    Goa
                  </option>
                  <option value={1485} className="ng-star-inserted">
                    Gujarat
                  </option>
                  <option value={1486} className="ng-star-inserted">
                    Haryana
                  </option>
                  <option value={1487} className="ng-star-inserted">
                    Himachal Pradesh
                  </option>
                  <option value={1488} className="ng-star-inserted">
                    Jammu and Kashmir
                  </option>
                  <option value={1489} className="ng-star-inserted">
                    Karnataka
                  </option>
                  <option value={1490} className="ng-star-inserted">
                    Kerala
                  </option>
                  <option value={1491} className="ng-star-inserted">
                    Lakshadweep Islands
                  </option>
                  <option value={1492} className="ng-star-inserted">
                    Madhya Pradesh
                  </option>
                  <option value={1493} className="ng-star-inserted">
                    Maharashtra
                  </option>
                  <option value={1494} className="ng-star-inserted">
                    Manipur
                  </option>
                  <option value={1495} className="ng-star-inserted">
                    Meghalaya
                  </option>
                  <option value={1496} className="ng-star-inserted">
                    Mizoram
                  </option>
                  <option value={1497} className="ng-star-inserted">
                    Nagaland
                  </option>
                  <option value={1498} className="ng-star-inserted">
                    Odisha
                  </option>
                  <option value={1499} className="ng-star-inserted">
                    Pondicherry
                  </option>
                  <option value={1500} className="ng-star-inserted">
                    Punjab
                  </option>
                  <option value={1501} className="ng-star-inserted">
                    Rajasthan
                  </option>
                  <option value={1502} className="ng-star-inserted">
                    Sikkim
                  </option>
                  <option value={1503} className="ng-star-inserted">
                    Tamil Nadu
                  </option>
                  <option value={1504} className="ng-star-inserted">
                    Tripura
                  </option>
                  <option value={1505} className="ng-star-inserted">
                    Uttar Pradesh
                  </option>
                  <option value={1506} className="ng-star-inserted">
                    West Bengal
                  </option>
                  <option value={3971} className="ng-star-inserted">
                    Jharkhand
                  </option>
                  <option value={3972} className="ng-star-inserted">
                    Uttarakhand
                  </option>
                  <option value={3973} className="ng-star-inserted">
                    Chhattisgarh
                  </option>
                  <option value={3976} className="ng-star-inserted">
                    Telangana
                  </option>
                  <option value={3986} className="ng-star-inserted">
                    Ladakh
                  </option>
                </select>
              </div>
            </div>

            <div className="col-md-3  form-group">
              <label>Country</label>
              <div className="flex border-1 rounded">
                <select
                  name="shipping_country"
                  placeholder="Please select country"
                  id="shipping_country"
                  formcontrolname="shipping_country"
                  className="p-2 rounded w-full bg-white"
                  disabled="true"
                >
                  <option value={1} className="ng-star-inserted">
                    Afghanistan
                  </option>
                  <option value={2} className="ng-star-inserted">
                    Albania
                  </option>
                  <option value={3} className="ng-star-inserted">
                    Algeria
                  </option>
                  <option value={4} className="ng-star-inserted">
                    American Samoa
                  </option>
                  <option value={5} className="ng-star-inserted">
                    Andorra
                  </option>
                  <option value={6} className="ng-star-inserted">
                    Angola
                  </option>
                  <option value={7} className="ng-star-inserted">
                    Anguilla
                  </option>
                  <option value={8} className="ng-star-inserted">
                    Antarctica
                  </option>
                  <option value={9} className="ng-star-inserted">
                    Antigua and Barbuda
                  </option>
                  <option value={10} className="ng-star-inserted">
                    Argentina
                  </option>
                  <option value={11} className="ng-star-inserted">
                    Armenia
                  </option>
                  <option value={12} className="ng-star-inserted">
                    Aruba
                  </option>
                  <option value={13} className="ng-star-inserted">
                    Australia
                  </option>
                  <option value={14} className="ng-star-inserted">
                    Austria
                  </option>
                  <option value={15} className="ng-star-inserted">
                    Azerbaijan
                  </option>
                  <option value={16} className="ng-star-inserted">
                    Bahamas
                  </option>
                  <option value={17} className="ng-star-inserted">
                    Bahrain
                  </option>
                  <option value={18} className="ng-star-inserted">
                    Bangladesh
                  </option>
                  <option value={19} className="ng-star-inserted">
                    Barbados
                  </option>
                  <option value={20} className="ng-star-inserted">
                    Belarus
                  </option>
                  <option value={21} className="ng-star-inserted">
                    Belgium
                  </option>
                  <option value={22} className="ng-star-inserted">
                    Belize
                  </option>
                  <option value={23} className="ng-star-inserted">
                    Benin
                  </option>
                  <option value={24} className="ng-star-inserted">
                    Bermuda
                  </option>
                  <option value={25} className="ng-star-inserted">
                    Bhutan
                  </option>
                  <option value={26} className="ng-star-inserted">
                    Bolivia
                  </option>
                  <option value={27} className="ng-star-inserted">
                    Bosnia and Herzegowina
                  </option>
                  <option value={28} className="ng-star-inserted">
                    Botswana
                  </option>
                  <option value={29} className="ng-star-inserted">
                    Bouvet Island
                  </option>
                  <option value={30} className="ng-star-inserted">
                    Brazil
                  </option>
                  <option value={31} className="ng-star-inserted">
                    British Indian Ocean Territory
                  </option>
                  <option value={32} className="ng-star-inserted">
                    Brunei Darussalam
                  </option>
                  <option value={33} className="ng-star-inserted">
                    Bulgaria
                  </option>
                  <option value={34} className="ng-star-inserted">
                    Burkina Faso
                  </option>
                  <option value={35} className="ng-star-inserted">
                    Burundi
                  </option>
                  <option value={36} className="ng-star-inserted">
                    Cambodia
                  </option>
                  <option value={37} className="ng-star-inserted">
                    Cameroon
                  </option>
                  <option value={38} className="ng-star-inserted">
                    Canada
                  </option>
                  <option value={39} className="ng-star-inserted">
                    Cape Verde
                  </option>
                  <option value={40} className="ng-star-inserted">
                    Cayman Islands
                  </option>
                  <option value={41} className="ng-star-inserted">
                    Central African Republic
                  </option>
                  <option value={42} className="ng-star-inserted">
                    Chad
                  </option>
                  <option value={43} className="ng-star-inserted">
                    Chile
                  </option>
                  <option value={44} className="ng-star-inserted">
                    China
                  </option>
                  <option value={45} className="ng-star-inserted">
                    Christmas Island
                  </option>
                  <option value={46} className="ng-star-inserted">
                    Cocos (Keeling) Islands
                  </option>
                  <option value={47} className="ng-star-inserted">
                    Colombia
                  </option>
                  <option value={48} className="ng-star-inserted">
                    Comoros
                  </option>
                  <option value={49} className="ng-star-inserted">
                    Congo
                  </option>
                  <option value={50} className="ng-star-inserted">
                    Cook Islands
                  </option>
                  <option value={51} className="ng-star-inserted">
                    Costa Rica
                  </option>
                  <option value={52} className="ng-star-inserted">
                    Cote D'Ivoire
                  </option>
                  <option value={53} className="ng-star-inserted">
                    Croatia
                  </option>
                  <option value={54} className="ng-star-inserted">
                    Cuba
                  </option>
                  <option value={55} className="ng-star-inserted">
                    Cyprus
                  </option>
                  <option value={56} className="ng-star-inserted">
                    Czech Republic
                  </option>
                  <option value={57} className="ng-star-inserted">
                    Denmark
                  </option>
                  <option value={58} className="ng-star-inserted">
                    Djibouti
                  </option>
                  <option value={59} className="ng-star-inserted">
                    Dominica
                  </option>
                  <option value={60} className="ng-star-inserted">
                    Dominican Republic
                  </option>
                  <option value={61} className="ng-star-inserted">
                    East Timor
                  </option>
                  <option value={62} className="ng-star-inserted">
                    Ecuador
                  </option>
                  <option value={63} className="ng-star-inserted">
                    Egypt
                  </option>
                  <option value={64} className="ng-star-inserted">
                    El Salvador
                  </option>
                  <option value={65} className="ng-star-inserted">
                    Equatorial Guinea
                  </option>
                  <option value={66} className="ng-star-inserted">
                    Eritrea
                  </option>
                  <option value={67} className="ng-star-inserted">
                    Estonia
                  </option>
                  <option value={68} className="ng-star-inserted">
                    Ethiopia
                  </option>
                  <option value={69} className="ng-star-inserted">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value={70} className="ng-star-inserted">
                    Faroe Islands
                  </option>
                  <option value={71} className="ng-star-inserted">
                    Fiji
                  </option>
                  <option value={72} className="ng-star-inserted">
                    Finland
                  </option>
                  <option value={73} className="ng-star-inserted">
                    France
                  </option>
                  <option value={74} className="ng-star-inserted">
                    France, Metropolitan
                  </option>
                  <option value={75} className="ng-star-inserted">
                    French Guiana
                  </option>
                  <option value={76} className="ng-star-inserted">
                    French Polynesia
                  </option>
                  <option value={77} className="ng-star-inserted">
                    French Southern Territories
                  </option>
                  <option value={78} className="ng-star-inserted">
                    Gabon
                  </option>
                  <option value={79} className="ng-star-inserted">
                    Gambia
                  </option>
                  <option value={80} className="ng-star-inserted">
                    Georgia
                  </option>
                  <option value={81} className="ng-star-inserted">
                    Germany
                  </option>
                  <option value={82} className="ng-star-inserted">
                    Ghana
                  </option>
                  <option value={83} className="ng-star-inserted">
                    Gibraltar
                  </option>
                  <option value={84} className="ng-star-inserted">
                    Greece
                  </option>
                  <option value={85} className="ng-star-inserted">
                    Greenland
                  </option>
                  <option value={86} className="ng-star-inserted">
                    Grenada
                  </option>
                  <option value={87} className="ng-star-inserted">
                    Guadeloupe
                  </option>
                  <option value={88} className="ng-star-inserted">
                    Guam
                  </option>
                  <option value={89} className="ng-star-inserted">
                    Guatemala
                  </option>
                  <option value={90} className="ng-star-inserted">
                    Guinea
                  </option>
                  <option value={91} className="ng-star-inserted">
                    Guinea-bissau
                  </option>
                  <option value={92} className="ng-star-inserted">
                    Guyana
                  </option>
                  <option value={93} className="ng-star-inserted">
                    Haiti
                  </option>
                  <option value={94} className="ng-star-inserted">
                    Heard and Mc Donald Islands
                  </option>
                  <option value={95} className="ng-star-inserted">
                    Honduras
                  </option>
                  <option value={96} className="ng-star-inserted">
                    Hong Kong
                  </option>
                  <option value={97} className="ng-star-inserted">
                    Hungary
                  </option>
                  <option value={98} className="ng-star-inserted">
                    Iceland
                  </option>
                  <option value={99} className="ng-star-inserted">
                    India
                  </option>
                  <option value={100} className="ng-star-inserted">
                    Indonesia
                  </option>
                  <option value={101} className="ng-star-inserted">
                    Iran (Islamic Republic of)
                  </option>
                  <option value={102} className="ng-star-inserted">
                    Iraq
                  </option>
                  <option value={103} className="ng-star-inserted">
                    Ireland
                  </option>
                  <option value={104} className="ng-star-inserted">
                    Israel
                  </option>
                  <option value={105} className="ng-star-inserted">
                    Italy
                  </option>
                  <option value={106} className="ng-star-inserted">
                    Jamaica
                  </option>
                  <option value={107} className="ng-star-inserted">
                    Japan
                  </option>
                  <option value={108} className="ng-star-inserted">
                    Jordan
                  </option>
                  <option value={109} className="ng-star-inserted">
                    Kazakhstan
                  </option>
                  <option value={110} className="ng-star-inserted">
                    Kenya
                  </option>
                  <option value={111} className="ng-star-inserted">
                    Kiribati
                  </option>
                  <option value={112} className="ng-star-inserted">
                    North Korea
                  </option>
                  <option value={113} className="ng-star-inserted">
                    South Korea
                  </option>
                  <option value={114} className="ng-star-inserted">
                    Kuwait
                  </option>
                  <option value={115} className="ng-star-inserted">
                    Kyrgyzstan
                  </option>
                  <option value={116} className="ng-star-inserted">
                    Lao People's Democratic Republic
                  </option>
                  <option value={117} className="ng-star-inserted">
                    Latvia
                  </option>
                  <option value={118} className="ng-star-inserted">
                    Lebanon
                  </option>
                  <option value={119} className="ng-star-inserted">
                    Lesotho
                  </option>
                  <option value={120} className="ng-star-inserted">
                    Liberia
                  </option>
                  <option value={121} className="ng-star-inserted">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value={122} className="ng-star-inserted">
                    Liechtenstein
                  </option>
                  <option value={123} className="ng-star-inserted">
                    Lithuania
                  </option>
                  <option value={124} className="ng-star-inserted">
                    Luxembourg
                  </option>
                  <option value={125} className="ng-star-inserted">
                    Macau
                  </option>
                  <option value={126} className="ng-star-inserted">
                    Macedonia
                  </option>
                  <option value={127} className="ng-star-inserted">
                    Madagascar
                  </option>
                  <option value={128} className="ng-star-inserted">
                    Malawi
                  </option>
                  <option value={129} className="ng-star-inserted">
                    Malaysia
                  </option>
                  <option value={130} className="ng-star-inserted">
                    Maldives
                  </option>
                  <option value={131} className="ng-star-inserted">
                    Mali
                  </option>
                  <option value={132} className="ng-star-inserted">
                    Malta
                  </option>
                  <option value={133} className="ng-star-inserted">
                    Marshall Islands
                  </option>
                  <option value={134} className="ng-star-inserted">
                    Martinique
                  </option>
                  <option value={135} className="ng-star-inserted">
                    Mauritania
                  </option>
                  <option value={136} className="ng-star-inserted">
                    Mauritius
                  </option>
                  <option value={137} className="ng-star-inserted">
                    Mayotte
                  </option>
                  <option value={138} className="ng-star-inserted">
                    Mexico
                  </option>
                  <option value={139} className="ng-star-inserted">
                    Micronesia, Federated States of
                  </option>
                  <option value={140} className="ng-star-inserted">
                    Moldova, Republic of
                  </option>
                  <option value={141} className="ng-star-inserted">
                    Monaco
                  </option>
                  <option value={142} className="ng-star-inserted">
                    Mongolia
                  </option>
                  <option value={143} className="ng-star-inserted">
                    Montserrat
                  </option>
                  <option value={144} className="ng-star-inserted">
                    Morocco
                  </option>
                  <option value={145} className="ng-star-inserted">
                    Mozambique
                  </option>
                  <option value={146} className="ng-star-inserted">
                    Myanmar
                  </option>
                  <option value={147} className="ng-star-inserted">
                    Namibia
                  </option>
                  <option value={148} className="ng-star-inserted">
                    Nauru
                  </option>
                  <option value={149} className="ng-star-inserted">
                    Nepal
                  </option>
                  <option value={150} className="ng-star-inserted">
                    Netherlands
                  </option>
                  <option value={151} className="ng-star-inserted">
                    Netherlands Antilles
                  </option>
                  <option value={152} className="ng-star-inserted">
                    New Caledonia
                  </option>
                  <option value={153} className="ng-star-inserted">
                    New Zealand
                  </option>
                  <option value={154} className="ng-star-inserted">
                    Nicaragua
                  </option>
                  <option value={155} className="ng-star-inserted">
                    Niger
                  </option>
                  <option value={156} className="ng-star-inserted">
                    Nigeria
                  </option>
                  <option value={157} className="ng-star-inserted">
                    Niue
                  </option>
                  <option value={158} className="ng-star-inserted">
                    Norfolk Island
                  </option>
                  <option value={159} className="ng-star-inserted">
                    Northern Mariana Islands
                  </option>
                  <option value={160} className="ng-star-inserted">
                    Norway
                  </option>
                  <option value={161} className="ng-star-inserted">
                    Oman
                  </option>
                  <option value={162} className="ng-star-inserted">
                    Pakistan
                  </option>
                  <option value={163} className="ng-star-inserted">
                    Palau
                  </option>
                  <option value={164} className="ng-star-inserted">
                    Panama
                  </option>
                  <option value={165} className="ng-star-inserted">
                    Papua New Guinea
                  </option>
                  <option value={166} className="ng-star-inserted">
                    Paraguay
                  </option>
                  <option value={167} className="ng-star-inserted">
                    Peru
                  </option>
                  <option value={168} className="ng-star-inserted">
                    Philippines
                  </option>
                  <option value={169} className="ng-star-inserted">
                    Pitcairn
                  </option>
                  <option value={170} className="ng-star-inserted">
                    Poland
                  </option>
                  <option value={171} className="ng-star-inserted">
                    Portugal
                  </option>
                  <option value={172} className="ng-star-inserted">
                    Puerto Rico
                  </option>
                  <option value={173} className="ng-star-inserted">
                    Qatar
                  </option>
                  <option value={174} className="ng-star-inserted">
                    Reunion
                  </option>
                  <option value={175} className="ng-star-inserted">
                    Romania
                  </option>
                  <option value={176} className="ng-star-inserted">
                    Russian Federation
                  </option>
                  <option value={177} className="ng-star-inserted">
                    Rwanda
                  </option>
                  <option value={178} className="ng-star-inserted">
                    Saint Kitts and Nevis
                  </option>
                  <option value={179} className="ng-star-inserted">
                    Saint Lucia
                  </option>
                  <option value={180} className="ng-star-inserted">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value={181} className="ng-star-inserted">
                    Samoa
                  </option>
                  <option value={182} className="ng-star-inserted">
                    San Marino
                  </option>
                  <option value={183} className="ng-star-inserted">
                    Sao Tome and Principe
                  </option>
                  <option value={184} className="ng-star-inserted">
                    Saudi Arabia
                  </option>
                  <option value={185} className="ng-star-inserted">
                    Senegal
                  </option>
                  <option value={186} className="ng-star-inserted">
                    Seychelles
                  </option>
                  <option value={187} className="ng-star-inserted">
                    Sierra Leone
                  </option>
                  <option value={188} className="ng-star-inserted">
                    Singapore
                  </option>
                  <option value={189} className="ng-star-inserted">
                    Slovak Republic
                  </option>
                  <option value={190} className="ng-star-inserted">
                    Slovenia
                  </option>
                  <option value={191} className="ng-star-inserted">
                    Solomon Islands
                  </option>
                  <option value={192} className="ng-star-inserted">
                    Somalia
                  </option>
                  <option value={193} className="ng-star-inserted">
                    South Africa
                  </option>
                  <option value={194} className="ng-star-inserted">
                    South Georgia &amp;amp; South Sandwich Islands
                  </option>
                  <option value={195} className="ng-star-inserted">
                    Spain
                  </option>
                  <option value={196} className="ng-star-inserted">
                    Sri Lanka
                  </option>
                  <option value={197} className="ng-star-inserted">
                    St. Helena
                  </option>
                  <option value={198} className="ng-star-inserted">
                    St. Pierre and Miquelon
                  </option>
                  <option value={199} className="ng-star-inserted">
                    Sudan
                  </option>
                  <option value={200} className="ng-star-inserted">
                    Suriname
                  </option>
                  <option value={201} className="ng-star-inserted">
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value={202} className="ng-star-inserted">
                    Swaziland
                  </option>
                  <option value={203} className="ng-star-inserted">
                    Sweden
                  </option>
                  <option value={204} className="ng-star-inserted">
                    Switzerland
                  </option>
                  <option value={205} className="ng-star-inserted">
                    Syrian Arab Republic
                  </option>
                  <option value={206} className="ng-star-inserted">
                    Taiwan
                  </option>
                  <option value={207} className="ng-star-inserted">
                    Tajikistan
                  </option>
                  <option value={208} className="ng-star-inserted">
                    Tanzania, United Republic of
                  </option>
                  <option value={209} className="ng-star-inserted">
                    Thailand
                  </option>
                  <option value={210} className="ng-star-inserted">
                    Togo
                  </option>
                  <option value={211} className="ng-star-inserted">
                    Tokelau
                  </option>
                  <option value={212} className="ng-star-inserted">
                    Tonga
                  </option>
                  <option value={213} className="ng-star-inserted">
                    Trinidad and Tobago
                  </option>
                  <option value={214} className="ng-star-inserted">
                    Tunisia
                  </option>
                  <option value={215} className="ng-star-inserted">
                    Turkey
                  </option>
                  <option value={216} className="ng-star-inserted">
                    Turkmenistan
                  </option>
                  <option value={217} className="ng-star-inserted">
                    Turks and Caicos Islands
                  </option>
                  <option value={218} className="ng-star-inserted">
                    Tuvalu
                  </option>
                  <option value={219} className="ng-star-inserted">
                    Uganda
                  </option>
                  <option value={220} className="ng-star-inserted">
                    Ukraine
                  </option>
                  <option value={221} className="ng-star-inserted">
                    United Arab Emirates
                  </option>
                  <option value={222} className="ng-star-inserted">
                    United Kingdom
                  </option>
                  <option value={223} className="ng-star-inserted">
                    United States
                  </option>
                  <option value={224} className="ng-star-inserted">
                    United States Minor Outlying Islands
                  </option>
                  <option value={225} className="ng-star-inserted">
                    Uruguay
                  </option>
                  <option value={226} className="ng-star-inserted">
                    Uzbekistan
                  </option>
                  <option value={227} className="ng-star-inserted">
                    Vanuatu
                  </option>
                  <option value={228} className="ng-star-inserted">
                    Vatican City State (Holy See)
                  </option>
                  <option value={229} className="ng-star-inserted">
                    Venezuela
                  </option>
                  <option value={230} className="ng-star-inserted">
                    Viet Nam
                  </option>
                  <option value={231} className="ng-star-inserted">
                    Virgin Islands (British)
                  </option>
                  <option value={232} className="ng-star-inserted">
                    Virgin Islands (U.S.)
                  </option>
                  <option value={233} className="ng-star-inserted">
                    Wallis and Futuna Islands
                  </option>
                  <option value={234} className="ng-star-inserted">
                    Western Sahara
                  </option>
                  <option value={235} className="ng-star-inserted">
                    Yemen
                  </option>
                  <option value={236} className="ng-star-inserted">
                    Yugoslavia
                  </option>
                  <option value={237} className="ng-star-inserted">
                    Democratic Republic of Congo
                  </option>
                  <option value={238} className="ng-star-inserted">
                    Zambia
                  </option>
                  <option value={239} className="ng-star-inserted">
                    Zimbabwe
                  </option>
                  <option value={240} className="ng-star-inserted">
                    Aland Islands
                  </option>
                  <option value={241} className="ng-star-inserted">
                    St Barthelemy
                  </option>
                  <option value={242} className="ng-star-inserted">
                    Guernsey
                  </option>
                  <option value={243} className="ng-star-inserted">
                    Isle of Man
                  </option>
                  <option value={244} className="ng-star-inserted">
                    Jersey
                  </option>
                  <option value={245} className="ng-star-inserted">
                    Montenegro
                  </option>
                  <option value={246} className="ng-star-inserted">
                    St Martin (French part)
                  </option>
                  <option value={247} className="ng-star-inserted">
                    Serbia
                  </option>
                  <option value={248} className="ng-star-inserted">
                    South Sudan
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>
            <label
              htmlFor="shippingisbilling"
              className="mb-0 ps-2rem position-relative custom-checkbox"
              style={{ top: "-2px" }}
            >
              <input
                type="checkbox"
                onChange={(e) => {
                  updateAddSingleOrder(
                    "shipping_is_billing",
                    !order.shipping_is_billing
                  );
                }}
                checked={order.shipping_is_billing}
                name="shipping_is_billing"
                formcontrolname="shipping_is_billing"
                id="shippingisbilling"
                className="ng-untouched ng-pristine ng-valid"
              />
              <span
                className="checkmark customcheck"
                style={{ borderRadius: 4 }}
              />
              Billing address is same as the shipping address
            </label>
          </p>
        </div>

        {order.shipping_is_billing ? (
          ""
        ) : (
          <>
            <h4 className="my-8">Billing Address</h4>
            <p className="text-lg font-normal">Buyer's Details</p>
            <div className="row">
              <div className="col-md-4">
                <label>Mobile Number</label>
                <div className="flex border-1 rounded">
                  <span className="col-2 p-2  rounded-s bg-[var(--lightSecondary-color)]">
                    +91
                  </span>
                  <input
                    type="text"
                    name="shipping_mobile"
                    className="col-10 rounded-e p-2"
                    placeholder="Enter buyer's phone number"
                    oninput="this.value=this.value.replace(/[^0-9]/g,'')"
                    formcontrolname="shipping_mobile"
                    minLength={10}
                    maxLength={10}
                    pattern="[6789]{1}[0-9]{9}"
                    data-gtm-form-interact-field-id={0}
                    value={order.billing_phone}
                    onChange={(e) => {
                      updateAddSingleOrder(billing_phone), e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label>Full Name</label>
                <div className="flex border-1 rounded">
                  <input
                    type="text"
                    name="billin_name"
                    className="rounded p-2"
                    placeholder="Enter full name"
                    formcontrolname="billing_name"
                    data-gtm-form-interact-field-id={0}
                    value={order.billing_customer_name}
                    onChange={(e) => {
                      updateAddSingleOrder(
                        "billing_customer_name",
                        e.target.value
                      );
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4 ">
                <label>
                  Email Id
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="flex border-1 rounded">
                  <input
                    type="text"
                    name="billing_email"
                    className="rounded p-2"
                    placeholder="i.e. abc@gmail.com"
                    value={order.billing_email}
                    onChange={(e) => {
                      updateAddSingleOrder("billing_email", e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full border-b-2 my-4"></div>

            <div>
              <p className="text-lg font-normal">Buyer's Address</p>
              <div className="row">
                <div className="col-md-6">
                  <label>Complete Address</label>

                  <div className="flex border-1 rounded">
                    <input
                      type="text"
                      className="rounded p-2 w-full"
                      value={order.billing_address}
                      onChange={(e) => {
                        updateAddSingleOrder("billing_address", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <label>
                    Landmark
                    <span className="optionalspan">(Optional)</span>
                  </label>

                  <div className="flex border-1 rounded">
                    <input
                      type="text"
                      className="rounded p-2 w-full"
                      placeholder="Any nearby post office, market, Hospital as the landmark"
                      value={order.billing_address_2}
                      onChange={(e) => {
                        updateAddSingleOrder(
                          "billing_address_2",
                          e.target.value
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-3">
                  <label>Pincode</label>

                  <div className="flex border-1 rounded">
                    <input
                      type="text"
                      className="rounded p-2 w-full"
                      name="shipping_pincode"
                      placeholder="Enter Buyer's Pincode"
                      formcontrolname="shipping_pincode"
                      maxLength={15}
                      data-gtm-form-interact-field-id={3}
                      value={order.billing_pincode}
                      onChange={(e) => {
                        updateAddSingleOrder("billing_pincode", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-3 ">
                  <label>City</label>

                  <div className="flex border-1 rounded">
                    <input
                      type="text"
                      className="rounded p-2 w-full"
                      name="shipping_city"
                      placeholder="Enter Buyer's City"
                      formcontrolname="shipping_city"
                      data-gtm-form-interact-field-id={4}
                      disabled=""
                      value={order.billing_city}
                      onChange={(e) => {
                        updateAddSingleOrder("billing_city", e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-3  ng-star-inserted">
                  <label>State</label>

                  <div className="flex border-1 rounded">
                    <select
                      name="shipping_state"
                      id="shipping_state"
                      formcontrolname="shipping_state"
                      className="p-2 bg-white rounded w-full"
                      data-gtm-form-interact-field-id={5}
                      disabled=""
                    >
                      <option value="">Please Select State</option>
                      <option value={1475} className="ng-star-inserted">
                        Andaman and Nicobar Islands
                      </option>
                      <option value={1476} className="ng-star-inserted">
                        Andhra Pradesh
                      </option>
                      <option value={1477} className="ng-star-inserted">
                        Arunachal Pradesh
                      </option>
                      <option value={1478} className="ng-star-inserted">
                        Assam
                      </option>
                      <option value={1479} className="ng-star-inserted">
                        Bihar
                      </option>
                      <option value={1480} className="ng-star-inserted">
                        Chandigarh
                      </option>
                      <option value={1481} className="ng-star-inserted">
                        Dadra and Nagar Haveli
                      </option>
                      <option value={1482} className="ng-star-inserted">
                        Daman and Diu
                      </option>
                      <option value={1483} className="ng-star-inserted">
                        Delhi
                      </option>
                      <option value={1484} className="ng-star-inserted">
                        Goa
                      </option>
                      <option value={1485} className="ng-star-inserted">
                        Gujarat
                      </option>
                      <option value={1486} className="ng-star-inserted">
                        Haryana
                      </option>
                      <option value={1487} className="ng-star-inserted">
                        Himachal Pradesh
                      </option>
                      <option value={1488} className="ng-star-inserted">
                        Jammu and Kashmir
                      </option>
                      <option value={1489} className="ng-star-inserted">
                        Karnataka
                      </option>
                      <option value={1490} className="ng-star-inserted">
                        Kerala
                      </option>
                      <option value={1491} className="ng-star-inserted">
                        Lakshadweep Islands
                      </option>
                      <option value={1492} className="ng-star-inserted">
                        Madhya Pradesh
                      </option>
                      <option value={1493} className="ng-star-inserted">
                        Maharashtra
                      </option>
                      <option value={1494} className="ng-star-inserted">
                        Manipur
                      </option>
                      <option value={1495} className="ng-star-inserted">
                        Meghalaya
                      </option>
                      <option value={1496} className="ng-star-inserted">
                        Mizoram
                      </option>
                      <option value={1497} className="ng-star-inserted">
                        Nagaland
                      </option>
                      <option value={1498} className="ng-star-inserted">
                        Odisha
                      </option>
                      <option value={1499} className="ng-star-inserted">
                        Pondicherry
                      </option>
                      <option value={1500} className="ng-star-inserted">
                        Punjab
                      </option>
                      <option value={1501} className="ng-star-inserted">
                        Rajasthan
                      </option>
                      <option value={1502} className="ng-star-inserted">
                        Sikkim
                      </option>
                      <option value={1503} className="ng-star-inserted">
                        Tamil Nadu
                      </option>
                      <option value={1504} className="ng-star-inserted">
                        Tripura
                      </option>
                      <option value={1505} className="ng-star-inserted">
                        Uttar Pradesh
                      </option>
                      <option value={1506} className="ng-star-inserted">
                        West Bengal
                      </option>
                      <option value={3971} className="ng-star-inserted">
                        Jharkhand
                      </option>
                      <option value={3972} className="ng-star-inserted">
                        Uttarakhand
                      </option>
                      <option value={3973} className="ng-star-inserted">
                        Chhattisgarh
                      </option>
                      <option value={3976} className="ng-star-inserted">
                        Telangana
                      </option>
                      <option value={3986} className="ng-star-inserted">
                        Ladakh
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3  form-group">
                  <label>Country</label>
                  <div className="flex border-1 rounded">
                    <select
                      name="shipping_country"
                      placeholder="Please select country"
                      id="shipping_country"
                      formcontrolname="shipping_country"
                      className="p-2 rounded w-full bg-white"
                      disabled="true"
                    >
                      <option value={1} className="ng-star-inserted">
                        Afghanistan
                      </option>
                      <option value={2} className="ng-star-inserted">
                        Albania
                      </option>
                      <option value={3} className="ng-star-inserted">
                        Algeria
                      </option>
                      <option value={4} className="ng-star-inserted">
                        American Samoa
                      </option>
                      <option value={5} className="ng-star-inserted">
                        Andorra
                      </option>
                      <option value={6} className="ng-star-inserted">
                        Angola
                      </option>
                      <option value={7} className="ng-star-inserted">
                        Anguilla
                      </option>
                      <option value={8} className="ng-star-inserted">
                        Antarctica
                      </option>
                      <option value={9} className="ng-star-inserted">
                        Antigua and Barbuda
                      </option>
                      <option value={10} className="ng-star-inserted">
                        Argentina
                      </option>
                      <option value={11} className="ng-star-inserted">
                        Armenia
                      </option>
                      <option value={12} className="ng-star-inserted">
                        Aruba
                      </option>
                      <option value={13} className="ng-star-inserted">
                        Australia
                      </option>
                      <option value={14} className="ng-star-inserted">
                        Austria
                      </option>
                      <option value={15} className="ng-star-inserted">
                        Azerbaijan
                      </option>
                      <option value={16} className="ng-star-inserted">
                        Bahamas
                      </option>
                      <option value={17} className="ng-star-inserted">
                        Bahrain
                      </option>
                      <option value={18} className="ng-star-inserted">
                        Bangladesh
                      </option>
                      <option value={19} className="ng-star-inserted">
                        Barbados
                      </option>
                      <option value={20} className="ng-star-inserted">
                        Belarus
                      </option>
                      <option value={21} className="ng-star-inserted">
                        Belgium
                      </option>
                      <option value={22} className="ng-star-inserted">
                        Belize
                      </option>
                      <option value={23} className="ng-star-inserted">
                        Benin
                      </option>
                      <option value={24} className="ng-star-inserted">
                        Bermuda
                      </option>
                      <option value={25} className="ng-star-inserted">
                        Bhutan
                      </option>
                      <option value={26} className="ng-star-inserted">
                        Bolivia
                      </option>
                      <option value={27} className="ng-star-inserted">
                        Bosnia and Herzegowina
                      </option>
                      <option value={28} className="ng-star-inserted">
                        Botswana
                      </option>
                      <option value={29} className="ng-star-inserted">
                        Bouvet Island
                      </option>
                      <option value={30} className="ng-star-inserted">
                        Brazil
                      </option>
                      <option value={31} className="ng-star-inserted">
                        British Indian Ocean Territory
                      </option>
                      <option value={32} className="ng-star-inserted">
                        Brunei Darussalam
                      </option>
                      <option value={33} className="ng-star-inserted">
                        Bulgaria
                      </option>
                      <option value={34} className="ng-star-inserted">
                        Burkina Faso
                      </option>
                      <option value={35} className="ng-star-inserted">
                        Burundi
                      </option>
                      <option value={36} className="ng-star-inserted">
                        Cambodia
                      </option>
                      <option value={37} className="ng-star-inserted">
                        Cameroon
                      </option>
                      <option value={38} className="ng-star-inserted">
                        Canada
                      </option>
                      <option value={39} className="ng-star-inserted">
                        Cape Verde
                      </option>
                      <option value={40} className="ng-star-inserted">
                        Cayman Islands
                      </option>
                      <option value={41} className="ng-star-inserted">
                        Central African Republic
                      </option>
                      <option value={42} className="ng-star-inserted">
                        Chad
                      </option>
                      <option value={43} className="ng-star-inserted">
                        Chile
                      </option>
                      <option value={44} className="ng-star-inserted">
                        China
                      </option>
                      <option value={45} className="ng-star-inserted">
                        Christmas Island
                      </option>
                      <option value={46} className="ng-star-inserted">
                        Cocos (Keeling) Islands
                      </option>
                      <option value={47} className="ng-star-inserted">
                        Colombia
                      </option>
                      <option value={48} className="ng-star-inserted">
                        Comoros
                      </option>
                      <option value={49} className="ng-star-inserted">
                        Congo
                      </option>
                      <option value={50} className="ng-star-inserted">
                        Cook Islands
                      </option>
                      <option value={51} className="ng-star-inserted">
                        Costa Rica
                      </option>
                      <option value={52} className="ng-star-inserted">
                        Cote D'Ivoire
                      </option>
                      <option value={53} className="ng-star-inserted">
                        Croatia
                      </option>
                      <option value={54} className="ng-star-inserted">
                        Cuba
                      </option>
                      <option value={55} className="ng-star-inserted">
                        Cyprus
                      </option>
                      <option value={56} className="ng-star-inserted">
                        Czech Republic
                      </option>
                      <option value={57} className="ng-star-inserted">
                        Denmark
                      </option>
                      <option value={58} className="ng-star-inserted">
                        Djibouti
                      </option>
                      <option value={59} className="ng-star-inserted">
                        Dominica
                      </option>
                      <option value={60} className="ng-star-inserted">
                        Dominican Republic
                      </option>
                      <option value={61} className="ng-star-inserted">
                        East Timor
                      </option>
                      <option value={62} className="ng-star-inserted">
                        Ecuador
                      </option>
                      <option value={63} className="ng-star-inserted">
                        Egypt
                      </option>
                      <option value={64} className="ng-star-inserted">
                        El Salvador
                      </option>
                      <option value={65} className="ng-star-inserted">
                        Equatorial Guinea
                      </option>
                      <option value={66} className="ng-star-inserted">
                        Eritrea
                      </option>
                      <option value={67} className="ng-star-inserted">
                        Estonia
                      </option>
                      <option value={68} className="ng-star-inserted">
                        Ethiopia
                      </option>
                      <option value={69} className="ng-star-inserted">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value={70} className="ng-star-inserted">
                        Faroe Islands
                      </option>
                      <option value={71} className="ng-star-inserted">
                        Fiji
                      </option>
                      <option value={72} className="ng-star-inserted">
                        Finland
                      </option>
                      <option value={73} className="ng-star-inserted">
                        France
                      </option>
                      <option value={74} className="ng-star-inserted">
                        France, Metropolitan
                      </option>
                      <option value={75} className="ng-star-inserted">
                        French Guiana
                      </option>
                      <option value={76} className="ng-star-inserted">
                        French Polynesia
                      </option>
                      <option value={77} className="ng-star-inserted">
                        French Southern Territories
                      </option>
                      <option value={78} className="ng-star-inserted">
                        Gabon
                      </option>
                      <option value={79} className="ng-star-inserted">
                        Gambia
                      </option>
                      <option value={80} className="ng-star-inserted">
                        Georgia
                      </option>
                      <option value={81} className="ng-star-inserted">
                        Germany
                      </option>
                      <option value={82} className="ng-star-inserted">
                        Ghana
                      </option>
                      <option value={83} className="ng-star-inserted">
                        Gibraltar
                      </option>
                      <option value={84} className="ng-star-inserted">
                        Greece
                      </option>
                      <option value={85} className="ng-star-inserted">
                        Greenland
                      </option>
                      <option value={86} className="ng-star-inserted">
                        Grenada
                      </option>
                      <option value={87} className="ng-star-inserted">
                        Guadeloupe
                      </option>
                      <option value={88} className="ng-star-inserted">
                        Guam
                      </option>
                      <option value={89} className="ng-star-inserted">
                        Guatemala
                      </option>
                      <option value={90} className="ng-star-inserted">
                        Guinea
                      </option>
                      <option value={91} className="ng-star-inserted">
                        Guinea-bissau
                      </option>
                      <option value={92} className="ng-star-inserted">
                        Guyana
                      </option>
                      <option value={93} className="ng-star-inserted">
                        Haiti
                      </option>
                      <option value={94} className="ng-star-inserted">
                        Heard and Mc Donald Islands
                      </option>
                      <option value={95} className="ng-star-inserted">
                        Honduras
                      </option>
                      <option value={96} className="ng-star-inserted">
                        Hong Kong
                      </option>
                      <option value={97} className="ng-star-inserted">
                        Hungary
                      </option>
                      <option value={98} className="ng-star-inserted">
                        Iceland
                      </option>
                      <option value={99} className="ng-star-inserted">
                        India
                      </option>
                      <option value={100} className="ng-star-inserted">
                        Indonesia
                      </option>
                      <option value={101} className="ng-star-inserted">
                        Iran (Islamic Republic of)
                      </option>
                      <option value={102} className="ng-star-inserted">
                        Iraq
                      </option>
                      <option value={103} className="ng-star-inserted">
                        Ireland
                      </option>
                      <option value={104} className="ng-star-inserted">
                        Israel
                      </option>
                      <option value={105} className="ng-star-inserted">
                        Italy
                      </option>
                      <option value={106} className="ng-star-inserted">
                        Jamaica
                      </option>
                      <option value={107} className="ng-star-inserted">
                        Japan
                      </option>
                      <option value={108} className="ng-star-inserted">
                        Jordan
                      </option>
                      <option value={109} className="ng-star-inserted">
                        Kazakhstan
                      </option>
                      <option value={110} className="ng-star-inserted">
                        Kenya
                      </option>
                      <option value={111} className="ng-star-inserted">
                        Kiribati
                      </option>
                      <option value={112} className="ng-star-inserted">
                        North Korea
                      </option>
                      <option value={113} className="ng-star-inserted">
                        South Korea
                      </option>
                      <option value={114} className="ng-star-inserted">
                        Kuwait
                      </option>
                      <option value={115} className="ng-star-inserted">
                        Kyrgyzstan
                      </option>
                      <option value={116} className="ng-star-inserted">
                        Lao People's Democratic Republic
                      </option>
                      <option value={117} className="ng-star-inserted">
                        Latvia
                      </option>
                      <option value={118} className="ng-star-inserted">
                        Lebanon
                      </option>
                      <option value={119} className="ng-star-inserted">
                        Lesotho
                      </option>
                      <option value={120} className="ng-star-inserted">
                        Liberia
                      </option>
                      <option value={121} className="ng-star-inserted">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value={122} className="ng-star-inserted">
                        Liechtenstein
                      </option>
                      <option value={123} className="ng-star-inserted">
                        Lithuania
                      </option>
                      <option value={124} className="ng-star-inserted">
                        Luxembourg
                      </option>
                      <option value={125} className="ng-star-inserted">
                        Macau
                      </option>
                      <option value={126} className="ng-star-inserted">
                        Macedonia
                      </option>
                      <option value={127} className="ng-star-inserted">
                        Madagascar
                      </option>
                      <option value={128} className="ng-star-inserted">
                        Malawi
                      </option>
                      <option value={129} className="ng-star-inserted">
                        Malaysia
                      </option>
                      <option value={130} className="ng-star-inserted">
                        Maldives
                      </option>
                      <option value={131} className="ng-star-inserted">
                        Mali
                      </option>
                      <option value={132} className="ng-star-inserted">
                        Malta
                      </option>
                      <option value={133} className="ng-star-inserted">
                        Marshall Islands
                      </option>
                      <option value={134} className="ng-star-inserted">
                        Martinique
                      </option>
                      <option value={135} className="ng-star-inserted">
                        Mauritania
                      </option>
                      <option value={136} className="ng-star-inserted">
                        Mauritius
                      </option>
                      <option value={137} className="ng-star-inserted">
                        Mayotte
                      </option>
                      <option value={138} className="ng-star-inserted">
                        Mexico
                      </option>
                      <option value={139} className="ng-star-inserted">
                        Micronesia, Federated States of
                      </option>
                      <option value={140} className="ng-star-inserted">
                        Moldova, Republic of
                      </option>
                      <option value={141} className="ng-star-inserted">
                        Monaco
                      </option>
                      <option value={142} className="ng-star-inserted">
                        Mongolia
                      </option>
                      <option value={143} className="ng-star-inserted">
                        Montserrat
                      </option>
                      <option value={144} className="ng-star-inserted">
                        Morocco
                      </option>
                      <option value={145} className="ng-star-inserted">
                        Mozambique
                      </option>
                      <option value={146} className="ng-star-inserted">
                        Myanmar
                      </option>
                      <option value={147} className="ng-star-inserted">
                        Namibia
                      </option>
                      <option value={148} className="ng-star-inserted">
                        Nauru
                      </option>
                      <option value={149} className="ng-star-inserted">
                        Nepal
                      </option>
                      <option value={150} className="ng-star-inserted">
                        Netherlands
                      </option>
                      <option value={151} className="ng-star-inserted">
                        Netherlands Antilles
                      </option>
                      <option value={152} className="ng-star-inserted">
                        New Caledonia
                      </option>
                      <option value={153} className="ng-star-inserted">
                        New Zealand
                      </option>
                      <option value={154} className="ng-star-inserted">
                        Nicaragua
                      </option>
                      <option value={155} className="ng-star-inserted">
                        Niger
                      </option>
                      <option value={156} className="ng-star-inserted">
                        Nigeria
                      </option>
                      <option value={157} className="ng-star-inserted">
                        Niue
                      </option>
                      <option value={158} className="ng-star-inserted">
                        Norfolk Island
                      </option>
                      <option value={159} className="ng-star-inserted">
                        Northern Mariana Islands
                      </option>
                      <option value={160} className="ng-star-inserted">
                        Norway
                      </option>
                      <option value={161} className="ng-star-inserted">
                        Oman
                      </option>
                      <option value={162} className="ng-star-inserted">
                        Pakistan
                      </option>
                      <option value={163} className="ng-star-inserted">
                        Palau
                      </option>
                      <option value={164} className="ng-star-inserted">
                        Panama
                      </option>
                      <option value={165} className="ng-star-inserted">
                        Papua New Guinea
                      </option>
                      <option value={166} className="ng-star-inserted">
                        Paraguay
                      </option>
                      <option value={167} className="ng-star-inserted">
                        Peru
                      </option>
                      <option value={168} className="ng-star-inserted">
                        Philippines
                      </option>
                      <option value={169} className="ng-star-inserted">
                        Pitcairn
                      </option>
                      <option value={170} className="ng-star-inserted">
                        Poland
                      </option>
                      <option value={171} className="ng-star-inserted">
                        Portugal
                      </option>
                      <option value={172} className="ng-star-inserted">
                        Puerto Rico
                      </option>
                      <option value={173} className="ng-star-inserted">
                        Qatar
                      </option>
                      <option value={174} className="ng-star-inserted">
                        Reunion
                      </option>
                      <option value={175} className="ng-star-inserted">
                        Romania
                      </option>
                      <option value={176} className="ng-star-inserted">
                        Russian Federation
                      </option>
                      <option value={177} className="ng-star-inserted">
                        Rwanda
                      </option>
                      <option value={178} className="ng-star-inserted">
                        Saint Kitts and Nevis
                      </option>
                      <option value={179} className="ng-star-inserted">
                        Saint Lucia
                      </option>
                      <option value={180} className="ng-star-inserted">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value={181} className="ng-star-inserted">
                        Samoa
                      </option>
                      <option value={182} className="ng-star-inserted">
                        San Marino
                      </option>
                      <option value={183} className="ng-star-inserted">
                        Sao Tome and Principe
                      </option>
                      <option value={184} className="ng-star-inserted">
                        Saudi Arabia
                      </option>
                      <option value={185} className="ng-star-inserted">
                        Senegal
                      </option>
                      <option value={186} className="ng-star-inserted">
                        Seychelles
                      </option>
                      <option value={187} className="ng-star-inserted">
                        Sierra Leone
                      </option>
                      <option value={188} className="ng-star-inserted">
                        Singapore
                      </option>
                      <option value={189} className="ng-star-inserted">
                        Slovak Republic
                      </option>
                      <option value={190} className="ng-star-inserted">
                        Slovenia
                      </option>
                      <option value={191} className="ng-star-inserted">
                        Solomon Islands
                      </option>
                      <option value={192} className="ng-star-inserted">
                        Somalia
                      </option>
                      <option value={193} className="ng-star-inserted">
                        South Africa
                      </option>
                      <option value={194} className="ng-star-inserted">
                        South Georgia &amp;amp; South Sandwich Islands
                      </option>
                      <option value={195} className="ng-star-inserted">
                        Spain
                      </option>
                      <option value={196} className="ng-star-inserted">
                        Sri Lanka
                      </option>
                      <option value={197} className="ng-star-inserted">
                        St. Helena
                      </option>
                      <option value={198} className="ng-star-inserted">
                        St. Pierre and Miquelon
                      </option>
                      <option value={199} className="ng-star-inserted">
                        Sudan
                      </option>
                      <option value={200} className="ng-star-inserted">
                        Suriname
                      </option>
                      <option value={201} className="ng-star-inserted">
                        Svalbard and Jan Mayen Islands
                      </option>
                      <option value={202} className="ng-star-inserted">
                        Swaziland
                      </option>
                      <option value={203} className="ng-star-inserted">
                        Sweden
                      </option>
                      <option value={204} className="ng-star-inserted">
                        Switzerland
                      </option>
                      <option value={205} className="ng-star-inserted">
                        Syrian Arab Republic
                      </option>
                      <option value={206} className="ng-star-inserted">
                        Taiwan
                      </option>
                      <option value={207} className="ng-star-inserted">
                        Tajikistan
                      </option>
                      <option value={208} className="ng-star-inserted">
                        Tanzania, United Republic of
                      </option>
                      <option value={209} className="ng-star-inserted">
                        Thailand
                      </option>
                      <option value={210} className="ng-star-inserted">
                        Togo
                      </option>
                      <option value={211} className="ng-star-inserted">
                        Tokelau
                      </option>
                      <option value={212} className="ng-star-inserted">
                        Tonga
                      </option>
                      <option value={213} className="ng-star-inserted">
                        Trinidad and Tobago
                      </option>
                      <option value={214} className="ng-star-inserted">
                        Tunisia
                      </option>
                      <option value={215} className="ng-star-inserted">
                        Turkey
                      </option>
                      <option value={216} className="ng-star-inserted">
                        Turkmenistan
                      </option>
                      <option value={217} className="ng-star-inserted">
                        Turks and Caicos Islands
                      </option>
                      <option value={218} className="ng-star-inserted">
                        Tuvalu
                      </option>
                      <option value={219} className="ng-star-inserted">
                        Uganda
                      </option>
                      <option value={220} className="ng-star-inserted">
                        Ukraine
                      </option>
                      <option value={221} className="ng-star-inserted">
                        United Arab Emirates
                      </option>
                      <option value={222} className="ng-star-inserted">
                        United Kingdom
                      </option>
                      <option value={223} className="ng-star-inserted">
                        United States
                      </option>
                      <option value={224} className="ng-star-inserted">
                        United States Minor Outlying Islands
                      </option>
                      <option value={225} className="ng-star-inserted">
                        Uruguay
                      </option>
                      <option value={226} className="ng-star-inserted">
                        Uzbekistan
                      </option>
                      <option value={227} className="ng-star-inserted">
                        Vanuatu
                      </option>
                      <option value={228} className="ng-star-inserted">
                        Vatican City State (Holy See)
                      </option>
                      <option value={229} className="ng-star-inserted">
                        Venezuela
                      </option>
                      <option value={230} className="ng-star-inserted">
                        Viet Nam
                      </option>
                      <option value={231} className="ng-star-inserted">
                        Virgin Islands (British)
                      </option>
                      <option value={232} className="ng-star-inserted">
                        Virgin Islands (U.S.)
                      </option>
                      <option value={233} className="ng-star-inserted">
                        Wallis and Futuna Islands
                      </option>
                      <option value={234} className="ng-star-inserted">
                        Western Sahara
                      </option>
                      <option value={235} className="ng-star-inserted">
                        Yemen
                      </option>
                      <option value={236} className="ng-star-inserted">
                        Yugoslavia
                      </option>
                      <option value={237} className="ng-star-inserted">
                        Democratic Republic of Congo
                      </option>
                      <option value={238} className="ng-star-inserted">
                        Zambia
                      </option>
                      <option value={239} className="ng-star-inserted">
                        Zimbabwe
                      </option>
                      <option value={240} className="ng-star-inserted">
                        Aland Islands
                      </option>
                      <option value={241} className="ng-star-inserted">
                        St Barthelemy
                      </option>
                      <option value={242} className="ng-star-inserted">
                        Guernsey
                      </option>
                      <option value={243} className="ng-star-inserted">
                        Isle of Man
                      </option>
                      <option value={244} className="ng-star-inserted">
                        Jersey
                      </option>
                      <option value={245} className="ng-star-inserted">
                        Montenegro
                      </option>
                      <option value={246} className="ng-star-inserted">
                        St Martin (French part)
                      </option>
                      <option value={247} className="ng-star-inserted">
                        Serbia
                      </option>
                      <option value={248} className="ng-star-inserted">
                        South Sudan
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BuyerDetail;
