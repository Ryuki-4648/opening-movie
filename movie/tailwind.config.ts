import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red01: "#ff5555",
        gray01: "#808080",
        gray02: "#757575",
        blue01: "#007bff",
        bg01: "#fff9f9",
        yellow01: "#ffcc33",
        black01: "#1f1f1f",
        border01: "#777",

      },
      fontFamily: {
        ten: ["Ten Mincho", "serif"],
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
