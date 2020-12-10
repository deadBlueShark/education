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
    'no-multi-assign': 'error',
    'quotes': ['error', 'single'],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'quote-props': ['error','as-needed'],
    'no-new-wrappers': 'error',
    'no-extra-boolean-cast': 'error',
    'eqeqeq': 'error',
  },
};