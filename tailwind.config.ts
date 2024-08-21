import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{- include personal picture in / page.js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "root-gradient": "url('/backgrounds/macos-monterey-compressed.jpg')",
        "home-self": "url('/backgrounds/home-self.jpg')",
      },
      keyframes: {
        appearFromBelow: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        appearFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        appearFromBelow: "appearFromBelow 1s ease-out forwards",
        appearFromLeft: "appearFromLeft 1s ease-out forwards",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
