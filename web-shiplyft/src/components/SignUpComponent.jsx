import { Link } from "react-router-dom";
import image1 from "../assets/images/signupcomponent1.jpeg";
import image2 from "../assets/images/signupcomponent2.png";
import image3 from "../assets/images/signupcomponent3.png";
import image4 from "../assets/images/signupcomponent4.png";
import image5 from "../assets/images/signupcomponent5.png";
import image6 from "../assets/images/signupcomponent6.png";
import image7 from "../assets/images/signupcomponent7.png";
import image8 from "../assets/images/signupcomponent8.png";
import image9 from "../assets/images/signupcomponent9.png";
// import image10 from "../assets/images/signupcomponent10.png";

export default function SignUpComponent() {
  return (
    <>
      {/* About Section: Company with Images and Stats */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="mb- text-5xl font-black text-black dark:text-white">
                Lorem Ipsum is very
              </h2>
              <h2 className="mb-3 text-5xl font-black text-black dark:text-white">
                Simply Dummy.
              </h2>
              <h3 className="text-lg/relaxed text-gray-800 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              </h3>
            </div>
            {/* END Heading */}

            {/* Action */}
            <Link
              to="/sign-in"
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-700 px-8 py-3 text-md font-semibold leading-6 text-white hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:ring focus:ring-gray-400/50 active:border-gray-700 active:bg-gray-700 dark:focus:ring-gray-400/90 text-decoration-none"
            >
              <span>Get Started</span>
            </Link>
            {/* END Action */}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
            <div className="gap-4 sm:flex">
              <div className="group relative mb-8 ml-3 inline-flex size-12 flex-none items-center justify-center sm:mb-0 sm:mt-5">
                <div className="absolute inset-0 -m-3 rounded-xl bg-[#3088FF] shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  className="hi-outline hi-code-bracket relative inline-block size-8 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">168</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="gap-10 sm:flex">
              <div className="group relative mb-8 ml-3 inline-flex size-12 flex-none items-center justify-center sm:mb-0 sm:mt-5">
                <div className="absolute inset-0 -m-3 rounded-xl bg-[#F8B3B8] shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110 " />
                <svg
                  className="hi-outline hi-device-phone-mobile relative inline-block size-8 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">Title 1</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="gap-10  sm:flex">
              <div className="group relative mb-8 ml-3 inline-flex size-12 flex-none items-center justify-center sm:mb-0 sm:mt-5">
                <div className="absolute inset-0 -m-3 rounded-xl bg-[#F2C94C] shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <span className="relative text-xl font-medium text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100">
                  JS
                </span>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">425+</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Search and copy SVG icons, build your button markup or copy
                  your favorite color classes with powerful tools.
                </p>
              </div>
            </div>
            <div className="gap-10 sm:flex">
              <div className="group relative mb-8 ml-3 inline-flex size-12 flex-none items-center justify-center sm:mb-0 sm:mt-5">
                <div className="absolute inset-0 -m-3 rounded-xl bg-[#6FCF97] shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110" />
                <svg
                  className="hi-outline hi-cog relative inline-block size-8 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">345</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Search and copy SVG icons, build your button markup or copy
                  your favorite color classes with powerful tools.
                </p>
              </div>
            </div>
            <div className="gap-10 sm:flex">
              <div className="group relative mb-8 ml-3 inline-flex size-12 flex-none items-center justify-center sm:mb-0 sm:mt-5">
                <div className="absolute inset-0 -m-3  rounded-xl bg-[#9B51E0] shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110 dark:bg-gray-700" />
                <svg
                  className="hi-outline hi-cog relative inline-block size-8 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">325</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="gap-10 sm:flex">
              <div className="group relative mb-8 ml-3 inline-flex size-12 flex-none items-center justify-center sm:mb-0 sm:mt-5">
                <div className="absolute inset-0 -m-3  rounded-xl bg-[#62DBE2] shadow-inner transition duration-150 ease-out group-hover:-rotate-3 group-hover:scale-110 dark:bg-gray-700" />
                <svg
                  className="hi-outline hi-cog relative inline-block size-8 text-white opacity-90 transition duration-150 ease-out group-hover:scale-125 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">Title 3</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* END Images */}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4">
            <div className="relative flex flex-col overflow-hidden rounded-tl-lg rounded-bl-lg bg-gray-100">
              <img src={image1} className="h-full w-full" alt="Image1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center text-lg mt-[50%]">
                  Your centered text goes here.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden  bg-gray-100">
              <img src={image2} className="h-full w-full" alt="Image1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center text-lg mt-[50%]">
                  Your centered text goes here.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden  bg-gray-100">
              <img src={image3} className="h-full w-full" alt="Image1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center text-lg mt-[50%]">
                  Your centered text goes here.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-tr-lg rounded-br-lg bg-gray-100">
              <img src={image4} className="h-full w-full" alt="Image1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center text-lg mt-[50%]">
                  Your centered text goes here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="mb- text-5xl font-black text-black dark:text-white">
                Lorem Ipsum is very
              </h2>
              <h2 className="mb-3 text-5xl font-black text-black dark:text-white">
                Simply Dummy.
              </h2>
              <h3 className="text-lg/relaxed text-gray-800 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              </h3>
            </div>
            {/* END Heading */}

            {/* Action */}
            <Link
              to="/sign-in"
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-700 px-8 py-3 text-md font-semibold leading-6 text-white hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:ring focus:ring-gray-400/50 active:border-gray-700 active:bg-gray-700 dark:focus:ring-gray-400/90 text-decoration-none"
            >
              <span>Get Started</span>
            </Link>
            {/* END Action */}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
            <div className="gap-4 sm:flex rounded-br-lg">
              <img
                src={image5}
                className=" rounded-br-full  rounded-bl-full"
                alt=""
              />
            </div>
            <div className="gap-10 sm:flex">
              <img
                src={image6}
                className=" rounded-br-full  rounded-bl-full"
                alt=""
              />
            </div>
          </div>
          {/* END Images */}
        </div>
      </div>

      {/* END About Section: Company with Images and Stats */}
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Blog Posts */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <div className="flex flex-col  lg:col-span-4 lg:flex-row">
              <div className="lg:w-8/12">
                <img
                  src={image7}
                  alt=""
                  className="h-full w-full rounded-3xl "
                />
              </div>
              <div className="w-full lg:w-4/12 lg:pl-6 py-2">
                <h4 className="mb-2 text-lg font-bold sm:text-2xl">01</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus
                </p>

                <h4 className="mb-2 text-lg font-bold sm:text-2xl">02</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus
                </p>

                <h4 className="mb-2  text-lg font-bold sm:text-2xl">03</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:col-span-2">
              <a
                href="#"
                className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-teal-200 "
              >
                <img src={image8} alt="" />
              </a>
            </div>
            <div className="flex flex-col lg:col-span-2">
              <a
                href="#"
                className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-teal-200 "
              >
                <img src={image9} alt="" />
              </a>
            </div>
          </div>
          {/* END Blog Posts */}
        </div>
      </div>
      <hr />
    </>
  );
}
