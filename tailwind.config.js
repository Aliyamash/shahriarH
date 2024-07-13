/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'redBody': ' #FF014F',
        'bgray'  : '#212428',
        'bgray2' : '#1C1E22',
        'overlay': '#020202af',
        'TGray' : '#c4cfdea6',
      },
      boxShadow: {
        '3xl': '-20px -10px 40px -10px rgba(255,255,255,0.1),13px 11px 14px -6px rgba(0,0,0,0.2) , rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
          
      },
      screens:{
        'tablet':'1103px'
      },
    },
  },
  plugins: [],
};
