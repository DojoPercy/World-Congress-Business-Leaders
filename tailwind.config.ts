import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
     colors:{
      goldTheme: "#3B2313",
      grayColor: "#D9D9D9",
      subColor: "#F4F4F4",

     },
    
    },
  },
  plugins: [],
};
export default config;
