module.exports = {
  root: true,
  extends: ['./packages/eslint-config-y-base'],
  overrides: [
    {
      files: ['**/test/**/*.js'],
      rules: {
        'func-names': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
