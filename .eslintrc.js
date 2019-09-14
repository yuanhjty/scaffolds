module.exports = {
  root: true,
  extends: ['./eslint-configs/eslint-config-y-base'],
  overrides: [
    {
      files: ['**/test/**/*.js'],
      rules: {
        'func-names': 'off',
      },
    },
  ],
};
