module.exports = {
  purge: ["./src/**/*.{js,ts,tsx}"],
  important: true,
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    extend: {}
  },
  variants: {
    extend: {
      margin: ["first", "last"]
    }
  },
  plugins: []
};
