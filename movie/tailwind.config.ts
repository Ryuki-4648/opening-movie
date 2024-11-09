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
        grayLight01: "#d4d4d4",
        blue01: "#007bff",
        navy01: "#35495e",
        gold01: "#e6b422",
        bg01: "#fff9f9",
        yellow01: "#ffcc33",
        black01: "#1f1f1f",
        black02: "#303030",
        white01: "#fafafa",
        pink01: "#e3a1a1",
        border01: "#777",

      },
      fontFamily: {
        ten: ["Ten Mincho", "serif"],
        cabin: ["Cabin", "sans-serif"],
        yuGothic: ["Yu Gothic Medium", "游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
