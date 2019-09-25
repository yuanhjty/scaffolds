module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/export': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'warn',
    'import/first': 'error',
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'] },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'warn',
  },
};
