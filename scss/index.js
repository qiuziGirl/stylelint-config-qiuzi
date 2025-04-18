'use strict';

module.exports = {
  'extends': [
    '../css',
    'stylelint-config-recommended-scss',
  ],
  'rules': {
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-pattern': '^[a-z][a-z-]*$',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/load-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/dimension-no-non-numeric-values': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[a-z][a-z-\\d]*$',
    'scss/no-duplicate-mixins': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};
