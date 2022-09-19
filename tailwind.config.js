module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#282c37",
        black2: "#313541",
        black3: "#1c1f27",
        green: "#92d72e",
        cyan: "#72cdd2",
      },
    },
  },
  plugins: [require("daisyui")],
};
