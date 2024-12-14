import { useState } from "react";
import signup from "../assets/signin.png"
import { Link, useNavigate } from 'react-router-dom';
import { resetEmailSend } from "../modules";
import { toast } from "react-toastify";
const ForgotPasswordEmail = () => {
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const email_sent= async (e) => {
      e.preventDefault()
      
      try {
        
  
        const response = await resetEmailSend(email);
          console.log(response);
          
        if (response.success_key ==1) {
          toast.success("OTP sent successfully!");
          const encodedEmail = encodeURIComponent(btoa(email))
          navigate(`/forgot-password-verify/${encodedEmail}`)
        } else {
          toast.error(response.message)
        }
      } catch (error) {
        toast.error("An error occurred while processing the otp.");
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
                                                    Forgot Your Password
                                                </p>
                                                <p className="text-gray-800">Don't worry, happens to all of us. Enter your email below to recover your password</p>
                                            </header>
                                            {/* END Header */}

                                            {/* Sign In Form */}
                                            <div className="grow w-full md:px-1 md:py-6">
                                                <form
                                                    onSubmit={email_sent}
                                                    className="space-y-3 text-xs"
                                                >
                                                    <div className="space-y-1">
                                                        <label htmlFor="email" className="text-sm font-medium">
                                                            Email
                                                        </label>
                                                        <input
                                                        value={email}
                                                        onChange={(e)=>{setEmail(e.target.value)}}
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Enter your email"
                                                            className="block w-full px-2 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 "
                                                        />
                                                    </div>





                                                    <div>

                                                        <div className='w-full flex mt-12 items-center justify-center'>
                                                            <button
                                                                type="submit"
                                                                className="rounded-3xl order  bg-[var(--primary-color)] px-8 py-2  font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                                                            >

                                                                <span>Submit</span>
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

export default ForgotPasswordEmail
