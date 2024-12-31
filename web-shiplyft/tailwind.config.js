/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure this includes your component files
    './public/index.html', // Include your public HTML file
  ],
  theme: {
    extend: {
      colors: [
        // Add custom colors here
      ],
      screens: {
        'custom-lg': '800px', // Define custom breakpoint at 800px
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Add DM Sans as the default sans font
      },
    },
  },
  plugins: [],
}
