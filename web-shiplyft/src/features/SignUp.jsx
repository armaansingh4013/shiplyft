// import React from 'react'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import signup from "../assets/signin.png"
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../modules';
import { toast } from 'react-toastify';
const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    check:""
  });
  
    const navigate = useNavigate();
  const sign_up = async (e) => {
    e.preventDefault()
    if(formData.check != "1"){
      toast.error("Please Read Policies")
    }
    else if(password!= confirm_password || password.length <6){
      toast.error("Password not valid")
    }
    else{
    try {
      

      const response = await signUp(formData.phone,formData.firstname,formData.email,formData.password,formData.confirm_password);

      if (response.status=="success") {
        localStorage.setItem("crsf_token",response.sid);
        toast.success("Sign Up successfully!");
        navigate("/sign-in")
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while processing the replacement.");
    }
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
                        <p className="mb-3 text-[var(--primary-color)] gap-2 text-2xl md:text-3xl font-bold">

                          <span>LOGO </span>
                        </p>
                        <p className="text-3xl md:text-4xl font-bold text-white-500 dark:text-white-400">
                          Sign Up
                        </p>
                      </header>
                      {/* END Header */}

                      {/* Sign In Form */}
                      <div className="grow w-full md:px-1 md:py-6">
                        <form
                          onSubmit={sign_up}
                          className="space-y-3 text-xs"
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label htmlFor="firstname" className="text-sm font-medium">
                                First Name
                              </label>
                              <input
                              value={formData.firstname}
                              onChange={(e)=>{setFormData({...formData,firstname:e.target.value})}}
                                type="text"
                                id="firstname"
                                name="firstname"
          
                                className="block w-full px-2 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-white-600 dark:bg-white-800 dark:placeholder-white-400 dark:focus:border-blue-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <label htmlFor="lastname" className="text-sm font-medium">
                                Last Name
                              </label>
                              <input
                              value={formData.lastname}
                              onChange={(e)=>{setFormData({...formData,lastname:e.target.value})}}
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="block w-full  px-3 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-white-600 dark:bg-white-800 dark:placeholder-white-400 dark:focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label htmlFor="email" className="text-sm font-medium">
                                Email
                              </label>
                              <input
                              value={formData.email}
                              onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full   px-3 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-white-600 dark:bg-white-800 dark:placeholder-white-400 dark:focus:border-blue-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <label htmlFor="phone" className="text-sm font-medium">
                                Phone Number
                              </label>
                              <input
                              value={formData.phone}
                              onChange={(e)=>{setFormData({...formData,phone:e.target.value})}}
                                type="phone"
                                id="phone"
                                name="phone"
                                className="block w-full  px-3 py-1 bg-[var(--lightSecondary-color)] leading-6 placeholder-white-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-white-600 dark:bg-white-800 dark:placeholder-white-400 dark:focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <div className="space-y-1 relative">
                            <label htmlFor="password" className="text-sm font-medium">
                              Password
                            </label>
                            <div className="relative">
                              <input
                                value={formData.password}
                                onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
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
                            <label htmlFor="confirm_password" className="text-sm font-medium">
                             Confirm Password
                            </label>
                            <div className="relative">
                              <input
                              value={formData.confirm_password}
                              onChange={(e)=>{setFormData({...formData,confirm_password:e.target.value})}}
                                type={showConfirmPassword ? "text" : "password"}
                                id="conform_password"
                                name="confirm_password"
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
                            <div className="mb-5 flex items-center justify-between gap-2">
                              <label className="flex items-center">
                                <input
                                  value={formData.check}
                                  onChange={(e)=>{setFormData({...formData,check:e.target.checked})}}
                                  type="checkbox"
                                  id="remember_me"
                                  name="remember_me"
                                  className="size-3 rounded border border-white-200 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-white-600 dark:bg-white-800 dark:ring-offset-white-900 dark:checked:border-transparent dark:checked:bg-blue-500 dark:focus:border-blue-500"
                                />
                                <span className="ml-2 text-xs text-gray-400">I agree to all the Terms and Privacy Policies</span>
                              </label>

                            </div>
                            <div className='w-full flex items-center justify-center'>
                              <button
                                type="submit"
                                className="rounded-3xl order  bg-[var(--primary-color)] px-8 py-2  font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90"
                              >

                                <span>Sign Up</span>
                              </button>
                            </div>
                            <div className='my-4 text-center text-gray-400'> Already have an account ? <Link to="/sign-in" className='text-decoration-none'><span className='text-[var(--primary-color)]'>Sign In</span></Link></div>
                            {/* Divider: With Label */}
                            <div className="my-5 flex items-center w-6/8">
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
                            <div className="flex flex-col md:flex-row justify-evenly gap-2 w-6/8">

                              <button
                                type="button"
                                className="inline-flex items-center justify-center gap-1 rounded-3xl border border-[var(--primary-color)] bg-white px-3 py-2 text-sm leading-5 text-gray-400 hover:border-white-300 hover:text-white-900 hover:shadow-sm focus:ring focus:ring-white-300/25 active:border-white-200 active:shadow-none dark:border-white-700 dark:bg-white-800 dark:text-white-300 dark:hover:border-white-600 dark:hover:text-white-200 dark:focus:ring-white-600/40 dark:active:border-white-700"
                              >
                                <svg
                                  className="inline-block size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill="#4285F4"
                                    d="M24 22v4h11.6c-1 5.2-5.8 8-11.6 8-7 0-12.8-5.8-12.8-12.8S17 8.4 24 8.4c4 0 6.7 1.7 8.3 3.2l3.4-3.4C32.8 5 28.8 3 24 3 12.8 3 3 12.8 3 24s9.8 21 21 21c10.7 0 20.3-7.5 20.3-21 0-1.3-.2-2.5-.4-3.7H24z"
                                  />
                                  <path fill="#34A853" d="M6.3 14.1 10.9 17c1.5-3.8 5.3-7 10.1-7 3 0 5.1 1.2 6.3 2.3l4.6-4.6C28.3 5 24.8 3 21 3c-8 0-14.8 6.8-14.8 14.8 0 1.8.3 3.4.8 5z" />
                                  <path fill="#FBBC05" d="M24 45c6 0 11-2 14.8-5.5l-4.8-3.6c-1.8 1.3-4.6 2.3-8 2.3-6.2 0-11.3-4-13.1-9.5l-4.8 3.7C11 39.3 17 45 24 45z" />
                                  <path fill="#EA4335" d="M45 24c0-1.5-.2-2.8-.5-4.1H24v8h11.6c-1.5 4.4-5.6 7-10.6 7-6.2 0-11.3-4-13.1-9.5l-4.8 3.7C11 39.3 17 45 24 45c10.7 0 20.3-7.5 20.3-21z" />
                                </svg>

                                <span>Sign In With Google</span>
                              </button>
                              <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-[var(--primary-color)] bg-white px-3 py-2 text-sm leading-5 text-gray-400 hover:border-white-300 hover:text-white-900 hover:shadow-sm focus:ring focus:ring-white-300/25 active:border-white-200 active:shadow-none dark:border-white-700 dark:bg-white-800 dark:text-white-300 dark:hover:border-white-600 dark:hover:text-white-200 dark:focus:ring-white-600/40 dark:active:border-white-700"
                              >
                                <svg
                                  className="bi bi-facebook inline-block size-4 text-[#1877f2]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <span>Sign In With Facebook</span>
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

export default SignUp
