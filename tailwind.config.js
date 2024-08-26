module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DF1F32",
        secondary: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inner-custom": "inset -2px -6px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
