module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "var(--theme-primary)",
          light: "var(--theme-primary-light)",
          dark: "var(--theme-primary-dark)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
