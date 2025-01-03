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
        className="p-2 bg-white rounded w-full"
        value={order.shipping_state} // Bind value to state
        onChange={(e)=>{updateAddSingleOrder("shipping_state",e.target.value)}} // Handle change
      >
        <option value="">Please Select State</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
        <option value="Daman and Diu">Daman and Diu</option>
        <option value="Delhi">Delhi</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Lakshadweep Islands">Lakshadweep Islands</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Pondicherry">Pondicherry</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Telangana">Telangana</option>
        <option value="Ladakh">Ladakh</option>
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
                  value={order.shipping_country}
                  onChange={(e)=>{updateAddSingleOrder("shipping_country",e.target.value)}}

                >
                  <option value={1} >
                    Afghanistan
                  </option>
                  <option value={2} >
                    Albania
                  </option>
                  <option value={3} >
                    Algeria
                  </option>
                  <option value={4} >
                    American Samoa
                  </option>
                  <option value={5} >
                    Andorra
                  </option>
                  <option value={6} >
                    Angola
                  </option>
                  <option value={7} >
                    Anguilla
                  </option>
                  <option value={8} >
                    Antarctica
                  </option>
                  <option value={9} >
                    Antigua and Barbuda
                  </option>
                  <option value={10} >
                    Argentina
                  </option>
                  <option value={11} >
                    Armenia
                  </option>
                  <option value={12} >
                    Aruba
                  </option>
                  <option value={13} >
                    Australia
                  </option>
                  <option value={14} >
                    Austria
                  </option>
                  <option value={15} >
                    Azerbaijan
                  </option>
                  <option value={16} >
                    Bahamas
                  </option>
                  <option value={17} >
                    Bahrain
                  </option>
                  <option value={18} >
                    Bangladesh
                  </option>
                  <option value={19} >
                    Barbados
                  </option>
                  <option value={20} >
                    Belarus
                  </option>
                  <option value={21} >
                    Belgium
                  </option>
                  <option value={22} >
                    Belize
                  </option>
                  <option value={23} >
                    Benin
                  </option>
                  <option value={24} >
                    Bermuda
                  </option>
                  <option value={25} >
                    Bhutan
                  </option>
                  <option value={26} >
                    Bolivia
                  </option>
                  <option value={27} >
                    Bosnia and Herzegowina
                  </option>
                  <option value={28} >
                    Botswana
                  </option>
                  <option value={29} >
                    Bouvet Island
                  </option>
                  <option value={30} >
                    Brazil
                  </option>
                  <option value={31} >
                    British Indian Ocean Territory
                  </option>
                  <option value={32} >
                    Brunei Darussalam
                  </option>
                  <option value={33} >
                    Bulgaria
                  </option>
                  <option value={34} >
                    Burkina Faso
                  </option>
                  <option value={35} >
                    Burundi
                  </option>
                  <option value={36} >
                    Cambodia
                  </option>
                  <option value={37} >
                    Cameroon
                  </option>
                  <option value={38} >
                    Canada
                  </option>
                  <option value={39} >
                    Cape Verde
                  </option>
                  <option value={40} >
                    Cayman Islands
                  </option>
                  <option value={41} >
                    Central African Republic
                  </option>
                  <option value={42} >
                    Chad
                  </option>
                  <option value={43} >
                    Chile
                  </option>
                  <option value={44} >
                    China
                  </option>
                  <option value={45} >
                    Christmas Island
                  </option>
                  <option value={46} >
                    Cocos (Keeling) Islands
                  </option>
                  <option value={47} >
                    Colombia
                  </option>
                  <option value={48} >
                    Comoros
                  </option>
                  <option value={49} >
                    Congo
                  </option>
                  <option value={50} >
                    Cook Islands
                  </option>
                  <option value={51} >
                    Costa Rica
                  </option>
                  <option value={52} >
                    Cote D'Ivoire
                  </option>
                  <option value={53} >
                    Croatia
                  </option>
                  <option value={54} >
                    Cuba
                  </option>
                  <option value={55} >
                    Cyprus
                  </option>
                  <option value={56} >
                    Czech Republic
                  </option>
                  <option value={57} >
                    Denmark
                  </option>
                  <option value={58} >
                    Djibouti
                  </option>
                  <option value={59} >
                    Dominica
                  </option>
                  <option value={60} >
                    Dominican Republic
                  </option>
                  <option value={61} >
                    East Timor
                  </option>
                  <option value={62} >
                    Ecuador
                  </option>
                  <option value={63} >
                    Egypt
                  </option>
                  <option value={64} >
                    El Salvador
                  </option>
                  <option value={65} >
                    Equatorial Guinea
                  </option>
                  <option value={66} >
                    Eritrea
                  </option>
                  <option value={67} >
                    Estonia
                  </option>
                  <option value={68} >
                    Ethiopia
                  </option>
                  <option value={69} >
                    Falkland Islands (Malvinas)
                  </option>
                  <option value={70} >
                    Faroe Islands
                  </option>
                  <option value={71} >
                    Fiji
                  </option>
                  <option value={72} >
                    Finland
                  </option>
                  <option value={73} >
                    France
                  </option>
                  <option value={74} >
                    France, Metropolitan
                  </option>
                  <option value={75} >
                    French Guiana
                  </option>
                  <option value={76} >
                    French Polynesia
                  </option>
                  <option value={77} >
                    French Southern Territories
                  </option>
                  <option value={78} >
                    Gabon
                  </option>
                  <option value={79} >
                    Gambia
                  </option>
                  <option value={80} >
                    Georgia
                  </option>
                  <option value={81} >
                    Germany
                  </option>
                  <option value={82} >
                    Ghana
                  </option>
                  <option value={83} >
                    Gibraltar
                  </option>
                  <option value={84} >
                    Greece
                  </option>
                  <option value={85} >
                    Greenland
                  </option>
                  <option value={86} >
                    Grenada
                  </option>
                  <option value={87} >
                    Guadeloupe
                  </option>
                  <option value={88} >
                    Guam
                  </option>
                  <option value={89} >
                    Guatemala
                  </option>
                  <option value={90} >
                    Guinea
                  </option>
                  <option value={91} >
                    Guinea-bissau
                  </option>
                  <option value={92} >
                    Guyana
                  </option>
                  <option value={93} >
                    Haiti
                  </option>
                  <option value={94} >
                    Heard and Mc Donald Islands
                  </option>
                  <option value={95} >
                    Honduras
                  </option>
                  <option value={96} >
                    Hong Kong
                  </option>
                  <option value={97} >
                    Hungary
                  </option>
                  <option value={98} >
                    Iceland
                  </option>
                  <option value={99} >
                    India
                  </option>
                  <option value={100} >
                    Indonesia
                  </option>
                  <option value={101} >
                    Iran (Islamic Republic of)
                  </option>
                  <option value={102} >
                    Iraq
                  </option>
                  <option value={103} >
                    Ireland
                  </option>
                  <option value={104} >
                    Israel
                  </option>
                  <option value={105} >
                    Italy
                  </option>
                  <option value={106} >
                    Jamaica
                  </option>
                  <option value={107} >
                    Japan
                  </option>
                  <option value={108} >
                    Jordan
                  </option>
                  <option value={109} >
                    Kazakhstan
                  </option>
                  <option value={110} >
                    Kenya
                  </option>
                  <option value={111} >
                    Kiribati
                  </option>
                  <option value={112} >
                    North Korea
                  </option>
                  <option value={113} >
                    South Korea
                  </option>
                  <option value={114} >
                    Kuwait
                  </option>
                  <option value={115} >
                    Kyrgyzstan
                  </option>
                  <option value={116} >
                    Lao People's Democratic Republic
                  </option>
                  <option value={117} >
                    Latvia
                  </option>
                  <option value={118} >
                    Lebanon
                  </option>
                  <option value={119} >
                    Lesotho
                  </option>
                  <option value={120} >
                    Liberia
                  </option>
                  <option value={121} >
                    Libyan Arab Jamahiriya
                  </option>
                  <option value={122} >
                    Liechtenstein
                  </option>
                  <option value={123} >
                    Lithuania
                  </option>
                  <option value={124} >
                    Luxembourg
                  </option>
                  <option value={125} >
                    Macau
                  </option>
                  <option value={126} >
                    Macedonia
                  </option>
                  <option value={127} >
                    Madagascar
                  </option>
                  <option value={128} >
                    Malawi
                  </option>
                  <option value={129} >
                    Malaysia
                  </option>
                  <option value={130} >
                    Maldives
                  </option>
                  <option value={131} >
                    Mali
                  </option>
                  <option value={132} >
                    Malta
                  </option>
                  <option value={133} >
                    Marshall Islands
                  </option>
                  <option value={134} >
                    Martinique
                  </option>
                  <option value={135} >
                    Mauritania
                  </option>
                  <option value={136} >
                    Mauritius
                  </option>
                  <option value={137} >
                    Mayotte
                  </option>
                  <option value={138} >
                    Mexico
                  </option>
                  <option value={139} >
                    Micronesia, Federated States of
                  </option>
                  <option value={140} >
                    Moldova, Republic of
                  </option>
                  <option value={141} >
                    Monaco
                  </option>
                  <option value={142} >
                    Mongolia
                  </option>
                  <option value={143} >
                    Montserrat
                  </option>
                  <option value={144} >
                    Morocco
                  </option>
                  <option value={145} >
                    Mozambique
                  </option>
                  <option value={146} >
                    Myanmar
                  </option>
                  <option value={147} >
                    Namibia
                  </option>
                  <option value={148} >
                    Nauru
                  </option>
                  <option value={149} >
                    Nepal
                  </option>
                  <option value={150} >
                    Netherlands
                  </option>
                  <option value={151} >
                    Netherlands Antilles
                  </option>
                  <option value={152} >
                    New Caledonia
                  </option>
                  <option value={153} >
                    New Zealand
                  </option>
                  <option value={154} >
                    Nicaragua
                  </option>
                  <option value={155} >
                    Niger
                  </option>
                  <option value={156} >
                    Nigeria
                  </option>
                  <option value={157} >
                    Niue
                  </option>
                  <option value={158} >
                    Norfolk Island
                  </option>
                  <option value={159} >
                    Northern Mariana Islands
                  </option>
                  <option value={160} >
                    Norway
                  </option>
                  <option value={161} >
                    Oman
                  </option>
                  <option value={162} >
                    Pakistan
                  </option>
                  <option value={163} >
                    Palau
                  </option>
                  <option value={164} >
                    Panama
                  </option>
                  <option value={165} >
                    Papua New Guinea
                  </option>
                  <option value={166} >
                    Paraguay
                  </option>
                  <option value={167} >
                    Peru
                  </option>
                  <option value={168} >
                    Philippines
                  </option>
                  <option value={169} >
                    Pitcairn
                  </option>
                  <option value={170} >
                    Poland
                  </option>
                  <option value={171} >
                    Portugal
                  </option>
                  <option value={172} >
                    Puerto Rico
                  </option>
                  <option value={173} >
                    Qatar
                  </option>
                  <option value={174} >
                    Reunion
                  </option>
                  <option value={175} >
                    Romania
                  </option>
                  <option value={176} >
                    Russian Federation
                  </option>
                  <option value={177} >
                    Rwanda
                  </option>
                  <option value={178} >
                    Saint Kitts and Nevis
                  </option>
                  <option value={179} >
                    Saint Lucia
                  </option>
                  <option value={180} >
                    Saint Vincent and the Grenadines
                  </option>
                  <option value={181} >
                    Samoa
                  </option>
                  <option value={182} >
                    San Marino
                  </option>
                  <option value={183} >
                    Sao Tome and Principe
                  </option>
                  <option value={184} >
                    Saudi Arabia
                  </option>
                  <option value={185} >
                    Senegal
                  </option>
                  <option value={186} >
                    Seychelles
                  </option>
                  <option value={187} >
                    Sierra Leone
                  </option>
                  <option value={188} >
                    Singapore
                  </option>
                  <option value={189} >
                    Slovak Republic
                  </option>
                  <option value={190} >
                    Slovenia
                  </option>
                  <option value={191} >
                    Solomon Islands
                  </option>
                  <option value={192} >
                    Somalia
                  </option>
                  <option value={193} >
                    South Africa
                  </option>
                  <option value={194} >
                    South Georgia &amp;amp; South Sandwich Islands
                  </option>
                  <option value={195} >
                    Spain
                  </option>
                  <option value={196} >
                    Sri Lanka
                  </option>
                  <option value={197} >
                    St. Helena
                  </option>
                  <option value={198} >
                    St. Pierre and Miquelon
                  </option>
                  <option value={199} >
                    Sudan
                  </option>
                  <option value={200} >
                    Suriname
                  </option>
                  <option value={201} >
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value={202} >
                    Swaziland
                  </option>
                  <option value={203} >
                    Sweden
                  </option>
                  <option value={204} >
                    Switzerland
                  </option>
                  <option value={205} >
                    Syrian Arab Republic
                  </option>
                  <option value={206} >
                    Taiwan
                  </option>
                  <option value={207} >
                    Tajikistan
                  </option>
                  <option value={208} >
                    Tanzania, United Republic of
                  </option>
                  <option value={209} >
                    Thailand
                  </option>
                  <option value={210} >
                    Togo
                  </option>
                  <option value={211} >
                    Tokelau
                  </option>
                  <option value={212} >
                    Tonga
                  </option>
                  <option value={213} >
                    Trinidad and Tobago
                  </option>
                  <option value={214} >
                    Tunisia
                  </option>
                  <option value={215} >
                    Turkey
                  </option>
                  <option value={216} >
                    Turkmenistan
                  </option>
                  <option value={217} >
                    Turks and Caicos Islands
                  </option>
                  <option value={218} >
                    Tuvalu
                  </option>
                  <option value={219} >
                    Uganda
                  </option>
                  <option value={220} >
                    Ukraine
                  </option>
                  <option value={221} >
                    United Arab Emirates
                  </option>
                  <option value={222} >
                    United Kingdom
                  </option>
                  <option value={223} >
                    United States
                  </option>
                  <option value={224} >
                    United States Minor Outlying Islands
                  </option>
                  <option value={225} >
                    Uruguay
                  </option>
                  <option value={226} >
                    Uzbekistan
                  </option>
                  <option value={227} >
                    Vanuatu
                  </option>
                  <option value={228} >
                    Vatican City State (Holy See)
                  </option>
                  <option value={229} >
                    Venezuela
                  </option>
                  <option value={230} >
                    Viet Nam
                  </option>
                  <option value={231} >
                    Virgin Islands (British)
                  </option>
                  <option value={232} >
                    Virgin Islands (U.S.)
                  </option>
                  <option value={233} >
                    Wallis and Futuna Islands
                  </option>
                  <option value={234} >
                    Western Sahara
                  </option>
                  <option value={235} >
                    Yemen
                  </option>
                  <option value={236} >
                    Yugoslavia
                  </option>
                  <option value={237} >
                    Democratic Republic of Congo
                  </option>
                  <option value={238} >
                    Zambia
                  </option>
                  <option value={239} >
                    Zimbabwe
                  </option>
                  <option value={240} >
                    Aland Islands
                  </option>
                  <option value={241} >
                    St Barthelemy
                  </option>
                  <option value={242} >
                    Guernsey
                  </option>
                  <option value={243} >
                    Isle of Man
                  </option>
                  <option value={244} >
                    Jersey
                  </option>
                  <option value={245} >
                    Montenegro
                  </option>
                  <option value={246} >
                    St Martin (French part)
                  </option>
                  <option value={247} >
                    Serbia
                  </option>
                  <option value={248} >
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
        name="billing_state"
        id="billing_state"
        className="p-2 bg-white rounded w-full"
        value={order.billing_state} // Bind value to state
        onChange={(e)=>{updateAddSingleOrder("shipping_state",e.target.value)}} // Handle change
      >
        <option value="">Please Select State</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
        <option value="Daman and Diu">Daman and Diu</option>
        <option value="Delhi">Delhi</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Lakshadweep Islands">Lakshadweep Islands</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Pondicherry">Pondicherry</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Telangana">Telangana</option>
        <option value="Ladakh">Ladakh</option>
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
                      
                  value={order.billing_country}
                  onChange={(e)=>{updateAddSingleOrder("billing_country",e.target.value)}}
                    >
                      <option value={1} >
                        Afghanistan
                      </option>
                      <option value={2} >
                        Albania
                      </option>
                      <option value={3} >
                        Algeria
                      </option>
                      <option value={4} >
                        American Samoa
                      </option>
                      <option value={5} >
                        Andorra
                      </option>
                      <option value={6} >
                        Angola
                      </option>
                      <option value={7} >
                        Anguilla
                      </option>
                      <option value={8} >
                        Antarctica
                      </option>
                      <option value={9} >
                        Antigua and Barbuda
                      </option>
                      <option value={10} >
                        Argentina
                      </option>
                      <option value={11} >
                        Armenia
                      </option>
                      <option value={12} >
                        Aruba
                      </option>
                      <option value={13} >
                        Australia
                      </option>
                      <option value={14} >
                        Austria
                      </option>
                      <option value={15} >
                        Azerbaijan
                      </option>
                      <option value={16} >
                        Bahamas
                      </option>
                      <option value={17} >
                        Bahrain
                      </option>
                      <option value={18} >
                        Bangladesh
                      </option>
                      <option value={19} >
                        Barbados
                      </option>
                      <option value={20} >
                        Belarus
                      </option>
                      <option value={21} >
                        Belgium
                      </option>
                      <option value={22} >
                        Belize
                      </option>
                      <option value={23} >
                        Benin
                      </option>
                      <option value={24} >
                        Bermuda
                      </option>
                      <option value={25} >
                        Bhutan
                      </option>
                      <option value={26} >
                        Bolivia
                      </option>
                      <option value={27} >
                        Bosnia and Herzegowina
                      </option>
                      <option value={28} >
                        Botswana
                      </option>
                      <option value={29} >
                        Bouvet Island
                      </option>
                      <option value={30} >
                        Brazil
                      </option>
                      <option value={31} >
                        British Indian Ocean Territory
                      </option>
                      <option value={32} >
                        Brunei Darussalam
                      </option>
                      <option value={33} >
                        Bulgaria
                      </option>
                      <option value={34} >
                        Burkina Faso
                      </option>
                      <option value={35} >
                        Burundi
                      </option>
                      <option value={36} >
                        Cambodia
                      </option>
                      <option value={37} >
                        Cameroon
                      </option>
                      <option value={38} >
                        Canada
                      </option>
                      <option value={39} >
                        Cape Verde
                      </option>
                      <option value={40} >
                        Cayman Islands
                      </option>
                      <option value={41} >
                        Central African Republic
                      </option>
                      <option value={42} >
                        Chad
                      </option>
                      <option value={43} >
                        Chile
                      </option>
                      <option value={44} >
                        China
                      </option>
                      <option value={45} >
                        Christmas Island
                      </option>
                      <option value={46} >
                        Cocos (Keeling) Islands
                      </option>
                      <option value={47} >
                        Colombia
                      </option>
                      <option value={48} >
                        Comoros
                      </option>
                      <option value={49} >
                        Congo
                      </option>
                      <option value={50} >
                        Cook Islands
                      </option>
                      <option value={51} >
                        Costa Rica
                      </option>
                      <option value={52} >
                        Cote D'Ivoire
                      </option>
                      <option value={53} >
                        Croatia
                      </option>
                      <option value={54} >
                        Cuba
                      </option>
                      <option value={55} >
                        Cyprus
                      </option>
                      <option value={56} >
                        Czech Republic
                      </option>
                      <option value={57} >
                        Denmark
                      </option>
                      <option value={58} >
                        Djibouti
                      </option>
                      <option value={59} >
                        Dominica
                      </option>
                      <option value={60} >
                        Dominican Republic
                      </option>
                      <option value={61} >
                        East Timor
                      </option>
                      <option value={62} >
                        Ecuador
                      </option>
                      <option value={63} >
                        Egypt
                      </option>
                      <option value={64} >
                        El Salvador
                      </option>
                      <option value={65} >
                        Equatorial Guinea
                      </option>
                      <option value={66} >
                        Eritrea
                      </option>
                      <option value={67} >
                        Estonia
                      </option>
                      <option value={68} >
                        Ethiopia
                      </option>
                      <option value={69} >
                        Falkland Islands (Malvinas)
                      </option>
                      <option value={70} >
                        Faroe Islands
                      </option>
                      <option value={71} >
                        Fiji
                      </option>
                      <option value={72} >
                        Finland
                      </option>
                      <option value={73} >
                        France
                      </option>
                      <option value={74} >
                        France, Metropolitan
                      </option>
                      <option value={75} >
                        French Guiana
                      </option>
                      <option value={76} >
                        French Polynesia
                      </option>
                      <option value={77} >
                        French Southern Territories
                      </option>
                      <option value={78} >
                        Gabon
                      </option>
                      <option value={79} >
                        Gambia
                      </option>
                      <option value={80} >
                        Georgia
                      </option>
                      <option value={81} >
                        Germany
                      </option>
                      <option value={82} >
                        Ghana
                      </option>
                      <option value={83} >
                        Gibraltar
                      </option>
                      <option value={84} >
                        Greece
                      </option>
                      <option value={85} >
                        Greenland
                      </option>
                      <option value={86} >
                        Grenada
                      </option>
                      <option value={87} >
                        Guadeloupe
                      </option>
                      <option value={88} >
                        Guam
                      </option>
                      <option value={89} >
                        Guatemala
                      </option>
                      <option value={90} >
                        Guinea
                      </option>
                      <option value={91} >
                        Guinea-bissau
                      </option>
                      <option value={92} >
                        Guyana
                      </option>
                      <option value={93} >
                        Haiti
                      </option>
                      <option value={94} >
                        Heard and Mc Donald Islands
                      </option>
                      <option value={95} >
                        Honduras
                      </option>
                      <option value={96} >
                        Hong Kong
                      </option>
                      <option value={97} >
                        Hungary
                      </option>
                      <option value={98} >
                        Iceland
                      </option>
                      <option value={99} >
                        India
                      </option>
                      <option value={100} >
                        Indonesia
                      </option>
                      <option value={101} >
                        Iran (Islamic Republic of)
                      </option>
                      <option value={102} >
                        Iraq
                      </option>
                      <option value={103} >
                        Ireland
                      </option>
                      <option value={104} >
                        Israel
                      </option>
                      <option value={105} >
                        Italy
                      </option>
                      <option value={106} >
                        Jamaica
                      </option>
                      <option value={107} >
                        Japan
                      </option>
                      <option value={108} >
                        Jordan
                      </option>
                      <option value={109} >
                        Kazakhstan
                      </option>
                      <option value={110} >
                        Kenya
                      </option>
                      <option value={111} >
                        Kiribati
                      </option>
                      <option value={112} >
                        North Korea
                      </option>
                      <option value={113} >
                        South Korea
                      </option>
                      <option value={114} >
                        Kuwait
                      </option>
                      <option value={115} >
                        Kyrgyzstan
                      </option>
                      <option value={116} >
                        Lao People's Democratic Republic
                      </option>
                      <option value={117} >
                        Latvia
                      </option>
                      <option value={118} >
                        Lebanon
                      </option>
                      <option value={119} >
                        Lesotho
                      </option>
                      <option value={120} >
                        Liberia
                      </option>
                      <option value={121} >
                        Libyan Arab Jamahiriya
                      </option>
                      <option value={122} >
                        Liechtenstein
                      </option>
                      <option value={123} >
                        Lithuania
                      </option>
                      <option value={124} >
                        Luxembourg
                      </option>
                      <option value={125} >
                        Macau
                      </option>
                      <option value={126} >
                        Macedonia
                      </option>
                      <option value={127} >
                        Madagascar
                      </option>
                      <option value={128} >
                        Malawi
                      </option>
                      <option value={129} >
                        Malaysia
                      </option>
                      <option value={130} >
                        Maldives
                      </option>
                      <option value={131} >
                        Mali
                      </option>
                      <option value={132} >
                        Malta
                      </option>
                      <option value={133} >
                        Marshall Islands
                      </option>
                      <option value={134} >
                        Martinique
                      </option>
                      <option value={135} >
                        Mauritania
                      </option>
                      <option value={136} >
                        Mauritius
                      </option>
                      <option value={137} >
                        Mayotte
                      </option>
                      <option value={138} >
                        Mexico
                      </option>
                      <option value={139} >
                        Micronesia, Federated States of
                      </option>
                      <option value={140} >
                        Moldova, Republic of
                      </option>
                      <option value={141} >
                        Monaco
                      </option>
                      <option value={142} >
                        Mongolia
                      </option>
                      <option value={143} >
                        Montserrat
                      </option>
                      <option value={144} >
                        Morocco
                      </option>
                      <option value={145} >
                        Mozambique
                      </option>
                      <option value={146} >
                        Myanmar
                      </option>
                      <option value={147} >
                        Namibia
                      </option>
                      <option value={148} >
                        Nauru
                      </option>
                      <option value={149} >
                        Nepal
                      </option>
                      <option value={150} >
                        Netherlands
                      </option>
                      <option value={151} >
                        Netherlands Antilles
                      </option>
                      <option value={152} >
                        New Caledonia
                      </option>
                      <option value={153} >
                        New Zealand
                      </option>
                      <option value={154} >
                        Nicaragua
                      </option>
                      <option value={155} >
                        Niger
                      </option>
                      <option value={156} >
                        Nigeria
                      </option>
                      <option value={157} >
                        Niue
                      </option>
                      <option value={158} >
                        Norfolk Island
                      </option>
                      <option value={159} >
                        Northern Mariana Islands
                      </option>
                      <option value={160} >
                        Norway
                      </option>
                      <option value={161} >
                        Oman
                      </option>
                      <option value={162} >
                        Pakistan
                      </option>
                      <option value={163} >
                        Palau
                      </option>
                      <option value={164} >
                        Panama
                      </option>
                      <option value={165} >
                        Papua New Guinea
                      </option>
                      <option value={166} >
                        Paraguay
                      </option>
                      <option value={167} >
                        Peru
                      </option>
                      <option value={168} >
                        Philippines
                      </option>
                      <option value={169} >
                        Pitcairn
                      </option>
                      <option value={170} >
                        Poland
                      </option>
                      <option value={171} >
                        Portugal
                      </option>
                      <option value={172} >
                        Puerto Rico
                      </option>
                      <option value={173} >
                        Qatar
                      </option>
                      <option value={174} >
                        Reunion
                      </option>
                      <option value={175} >
                        Romania
                      </option>
                      <option value={176} >
                        Russian Federation
                      </option>
                      <option value={177} >
                        Rwanda
                      </option>
                      <option value={178} >
                        Saint Kitts and Nevis
                      </option>
                      <option value={179} >
                        Saint Lucia
                      </option>
                      <option value={180} >
                        Saint Vincent and the Grenadines
                      </option>
                      <option value={181} >
                        Samoa
                      </option>
                      <option value={182} >
                        San Marino
                      </option>
                      <option value={183} >
                        Sao Tome and Principe
                      </option>
                      <option value={184} >
                        Saudi Arabia
                      </option>
                      <option value={185} >
                        Senegal
                      </option>
                      <option value={186} >
                        Seychelles
                      </option>
                      <option value={187} >
                        Sierra Leone
                      </option>
                      <option value={188} >
                        Singapore
                      </option>
                      <option value={189} >
                        Slovak Republic
                      </option>
                      <option value={190} >
                        Slovenia
                      </option>
                      <option value={191} >
                        Solomon Islands
                      </option>
                      <option value={192} >
                        Somalia
                      </option>
                      <option value={193} >
                        South Africa
                      </option>
                      <option value={194} >
                        South Georgia &amp;amp; South Sandwich Islands
                      </option>
                      <option value={195} >
                        Spain
                      </option>
                      <option value={196} >
                        Sri Lanka
                      </option>
                      <option value={197} >
                        St. Helena
                      </option>
                      <option value={198} >
                        St. Pierre and Miquelon
                      </option>
                      <option value={199} >
                        Sudan
                      </option>
                      <option value={200} >
                        Suriname
                      </option>
                      <option value={201} >
                        Svalbard and Jan Mayen Islands
                      </option>
                      <option value={202} >
                        Swaziland
                      </option>
                      <option value={203} >
                        Sweden
                      </option>
                      <option value={204} >
                        Switzerland
                      </option>
                      <option value={205} >
                        Syrian Arab Republic
                      </option>
                      <option value={206} >
                        Taiwan
                      </option>
                      <option value={207} >
                        Tajikistan
                      </option>
                      <option value={208} >
                        Tanzania, United Republic of
                      </option>
                      <option value={209} >
                        Thailand
                      </option>
                      <option value={210} >
                        Togo
                      </option>
                      <option value={211} >
                        Tokelau
                      </option>
                      <option value={212} >
                        Tonga
                      </option>
                      <option value={213} >
                        Trinidad and Tobago
                      </option>
                      <option value={214} >
                        Tunisia
                      </option>
                      <option value={215} >
                        Turkey
                      </option>
                      <option value={216} >
                        Turkmenistan
                      </option>
                      <option value={217} >
                        Turks and Caicos Islands
                      </option>
                      <option value={218} >
                        Tuvalu
                      </option>
                      <option value={219} >
                        Uganda
                      </option>
                      <option value={220} >
                        Ukraine
                      </option>
                      <option value={221} >
                        United Arab Emirates
                      </option>
                      <option value={222} >
                        United Kingdom
                      </option>
                      <option value={223} >
                        United States
                      </option>
                      <option value={224} >
                        United States Minor Outlying Islands
                      </option>
                      <option value={225} >
                        Uruguay
                      </option>
                      <option value={226} >
                        Uzbekistan
                      </option>
                      <option value={227} >
                        Vanuatu
                      </option>
                      <option value={228} >
                        Vatican City State (Holy See)
                      </option>
                      <option value={229} >
                        Venezuela
                      </option>
                      <option value={230} >
                        Viet Nam
                      </option>
                      <option value={231} >
                        Virgin Islands (British)
                      </option>
                      <option value={232} >
                        Virgin Islands (U.S.)
                      </option>
                      <option value={233} >
                        Wallis and Futuna Islands
                      </option>
                      <option value={234} >
                        Western Sahara
                      </option>
                      <option value={235} >
                        Yemen
                      </option>
                      <option value={236} >
                        Yugoslavia
                      </option>
                      <option value={237} >
                        Democratic Republic of Congo
                      </option>
                      <option value={238} >
                        Zambia
                      </option>
                      <option value={239} >
                        Zimbabwe
                      </option>
                      <option value={240} >
                        Aland Islands
                      </option>
                      <option value={241} >
                        St Barthelemy
                      </option>
                      <option value={242} >
                        Guernsey
                      </option>
                      <option value={243} >
                        Isle of Man
                      </option>
                      <option value={244} >
                        Jersey
                      </option>
                      <option value={245} >
                        Montenegro
                      </option>
                      <option value={246} >
                        St Martin (French part)
                      </option>
                      <option value={247} >
                        Serbia
                      </option>
                      <option value={248} >
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
