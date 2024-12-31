import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import Navbar from "../Navbar";

export default function KycProceed() {
  const [formData, setFormData] = useState({
    gstNumber: "",
    gstDocument: null,
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      gstDocument: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleNextClick = () => {
    navigate("/kyc/files"); // Redirect to /kyc/files when the button is clicked
  };

  return (
    <>
      <Navbar />
      <div
        id="page-container"
        className="h-screen font-dm-sans flex flex-col bg-gray-100 text-gray-100 overflow-hidden"
      >
        <main id="page-content" className="flex flex-col flex-grow relative">
          <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col justify-center overflow-hidden p-6 lg:p-8">
            <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300/75 bg-[#FFFBF9] ring-4 ring-gray-200/50">
              <div className="grow px-8 py-10 md:px-12 md:py-10">
                <header className="mb-8 text-center">
                  <h1 className="mb-3 text-3xl text-gray-950 font-bold">
                    GST Verify
                  </h1>
                  <h2 className="text-lg font-semibold text-gray-500">
                    <p>
                      This is the registered address of your Company/Business
                    </p>
                  </h2>
                </header>
                <hr className="my-6 border-gray-700 border-2" />

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* GST Number */}
                  <div>
                    <label className="text-base font-medium text-gray-700">
                      GST Number
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      placeholder="Enter your GST Number"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-full"
                    />
                  </div>

                  {/* GST Document Upload */}
                  <div className="flex flex-col bg-[#FFF5F0] justify-center border-3 border-dashed h-[231px] rounded-xl items-center border-gray-400 mx-auto">
                    <p className="text-2xl font-bold text-gray-700 mb-4">
                      GST Document
                    </p>
                    <input
                      type="file"
                      name="gstDocument"
                      accept="application/pdf, image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="px-10 py-2 text-xl bg-[#FA7669] text-white font-bold rounded-sm shadow-md hover:bg-[#d1736b] cursor-pointer"
                    >
                      Add File
                    </label>
                    {formData.gstDocument && (
                      <p className="mt-2 text-sm text-gray-700">
                        {formData.gstDocument.name}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <button
                type="button"
                className="px-8 py-2 bg-[#FA7669] text-white text-2xl font-bold rounded-full hover:bg-[#d1736b]"
                onClick={handleNextClick} // Trigger redirect when the button is clicked
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