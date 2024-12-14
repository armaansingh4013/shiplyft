// import React from 'react'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import signup from "../assets/signin.png"
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetPassword } from '../modules';
const ResetPassword = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [searchParams] = useSearchParams();

  // Retrieve and decode parameters
  const email = searchParams.get("email")
    ? atob(decodeURIComponent(searchParams.get("email")))
    : null;

  const otp = searchParams.get("otp")
    ? atob(decodeURIComponent(searchParams.get("otp")))
    : null;
const navigate = useNavigate()
const reset_password = async (e) => {
    e.preventDefault()
    if( password != confirmPassword){
      toast.error("Passwords ar not same")
      return
    }

    try {

      const response = await resetPassword(email,otp,password);
        console.log(response);
        
      if (response.success_key ==1) {
        toast.success("Password set successfully!");
        
        navigate(`/home`)
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

                      <header className=" text-start">
                        <p className="mb-6 text-[var(--primary-color)] gap-2 text-2xl md:text-3xl font-bold">

                          <span>LOGO </span>
                        </p>
                        <p className="text-4xl md:text-5xl font-bold text-white-500 dark:text-white-400">
                          Set a password
                        </p>
                        <p className='text-gray-700 text-sm'>
                            Your previous password has been reseted. Please set a new password for your account.
                        </p>
                      </header>
                      {/* END Header */}

                      {/* Sign In Form */}
                      <div className="grow w-full md:px-1 md:py-4">
                        <form
                          onSubmit={reset_password}
                          className="space-y-5 text-xs"
                        >
                          
                         
                          <div className="space-y-1 relative">
                            <label htmlFor="password" className="text-sm font-medium">
                              Password
                            </label>
                            <div className="relative">
                              <input
                              value={password}
                              onChange={(e)=>{setPassword(e.target.value)}}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="block w-full bg-[var(--lightSecondary-color)] px-3 py-1 pr-10 leading-6 placeholder-gray-500 "
                              />
                              <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800"
                              >
                                {showPassword ? (
                                  <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </button>
                            </div>
                          </div>
                          <div className="space-y-1 relative">
                            <label htmlFor="password" className="text-sm font-medium">
                             Confirm Password
                            </label>
                            <div className="relative">
                              <input
                              value={confirmPassword}
                              onChange={(e)=>{setConfirmPassword(e.target.value)}}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="block w-full bg-[var(--lightSecondary-color)] px-3 py-1 pr-10 leading-6 placeholder-gray-500 "
                              />
                              <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800"
                              >
                                {showConfirmPassword ? (
                                  <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </button>
                            </div>
                          </div>
                          <div>
                           
                            <div className='w-full flex mt-6 items-center justify-center'>
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

export default ResetPassword
