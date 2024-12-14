import signup from "../assets/signin.png"
import React, { useRef, useState } from 'react';
import { signInPhoneOtp } from "../modules";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from'react-toastify';

const LoginOtp = () => {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const { encodedPhone } = useParams(); 
    const navigate = useNavigate()
    const handleChange = (index, e) => {
        const value = e.target.value;
        const newOtp = [...otp];

        // Allow only digits
        if (/^[0-9]$/.test(value) || value === "") {
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input if value is entered
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            if (!otp[index] && index > 0) {
                // Move to the previous input on backspace
                inputRefs.current[index - 1].focus();
            }
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData("text").slice(0, 6);
        if (/^\d+$/.test(pasteData)) {
            const newOtp = pasteData.split("").concat(Array(6).fill(""));
            setOtp(newOtp.slice(0, 6));
            inputRefs.current[5].focus();
        }
    };
    const verify_otp = async (e) => {
        e.preventDefault()
        
  const Phone = atob(decodeURIComponent(encodedPhone));
 
    let final_otp = otp.join("");
  
        try {
    
          const response = await signInPhoneOtp(final_otp,Phone);
            console.log(response);
            
          if (response) {
            localStorage.setItem("crsf_token",response.token);
            toast.success("Logged In successfully!");
            const encodedPhone = encodeURIComponent(btoa(phone))
            navigate(`/dashboard`)
          } else {
            toast.error("There was an error processing the request.");
          }
        } catch (error) {
          toast.error("An error occurred while processing the request.");
        }
      
      };   
    return (
        <>

            {/* Pages: Sign Up: With Image Alternate */}
            {/* Page Container */}
            <div
                id="page-container"
                className="mx-auto flex min-h-dvh w-full min-w-[320px] max-w-10xl flex-col bg-white-100 dark:bg-white-900 dark:text-white-100"
            >
                {/* Page Content */}
                <main id="page-content" className="flex max-w-full flex-auto flex-col ">
                    <div className="relative flex min-h-dvh w-full">
                        {/* Sign up Section */}
                        {/* Page Container */}
                        <div
                            id="page-container"
                            className="mx-auto flex justify-end min-h-dvh w-[46%] min-w-[320px]"
                        >
                            {/* Page Content */}
                            <main id="page-content" className="flex max-w-full max-w-lg  flex-auto flex-col ">
                                <div className="relative  mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 ">
                                    {/* Sign In Section */}
                                    <section className="w-full max-w-xl py-6">
                                        <div className="flex shadow-xl flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-white-800 dark:text-white-100 p-8">
                                            {/* Header */}

                                            <header className=" text-start mb-2">
                                                <p className="my-8 text-[var(--primary-color)] gap-2 text-2xl md:text-3xl font-bold">

                                                    <span>LOGO </span>
                                                </p>
                                                <p className="text-4xl leading-10 md:text-5xl font-bold text-white-500 dark:text-white-400">
                                                    OTP Verification
                                                </p>
                                            </header>
                                            {/* END Header */}

                                            {/* Sign In Form */}
                                            <div className="grow w-full md:px-1 md:py-6">
                                                <form
                                                    onSubmit={verify_otp}
                                                    className="space-y-3 text-xs"
                                                >
                                                    <div className="space-y-1">
                                                        <label htmlFor="email" className="text-sm text-gray-600">
                                                            Enter OTP sent to {"mobile number "}
                                                        </label>

                                                    </div>

                                                    <div className="flex justify-between">
                                                        {otp.map((data, index) => (
                                                            <input
                                                                key={index}
                                                                ref={(el) => (inputRefs.current[index] = el)}
                                                                type="text"
                                                                maxLength="1"
                                                                value={data}
                                                                onChange={(e) => handleChange(index, e)}
                                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                                onPaste={handlePaste}
                                                                className="w-12 h-12 border-1 bg-[var(--lightSecondary-color)] border-gray-300 text-center text-xl rounded focus:outline-none focus:border-[var(--primary-color)]"
                                                            />
                                                        ))}
                                                    </div>



                                                    <div>

                                                        <div className='w-full flex mt-12 items-center justify-center'>
                                                            <button
                                                                type="submit"
                                                                className="rounded-3xl order  bg-[var(--primary-color)] px-8 py-2  font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                                                            >

                                                                <span>Verify</span>
                                                            </button>
                                                        </div>


                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                        {/* END Sign In Form */}


                                    </section>
                                    {/* END Sign In Section */}
                                </div>
                            </main>
                            {/* END Page Content */}
                        </div>
                        {/* END Page Container */}
                        {/* END Sign up Section */}
                        {/* Side Image */}
                        <div className="hidden w-[54%] py-6 lg:block">
                            <div className="h-full w-full flex items-center justify-center">
                                <img
                                    src={signup}
                                    className=" h-110 w-110 rounded-3xl object-cover"
                                    alt="Sign up cover image"
                                />
                            </div>
                        </div>
                        {/* END Side Image */}

                        <div className="absolute top-0 right-0 h-full w-[40%] bg-[var(--secondary-color)] -z-10"></div>
                    </div>
                </main>
                {/* END Page Content */}
            </div>
            {/* END Page Container */}
            {/* END Pages: Sign Up: With Image Alternate */}
        </>
    );
}

export default LoginOtp
