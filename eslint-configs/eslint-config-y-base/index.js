module.exports = {
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/imports.js',
    './rules/possible-errors.js',
    './rules/styles.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
    amd: true,
    jest: true,
    mocha: true,
    worker: true,
  },
  globals: {},
};
