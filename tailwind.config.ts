import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "root-gradient": "url('/backgrounds/root-gradient-bg.jpg')"
      },
      keyframes: {
        appearFromBelow: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        appearFromBelow: 'appearFromBelow 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
