module.exports = {
  'extends': [
    'eslint-config-nashdot/legacy',
    'eslint-config-nashdot/rules/es6'
  ].map(require.resolve),
  'rules': {}
};
