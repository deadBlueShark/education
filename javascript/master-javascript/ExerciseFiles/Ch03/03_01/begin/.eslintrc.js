'use strict';

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    'strict': ['error', 'global'],
    'no-var': 'error',
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    'camelcase': 'error',
    'no-unused-vars': 'error',
  },
};