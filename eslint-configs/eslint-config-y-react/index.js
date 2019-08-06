module.exports = {
  extends: ['y-base', './rules/jsx-a11y.js', './rules/react.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
