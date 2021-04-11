module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'defaults',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
}
