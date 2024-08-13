/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  extends: ['@offlegacy/configs/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}
