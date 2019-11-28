module.exports = {
  extends: [
    'y-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-extra-parens': 'off',
    '@typescript-eslint/camelcase': [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        allow: [],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
