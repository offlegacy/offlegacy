/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@offlegacy/configs/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
