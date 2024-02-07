/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      tn: "0px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        main: "#2D2D2D",
        primary: "#08A081",
        secondary: "#417465",
        "dark-green": "#2A5446",
        "green-seakun": "#08A081",
        "green-seakun-secondary": "#F4F9F8",
        "green-seakun-dark": "#52AF9C",
        "green-seakun-secondary-dark": "#00BA88",
        "warning-seakun": "#FFEBC3",
        checkout: "#BEEAE2",
        payment: "rgba(255, 255, 255, 0.6)",
        "gray-secondary": "#2D2D2D",
        "green-primary": "#08A081",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen tn": {
            maxWidth: "400px",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          },
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen lg": {
            maxWidth: "1024px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen xl": {
            maxWidth: "1440px",
            paddingLeft: "10rem",
            paddingRight: "10rem",
          },
        },
        ".container-sekurban": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen tn": {
            maxWidth: "328px",
          },
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1240px",
          },
        },
        ".container-semabar": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen lg": {
            maxWidth: "1024px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen xl": {
            maxWidth: "1440px",
            paddingLeft: "10rem",
            paddingRight: "10rem",
          },
        },
      });
    }),
  ],
}

