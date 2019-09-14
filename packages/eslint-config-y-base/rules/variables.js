module.exports = {
  rules: {
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'all' }],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  },
};
