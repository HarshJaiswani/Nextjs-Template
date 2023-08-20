/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helper/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "letter-bg": `url("/assets/questionmarkbg.jpg")`,
        "problem-bg": `url("/assets/codebyhj/problem-solving.png")`,
      },
    },
  },
  plugins: [],
};
