import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../Navbar";

export default function KycProceed() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  // Handle redirection on Next button click
  const handleNext = () => {
    navigate("/kyc/verify"); // Redirect to /kyc/verify
  };

  return (
    <>
      <Navbar />
      <div
        id="page-container"
        className="h-screen font-sans flex flex-col bg-gray-100 text-gray-100 overflow-hidden"
      >
        <main id="page-content" className="flex flex-col flex-grow relative">
          <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col justify-center overflow-hidden p-6 lg:p-8">
            <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300/75 bg-[#FFFBF9] ring-4 ring-gray-200/50">
              <div className="grow px-8 py-10 md:px-12 md:py-10">
                <header className="mb-8 text-center">
                  <h1 className="mb-3 text-3xl text-gray-950 font-bold">
                    Add Your Company Address
                  </h1>
                  <h2 className="text-lg font-semibold text-gray-500">
                    <p>This is the registered address of your Company/Business</p>
                  </h2>
                </header>
                <hr className="my-6 border-gray-700 border-2" />

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div>
                    <label className="text-base font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-base font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    {/* City */}
                    <div>
                      <label className="text-base font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="text-base font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Enter your state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    {/* Country */}
                    <div>
                      <label className="text-base font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Enter your country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                      />
                    </div>

                    {/* Postal Code */}
                    <div>
                      <label className="text-base font-medium text-gray-700">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Enter your postal code"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 ">
              <button
                type="button"
                className="px-10 py-3 bg-[#FA7669] text-white text-2xl font-semibold rounded-full shadow-lg hover:bg-[#d1736b]"
                onClick={handleNext} // Call handleNext on click
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
