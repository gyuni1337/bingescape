/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        lightgray: "#D9D9D9",
        middlegray: "#C7C7C7",
        gold: "#FFD486",
        
        dark: "#343434",
        darker: "#2C2C2C",
        bluegray: "#788395",
        nerodark: "#2A2A2A",
        midnightdark: "#212121",
        darkgold: "#C07F00"
      },
      screens: {
        "mdsm": "830px",
      },
    },
  },
  plugins: [],
};
