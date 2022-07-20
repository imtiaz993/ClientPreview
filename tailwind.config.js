const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [plugin],
  theme: {
    screens: {
      xs: { min: "480px" },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        lightGrey: "#F5F5F5",
        textGreish: "#373737",
        darkBlue: "#2281FC",
        textDark: "#2C2A2A",
        textDarkBlue: "#2281FC",
        textDarkSmall: "#212020",
        linearGrad: "#0BA5FC",
        cardcolor: "#28203F",
        cardtextcolor: "#96929C",
        cardhovercolor: "#0BA5FC",
        Flandingtext: "#212020",
        Flandingtext1: "#0E2B47",
        testimoColor: "#119BFC",
      },
      fontFamily: {
        lato: "Lato",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
};
