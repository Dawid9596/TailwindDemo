module.exports = {
  content: ["./src/**/*.{html, css}"],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { preset: "default" },
  },
};
