import React from "react";
import SummaryCards from "../common/SummaryCards";
import Tile from "../common/Tile";

const NDR = () => {
  return (
    <>
      <SummaryCards />
      <div className="col-12 flex my-4">
      <div className="col-6 p-2">
        <div className="bg-white p-4 h-80 shadow-2xl rounded">
          <div className="row mb-4">
            <div className="col-xs-6 col-md-8">
              <p className="text-lg font-normal ">NDR Response Summary</p>
            </div>
            <div className="col-xs-6 col-md-4">
              <span className="float-end">
                <img
                  src="https://app.shiprocket.in/seller/assets/images/Real-time-data.svg"
                  alt="Real-time data"
                  width="28"
                  height="28"
                />
              </span>
            </div>
          </div>
          <table className="w-full ">
            <tbody>
              <tr>
                <td className="w-1/2">
                  <Tile title={"Seller Response"} count={12} />
                </td>
                <td className="w-1/2">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
              </tr>
              <tr>
                <td className="w-1/2">
                  <Tile title={"Seller Response"} count={12} />
                </td>
                <td className="w-1/2">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
              </tr>
              <tr>
                <td className="w-1/2">
                  <Tile title={"Seller Response"} count={12} />
                </td>
                <td className="w-1/2">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div className="col-6 p-2 ">
        <div className="bg-white p-4 h-80 shadow-2xl rounded">
          <div className="row">
            <div className="col-xs-6 col-md-8">
              <p className="text-lg font-normal
               ">NDR Funnel</p>
            </div>
            <div className="col-xs-6 col-md-4">
              <span className="float-end">
                <img
                  src="https://app.shiprocket.in/seller/assets/images/Real-time-data.svg"
                  alt="Real-time data"
                  width="28"
                  height="28"
                />
              </span>
            </div>
          </div>
          <div className="overflow-x-scroll h-5/6">
          <table>
            <thead><tr><td className="w-1/3 min-w-56">1st Ndr</td><td className="w-1/3 min-w-56">2nd Ndr</td><td className="w-1/3 min-w-56">3rd Ndr</td></tr></thead>
            <tbody>
              <tr>
                <td className="w-1/3 min-w-56">
                  <Tile title={"Seller Response"} count={12} />
                </td>
                <td className="w-1/3 min-w-56">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
                <td className="w-1/3 min-w-56">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <Tile title={"Seller Response"} count={12} />
                </td>
                <td className="w-1/3">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
              </tr>
              <tr>
                <td className="w-1/3">
                  <Tile title={"Seller Response"} count={12} />
                </td>
                <td className="w-1/3">
                  <Tile title={"Buyer Response"} count={9} />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NDR;
