import { useState } from "react";
import signup from "../assets/signin.png"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { resetOtpCheck } from "../modules";
import { toast } from "react-toastify";
const ForgotPasswordCode = () => {
const [otp,setOtp]=useState("");

const { encodedEmail } = useParams(); 
const navigate = useNavigate()
const verify_otp = async (e) => {
    e.preventDefault()
    
const email = atob(decodeURIComponent(encodedEmail));


    try {

      const response = await resetOtpCheck(email,otp);
        console.log(response);
        
      if (response.success_key ==1) {
        toast.success("OTP verified successfully!");
        const encodedOTP = encodeURIComponent(btoa(otp));     
        navigate(`/reset-password?email=${encodedEmail}&otp=${encodedOTP}`)
      } else {
        toast.error(response.message);
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
                                                <p className="mb-8 text-[var(--primary-color)] gap-2 text-2xl md:text-3xl font-bold">

                                                    <span>LOGO </span>
                                                </p>
                                                <p className="text-4xl leading-10 md:text-5xl font-bold text-white-500 dark:text-white-400">
                                                    Verify Code
                                                </p>
                                                <p className="text-gray-600">An uthentication code has ben sent to your email</p>
                                            </header>
                                            {/* END Header */}

                                            {/* Sign In Form */}
                                            <div className="grow w-full md:px-1 md:py-6">
                                                <form
                                                    onSubmit={verify_otp}
                                                    className="space-y-3 text-xs"
                                                >
                                                    <div className="space-y-1">
                                                        <label htmlFor="code" className="text-sm font-medium">
                                                            Enter Code
                                                        </label>
                                                        <input
                                                        value={otp}
                                                        onChange={(e)=>{setOtp(e.target.value)}}
                                                            type="number"
                                                            id="code"
                                                            name="code"
                                                            placeholder="Code"
                                                            className="block w-full px-2 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 "
                                                        />
                                                    </div>





                                                    <div>
<div className="text-gray-400"><p>Didn't recieve a code ? <span className="text-[var(--primary-color)]">Resend</span></p></div>
                                                        <div className='w-full flex mt-4 items-center justify-center'>
                                                            <button
                                                                type="submit"
                                                                className="rounded-3xl order  bg-[var(--primary-color)] px-10 py-2  font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
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

export default ForgotPasswordCode
