module.exports = {
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }],
    'generator-star-spacing': ['error', { before: true, after: false }],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', { before: true, after: false }],
  },
};
