module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: "*.html",
      options: {
        printWidth: 200,
      },
    },
  ],
  plugins: [require("prettier-plugin-tailwindcss")],
};
