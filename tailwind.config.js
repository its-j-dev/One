module.exports = {
  content: [
    "./dist/**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx,vue,astro}"
  ],
  safelist: [
    { pattern: /.*/ },
  ],
  theme: { extend: {} },
  plugins: [],
};