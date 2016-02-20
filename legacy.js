module.exports = {
  extends: [
    'eslint-config-nashdot/rules/best-practices',
    'eslint-config-nashdot/rules/errors',
    'eslint-config-nashdot/rules/legacy',
    'eslint-config-nashdot/rules/node',
    'eslint-config-nashdot/rules/style',
    'eslint-config-nashdot/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
