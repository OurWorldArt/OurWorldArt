/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#f9f3ee',
        customLight2: '#faf9f9',
        alice_blue: { DEFAULT: '#ecf4f6', 100: '#1f3b42', 200: '#3e7684', 300: '#6aa9b9', 400: '#accfd8', 500: '#ecf4f6', 600: '#f1f7f8', 700: '#f5f9fa', 800: '#f8fbfc', 900: '#fcfdfd' },
        platinum: { DEFAULT: '#dae3df', 100: '#26332d', 200: '#4c655a', 300: '#749687', 400: '#a7bcb3', 500: '#dae3df', 600: '#e1e8e5', 700: '#e8eeeb', 800: '#f0f4f2', 900: '#f7f9f8' },
        pearl: { DEFAULT: '#ded3ba', 100: '#372f1b', 200: '#6e5d35', 300: '#a58c50', 400: '#c3b083', 500: '#ded3ba', 600: '#e4dcc8', 700: '#ebe5d6', 800: '#f2ede3', 900: '#f8f6f1' },
        old_rose: { DEFAULT: '#d4897f', 100: '#321511', 200: '#652a22', 300: '#973e32', 400: '#c3594a', 500: '#d4897f', 600: '#dc9f97', 700: '#e5b7b1', 800: '#eecfcb', 900: '#f6e7e5' },
        thulian_pink: { DEFAULT: '#c9759c', 100: '#2e121f', 200: '#5b233d', 300: '#89355c', 400: '#b6477b', 500: '#c9759c', 600: '#d48faf', 700: '#deabc3', 800: '#e9c7d7', 900: '#f4e3eb' },
      },
    },
  },
  plugins: [],
}