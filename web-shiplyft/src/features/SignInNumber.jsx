import signup from "../assets/signin.png"
import { Link, useNavigate } from 'react-router-dom';
import { signInPhone } from "../modules";
import { useState } from "react";
import { toast } from "react-toastify";
const SignInNumber = () => {

    const [phone ,setPhone] = useState("");
    const navigate = useNavigate();
      const sign_in = async (e) => {
        e.preventDefault()
        
        try {
          
    
          const response = await signInPhone(phone);
            console.log(response);
            
          if (response.status=="success") {
            toast.success("OTP sent successfully!");
            const encodedPhone = encodeURIComponent(btoa(phone))
            navigate(`/login-otp/${encodedPhone}`)
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
                                                <p className="my-10 text-[var(--primary-color)] gap-2 text-2xl md:text-3xl font-bold">

                                                    <span>LOGO </span>
                                                </p>
                                                <p className='text-gray-400 my-2'>Welcone Back !!!</p>
                                                <p className="text-4xl md:text-5xl font-bold text-white-500 dark:text-white-400">
                                                    Sign in
                                                </p>
                                            </header>
                                            {/* END Header */}

                                            {/* Sign In Form */}
                                            <div className="grow w-full md:px-1 md:py-6">
                                                <form
                                                    onSubmit={sign_in}
                                                    className="space-y-3 text-xs"
                                                >
                                                    <div className="space-y-1">
                                                        <label htmlFor="phone" className="text-sm font-medium">
                                                         Phone Number
                                                        </label>
                                                        <input
                                                        value={phone}
                                                        onChange={(e)=>{setPhone(e.target.value)}}
                                                            type="phone"
                                                            id="phone"
                                                            name="phone"
                                                            placeholder="Enter your number"
                                                            className="block w-full px-2 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 "
                                                        />
                                                    </div>



                                                

                                                    <div>

                                                        <div className='w-full flex my-6 items-center justify-center'>
                                                            <button
                                                                type="submit"
                                                                className="rounded-3xl order  bg-[var(--primary-color)] px-8 py-2  font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                                                            >

                                                                <span>Log In With OTP</span>
                                                            </button>
                                                        </div>
                                                        <div className='my-4 text-center text-gray-400'>I don't have an account ? <Link to="/sign-up" className="text-decoration-none"><span className='text-[var(--primary-color)]'>Sign Up</span></Link></div>
                                                        {/* Divider: With Label */}
                                                        <div className="my-2 flex items-center w-6/8">
                                                            <span
                                                                aria-hidden="true"
                                                                className="h-0.5 grow rounded bg-gray-200 dark:bg-white-700/75"
                                                            />
                                                            <span className='text-gray-400'>
                                                                or
                                                            </span>
                                                            <span
                                                                aria-hidden="true"
                                                                className="h-0.5 grow rounded bg-gray-200 dark:bg-white-700/75"
                                                            />
                                                        </div>
                                                        {/* END Divider: With Label */}
                                                        <div className="flex justify-evenly mt-4 gap-2 w-6/8">
                                                            <Link to="/sign-in">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center justify-center gap-1 rounded-3xl border border-[var(--primary-color)] bg-white px-3 py-2 text-sm leading-5 text-gray-400 hover:border-white-300 hover:text-white-900 hover:shadow-sm focus:ring focus:ring-white-300/25 active:border-white-200 active:shadow-none dark:border-white-700 dark:bg-white-800 dark:text-white-300 dark:hover:border-white-600 dark:hover:text-white-200 dark:focus:ring-white-600/40 dark:active:border-white-700"
                                                            >
                                                                <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect x="12" y="4" width="40" height="56" rx="4" fill="#7B8CF7" />

                                                                    <rect x="16" y="8" width="32" height="48" rx="2" fill="white" />

                                                                    <rect x="18" y="10" width="28" height="8" rx="1" fill="#C4C9F9" />

                                                                    <rect x="18" y="20" width="12" height="8" rx="1" fill="#FE8F8D" />
                                                                    <rect x="34" y="20" width="12" height="8" rx="1" fill="#7FFFD4" />

                                                                    <rect x="18" y="30" width="28" height="6" rx="1" fill="#B0C7F8" />

                                                                    <circle cx="42" cy="42" r="2" fill="#FE8F8D" />
                                                                    <circle cx="22" cy="46" r="2" fill="#7FFFD4" />
                                                                </svg>


                                                                <span>Email</span>
                                                            </button>
                                                                </Link>
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

export default SignInNumber
