import { useState } from "react";
import Navbar from "../Navbar";
import { DocumentIcon } from "@heroicons/react/24/solid"; // Heroicons for file icon

export default function KycProceed() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleFileRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
              <div className="grow px-8 py-12 md:px-12 md:py-12">
                <header className="mb-8 text-center">
                  <h1 className="mb-3 text-3xl text-gray-950 font-bold">Upload Files</h1>
                  <h2 className="text-lg font-semibold text-gray-500">
                    Having problems? Check the <a href="#" className="text-red-500 underline">documentation</a>
                  </h2>
                  <hr className="my-6 border-gray-900 border-3" />
                </header>

                <div className="flex flex-col lg:flex-row lg:space-x-4">
                  {/* Drag and Drop Area */}
                  <div className="flex flex-col bg-[#FFF5F0] justify-center border-3 border-dashed h-[300px] w-full lg:w-[60%] rounded-xl items-center border-gray-400 mx-auto p-4">
                    <p className="text-2xl font-bold text-gray-700 mb-4">
                      Drag and Drop files here
                    </p>
                    <p className="text-lg font-medium text-gray-500 mb-4">or</p>
                    <label
                      htmlFor="file-upload"
                      className="px-10 py-2 text-xl bg-[#FA7669] text-white font-bold rounded-sm shadow-md hover:bg-[#d1736b] cursor-pointer"
                    >
                      Add File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </div>

                  {/* File List */}
                  <div className="w-full lg:w-[40%] mt-4 lg:mt-0 px-4 max-h-[300px] overflow-y-auto">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="relative flex items-center bg-[#FFFBF9] shadow-md rounded-lg p-2 w-full mb-2 border border-gray-300"
                      >
                        <DocumentIcon className="flex-shrink-0 h-full w-12 text-gray-500 mr-4" />
                        <div className="w-full">
                          <p className="font-medium text-gray-800 mb-0.5">{file.name}</p>
                          <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          <hr className="bg-[#a12e28] h-2 rounded-full mt-2" />
                        </div>
                        <button
                          onClick={() => handleFileRemove(index)}
                          className="absolute top-2 right-2 text-red-500 font-bold text-lg"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <button
                type="button"
                className="px-8 py-2 bg-[#FA7669] text-white text-2xl font-bold rounded-full hover:bg-[#d1736b]"
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
