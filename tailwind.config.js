/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Font1", "Inter"],
        secondaryFont: ["Font1", "PT Sans"],
      },
      colors: {
        primaryColor: "#030813",
        secondaryColor: "red",
        tartiaryColor: "#3F3F3F",
        tableColor: "#6A6A6A",
        modalBg: "#F5F5F5",
      },
    },
  },
  plugins: [require("daisyui")],
};
