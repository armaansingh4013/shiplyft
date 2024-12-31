import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
export default function KycProceed() {
  // Initialize navigate for redirect
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/kyc/address'); // Redirect to /kyc/address on click
  };

  return (
    <>
      <Navbar />
      <div
        id="page-container"
        className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-gray-100 text-gray-100 overflow-hidden"
      >
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center overflow-hidden p-6 lg:p-8">
            <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300/75 bg-[#FFFBF9] ring-4 ring-gray-200/50">
              <div className="grow px-8 py-10 md:px-12 md:py-10">
                <header className="mb-8 text-center">
                  <h1 className="mb-3 text-2xl text-gray-950 font-extrabold">Almost Done!</h1>
                  <h2 className="text-base font-medium text-gray-500">
                    <p>Activate your account for shipping by completing the KYC verification </p>
                    <p>process with your Aadhaar or GSTIN.</p>
                  </h2>
                </header>
                <hr className="my-6 border-gray-700 border-2" />

                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center justify-center gap-3 rounded-lg border border-gray-200 bg-[#FBF3E0] px-4 py-3 text-base font-bold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none">
                    <span>Note: KYC is done for identification proof, and is mandatory for shipping your orders.</span>
                  </div>
                  <button
                    type="button"
                    className="relative mx-auto w-3/4 max-w-sm inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-[#FA7669] px-6 py-3 text-xl font-extrabold text-white leading-7 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none"
                  >
                    <span>Proceed to verify kyc</span>
                  </button>
                </div>

                <h3 className="my-8 flex justify-center text-center">
                  <span className="mx-3 text-base font-medium text-[#FA7669]">Skip for Now</span>
                </h3>
                <hr className="my-6 border-gray-700 border-2" />

                <header className="mb-8 text-center">
                  <h1 className="mb-3 text-2xl text-gray-950 font-extrabold">Looking to Ship Internationally?</h1>
                  <h2 className="text-base font-medium text-gray-500">
                    <p>Note - International KYC will auto-verify domestic KYC as well</p>
                  </h2>
                  <button
                    type="button"
                    className="relative mx-auto w-3/4 max-w-sm inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-[#FA7669] px-6 py-3 text-xl font-extrabold text-white leading-7 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none"
                  >
                    <span>Verify International KYC</span>
                  </button>
                </header>

                <header className="mb-8 text-center">
                  <h2 className="text-base font-medium text-gray-500">
                    <p>For any assistance</p>
                    <p>Write to us at <span className="text-gray-950">support@xyz.com</span></p>
                  </h2>
                  <hr className="my-6 border-gray-700 border-2" />
                  <button
                    type="button"
                    className="relative mx-auto w-3/4 max-w-sm inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-[#FA7669] px-6 py-3 text-xl font-extrabold text-white leading-7 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none"
                  >
                    <span>GST Verify</span>
                  </button>
                </header>
              </div>
            </div>

            {/* Button placed at the bottom of the page content */}
            <div className="mt-4 mx-auto w-full flex justify-end pb-6">
              <button
                type="button"
                className="w-48 px-6 py-3 bg-[#FA7669] text-white text-xl font-bold rounded-full hover:bg-[#d1736b]"
                onClick={handleNextClick} // Trigger the redirect on click
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